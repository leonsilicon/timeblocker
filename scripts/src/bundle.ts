import process from 'node:process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { outdent } from 'outdent';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, getProjectDir } from 'lion-system';
import { compileLatex } from 'latex-workflow';

chProjectDir(import.meta.url);

console.info('Removing old bundle/code folder...');
fs.rmSync('bundle', { force: true, recursive: true });

console.info('Cloning the repository...');
exec('git clone git@github.com:leonzalion/timeblocker bundle/code', {
	stdio: 'inherit',
});

process.chdir('bundle/code');

console.info('Installing dependencies...');
exec('pnpm i', { stdio: 'inherit' });

const frontendEnvFileContents = outdent`
  VITE_BACKEND_URL=https://ib-timeblocker.herokuapp.com/trpc
`;

fs.writeFileSync('frontend/.env.production', frontendEnvFileContents);

console.info('Building frontend...');
exec('pnpm build:frontend', { stdio: 'inherit' });

// Copying the PDFs into the bundle

const projectDir = getProjectDir(import.meta.url);
const docsFolder = path.join(projectDir, 'docs');

process.chdir(docsFolder);

const latexFilenames = [
	'Crit_A_Planning.tex',
	'Crit_B_Design.tex',
	'Crit_B_Record_of_tasks.tex',
	'Crit_C_Development.tex',
	'Crit_E_Evaluation.tex',
];

for (const latexFilename of latexFilenames) {
	compileLatex({
		latexFilePath: latexFilename,
		outputDirectory: 'out',
	});
}
