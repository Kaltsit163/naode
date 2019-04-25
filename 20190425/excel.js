const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
    sourceFile: '../../城市列表2.0.xls',
    columnToKey: {
        A: 'cityId',
        B: 'cityName'
    }
});

fs.writeFile('city.json', JSON.stringify(result), 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});