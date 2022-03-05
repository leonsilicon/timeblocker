import * as fs from 'node:fs';
import * as path from 'node:path';
import { outdent } from 'outdent';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, getProjectDir } from 'lion-system';
import { compileLatex } from 'latex-workflow';

const projectDir = getProjectDir(import.meta.url);
chProjectDir(import.meta.url);

const bundleFolder = path.join(projectDir, 'bundle');
const bundleCodeFolder = path.join(bundleFolder, 'code');

console.info('Removing old bundle/code folder...');
fs.rmSync(bundleCodeFolder, { force: true, recursive: true });

console.info('Cloning the repository...');
exec('git clone git@github.com:leonzalion/timeblocker bundle/code', {
	stdio: 'inherit',
});

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
	'Crit_A_Planning.tex',
	'Crit_B_Design.tex',
	'Crit_B_Record_of_tasks.tex',
	'Crit_C_Development.tex',
	'Crit_E_Evaluation.tex',
	'Appendix.tex'
];

await Promise.all(
	latexFilenames.map(async (latexFilename) => {
		await compileLatex({
			latexFilePath: path.join(docsFolder, latexFilename),
			outputDirectory: 'out',
		});
		const latexDocumentName = `${path.basename(latexFilename, '.tex')}.pdf`;
		await fs.promises.cp(
			path.join(docsFolder, 'out', latexDocumentName),
			path.join(bundleFolder, latexDocumentName),
			{ force: true }
		);
	})
);

console.info('Removing node_modules...');
// Remove node_modules before zipping the file
exec('rm -rf .git node_modules **/node_modules', {
	shell: true,
	stdio: 'inherit',
	cwd: bundleCodeFolder,
});

console.info('Creating zip files...');
exec('zip -r bundle.zip bundle', { stdio: 'inherit' });
