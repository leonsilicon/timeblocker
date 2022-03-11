import * as fs from 'node:fs';
import * as path from 'node:path';
import { outdent } from 'outdent';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, getProjectDir } from 'lion-system';
import { compileLatex } from 'latex-workflow';

const projectDir = getProjectDir(import.meta.url);
chProjectDir(import.meta.url);

const submissionFolder = path.join(projectDir, 'ComputerScienceIA');
const submissionProductFolder = path.join(submissionFolder, 'Product');

console.info('Removing old submission product folder...');
fs.rmSync(submissionProductFolder, { force: true, recursive: true });

console.info('Cloning the repository...');
exec(
	'git clone git@github.com:leonzalion/timeblocker ComputerScienceIA/Product',
	{
		stdio: 'inherit',
	}
);

console.info('Installing dependencies...');
exec('pnpm i', { stdio: 'inherit', cwd: submissionProductFolder });

const frontendEnvFileContents = outdent`
  VITE_BACKEND_URL=https://ib-timeblocker.herokuapp.com/trpc
`;

fs.writeFileSync(
	path.join(submissionProductFolder, 'frontend/.env.production'),
	frontendEnvFileContents
);

console.info('Building frontend...');
exec('pnpm build:frontend', { stdio: 'inherit', cwd: submissionProductFolder });

// Copying the PDFs into the submission
const docsFolder = path.join(projectDir, 'docs');

const latexFilenames = [
	'Criterion_A_Planning.tex',
	'Criterion_B_Design.tex',
	'Criterion_B_Record_of_tasks.tex',
	'Criterion_C_Development.tex',
	'Criterion_E_Evaluation.tex',
	'Appendix.tex',
];

const documentationFolder = path.join(submissionFolder, 'Documentation');
fs.mkdirSync(documentationFolder, { recursive: true });

await Promise.all(
	latexFilenames.map(async (latexFilename) => {
		await compileLatex({
			latexFilePath: path.join(docsFolder, latexFilename),
			outputDirectory: 'out',
		});
		const latexDocumentName = `${path.basename(latexFilename, '.tex')}.pdf`;
		await fs.promises.cp(
			path.join(docsFolder, 'out', latexDocumentName),
			path.join(documentationFolder, latexDocumentName),
			{ force: true }
		);
	})
);

fs.cpSync(
	path.join(docsFolder, 'Criterion_D_Functionality.mp4'),
	path.join(documentationFolder, 'Criterion_D_Functionality.mp4')
);

console.info('Removing node_modules...');
// Remove node_modules before zipping the file
exec('rm -rf .git node_modules **/node_modules', {
	shell: true,
	stdio: 'inherit',
	cwd: submissionProductFolder,
});

console.info('Removing LaTeX files...');
fs.rmSync(path.join(submissionProductFolder, 'docs'), { recursive: true });

fs.writeFileSync(
	path.join(submissionFolder, 'Product/run.bat'),
	outdent`
		python -m http.server --directory ./frontend/dist 7800
	`
);

exec('chmod +x ComputerScienceIA/Product/run.bat');

fs.cpSync(
	'assets/cover_page.html',
	path.join(submissionFolder, 'cover_page.html')
);

console.info('Creating zip files...');
exec('zip -r ComputerScienceIA.zip ComputerScienceIA', { stdio: 'inherit' });
