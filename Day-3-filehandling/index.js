// console.log("file handling")

import {readFile,writeFile,appendFile,mkdir} from 'fs/promises'

//read file
const read_file = async(fileName) => {
    const data = await readFile(fileName,"utf-8");
    console.log(data);
};
read_file('sample.txt');


// create file
const create_files= async(fileName,content)=>{
    await writeFile(fileName,content)
    console.log("file created successfully")
}
create_files('newfile.txt','hi , How much beautyfull sunsets')
create_files('App.jsx','this is a mern stack course')


//add contend to file 
const append_file = async(fileName,content)=>{
    await appendFile(fileName,content);
}
appendFile('App.jsx','this is extra content')


//create folder directory
const create_dir = async(dir)=> {
    await mkdir(dir,{recursive:true});
}
create_dir('public')

// src/components/java
create_dir('src/components/java')

create_dir('src/py')
