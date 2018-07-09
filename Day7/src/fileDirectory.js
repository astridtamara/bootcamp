// @flow
/* global __dirname */

import fs from 'fs';
import {join} from 'path';

let path = join(__dirname, '../flow-typed');

fs.readdir(path, (error, fileList) =>{
    if(error){
        throw error;
    }

    let done = () => {
        for(let fileName of fileList){
            let res = allResults.get(fileName);
            if(res){
                console.log(fileName, res.size);
            }
        }
        console.log("DONE");
    }

    let allResults = new Map();

    let i = 0;
    let doneNextFile = () => {
        fs.stat(join(path, fileList[i]), (error, result) => {
            console.log(fileList[i], ':' , result.size, 'bytes');
            if(i === fileList.length - 1){
                //done();
                console.log('DONE');
            }
            else{
                i += 1;
                doneNextFile();
            }
        });
    }

    doneNextFile();
});