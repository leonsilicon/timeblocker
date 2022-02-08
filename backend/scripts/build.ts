import process from 'node:process';
import { execaCommandSync as exec } from 'execa';
import { copyPackageFiles} from 'lion-system'

try {
	exec('tsc', { stdio: 'inherit' });
	exec('tsc-alias', { stdio: 'inherit' });
	copyPackageFiles();
} catch {
	process.exit(1);
}
