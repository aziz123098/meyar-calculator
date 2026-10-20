import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
import {build} from 'esbuild';
await rm('www',{recursive:true,force:true});await mkdir('www',{recursive:true});
for(const f of ['index.html','style.css','manifest.webmanifest','sw.js','privacy.html'])await copyFile(f,`www/${f}`);
await cp('assets','www/assets',{recursive:true});
await build({entryPoints:['app.js'],outfile:'www/app.js',bundle:true,format:'esm',minify:true,target:['safari15'],legalComments:'eof'});
console.log('Meyar web bundle ready.');
