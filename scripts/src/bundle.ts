import * as fs from 'node:fs';
import outdent from 'outdent';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir } from 'lion-system';

chProjectDir(import.meta.url);
exec('pnpm build:frontend');
const runBat = outdent```
	explorer "myfile"
```;
fs.writeFileSync('frontend/dist/run.bat', runBat);
