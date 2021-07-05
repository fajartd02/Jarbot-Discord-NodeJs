const fs = require('fs');

// 1. require
// const config = require('./myDir/test.json');
// console.log(config.array);
// console.log(config['new-object']);

// 2. read file
// const content = fs.readFileSync('./myDir/test.json', {encoding: 'utf-8'});
// try{
//     const config = JSON.parse(content);
//     console.log(config['array']);
// } catch(err) {
//     console.log('GAGAL MEMBACA JSON FILE');
// }

//buat json
const obj = {
    'jet' : 1,
    key : 'value',
    myfav : 'genshin',
    'new-object': {
        arr: [2, 4, 5]
    }
};

fs.writeFileSync('./myDir/myData.json', JSON.stringify(obj, null, 4), { encoding:'utf-8' });

