import * as fs from 'node:fs';
import * as path from 'node:path';
import { outdent } from 'outdent';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, getProjectDir } from 'lion-system';
import { compileLatex } from 'latex-workflow';

const projectDir = getProjectDir(import.meta.url);
chProjectDir(import.meta.url);

const bundleFolder = path.join(projectDir, 'ComputerScienceIA');
const bundleCodeFolder = path.join(bundleFolder, 'Product');

console.info('Removing old bundle product folder...');
fs.rmSync(bundleCodeFolder, { force: true, recursive: true });

console.info('Cloning the repository...');
exec(
	'git clone git@github.com:leonzalion/timeblocker ComputerScienceIA/Product',
	{
		stdio: 'inherit',
	}
);

console.info('Installing dependencies...');
exec('pnpm i', { stdio: 'inherit', cwd: bundleCodeFolder });

const frontendEnvFileContents = outdent`
  VITE_BACKEND_URL=https://ib-timeblocker.herokuapp.com/trpc
`;

fs.writeFileSync(
	path.join(bundleCodeFolder, 'frontend/.env.production'),
	frontendEnvFileContents
);

console.info('Building frontend...');
exec('pnpm build:frontend', { stdio: 'inherit', cwd: bundleCodeFolder });

// Copying the PDFs into the bundle
const docsFolder = path.join(projectDir, 'docs');

const latexFilenames = [
	'Criterion_A_Planning.tex',
	'Criterion_B_Design.tex',
	'Criterion_B_Record_of_tasks.tex',
	'Criterion_C_Development.tex',
	'Criterion_E_Evaluation.tex',
	'Appendix.tex',
];

const documentationFolder = path.join(bundleFolder, 'Documentation');
await fs.promises.mkdir(documentationFolder, { recursive: true });

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

await fs.promises.cp(
	path.join(docsFolder, 'Criterion_D_Functionality.mp4'),
	path.join(documentationFolder, 'Criterion_D_Functionality.mp4')
);

console.info('Removing node_modules...');
// Remove node_modules before zipping the file
exec('rm -rf .git node_modules **/node_modules', {
	shell: true,
	stdio: 'inherit',
	cwd: bundleCodeFolder,
});

console.info('Removing LaTeX files...');
fs.rmSync(path.join(bundleCodeFolder, 'docs'), { recursive: true });

fs.writeFileSync(
	path.join(bundleFolder, 'Product/run.bat'),
	outdent`
		python -m http.server --directory ./code/frontend/dist 7800
	`
);

console.info('Creating zip files...');
exec('zip -r ComputerScienceIA.zip ComputerScienceIA', { stdio: 'inherit' });
