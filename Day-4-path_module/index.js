// console.log("path module")

import path from 'path'

// join two or more file
const fullPath = path.join('/path','index.py','file.java')
console.log("files join =",fullPath)


// index.py, test.java
const absolutePath = path.resolve();
// console.log('we are currently working on =',absolutePath)

// extensionn name
const extname = path.extname('resume.pdf');
console.log('extname',extname)
if(extname=='.pdf'){
    console.log('ok');
} else{
    console.log("not supported");
}
