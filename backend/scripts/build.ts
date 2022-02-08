import process from 'node:process';
import { execaCommandSync as exec } from 'execa';

try {
	exec('tsc', { stdio: 'inherit' });
	exec('tsc-alias', { stdio: 'inherit' });
} catch {
	process.exit(1);
}
