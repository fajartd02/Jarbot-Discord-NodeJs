const fs = require('fs'); // buat file system(CRUD File)
// const path = require('path'); // buat path
// menulis program ke file
// fs.writeFileSync('./my text.txt', '\nFajar Ganteng', { encoding: 'utf-8', flag: 'a'});

// baca file
// const content = fs.readFileSync('./my text.txt', { encoding: 'utf-8' });
// console.log(content);

// Cek apakah file ada atau tidak
// if(fs.existsSync('./my text.txt')) {
//     console.log('File Exist!');
// } else {
//     console.log('File Not Exist');
// }

//delete file
// fs.unlinkSync('./my text.txt');

// delete folder kosong
// fs.rmdirSync('myDir');

// delete folder ada isi / tidak
// fs.rmSync('myDir', { recursive: true, force: true });

// macam - macam for loop
// const files = fs.readdirSync('mydir');

// for (const x in files) {
//     console.log(x);
// }

// console.log('-------------------------');

// for (const x of files) {
//     console.log(x);
// }

// rmSync Manual
// function deleteRecursively(filePath) {
//     if (!fs.existsSync(filePath)) {
//         console.log('CANNOT FIND ' + filePath);
//         return;
//     }
    
//     if (fs.lstatSync(filePath).isDirectory()){
//         //baca isi file
//         const fileList = fs.readdirSync(filePath);
//         for (const file of fileList) {
//             const fullPath = path.join(filePath, file);
//             // fs.unlinkSync(fullPath);
//             deleteRecursively(fullPath);
//             console.log(`Deleted Dir File ${fullPath}`);
//         }

//         fs.rmdirSync(filePath);
//     } else {
//         fs.unlinkSync(filePath);
//         console.log('DELETED FILE ' + filePath);
//     }
// }
// deleteRecursively('myDir');


