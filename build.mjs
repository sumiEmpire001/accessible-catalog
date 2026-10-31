import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const read=name=>readFileSync(new URL(name,import.meta.url),'utf8');
let html=read('index.html').replace('<link rel="stylesheet" href="styles.css">',()=>'<style>'+read('styles.css')+'</style>').replace('<script type="module" src="src/app.mjs"></script>','');
const script=['src/products.mjs','src/catalog.mjs','src/app.mjs'].map(name=>read(name).replace(/^import .*;\n/gm,'').replace(/^export /gm,'')).join('\n');
html=html.replace('</body>',()=>'<script>'+script+'</script></body>');mkdirSync(new URL('dist/',import.meta.url),{recursive:true});writeFileSync(new URL('dist/index.html',import.meta.url),html);console.log('Built self-contained dist/index.html');
