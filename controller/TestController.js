'use strict';
const ExcelJS = require('exceljs');

exports.getData = async function(ctx, next){
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('My Sheet');
    const worksheet = workbook.getWorksheet('My Sheet');
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
      ];
    worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
    worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
    worksheet.getRow(2).outlineLevel = 1;
    worksheet.pageSetup.pageOrder = 'overThenDown';
    // const workbook = createAndFillWorkbook();
    await workbook.xlsx.writeFile("Sample4.xlsx");
    ctx.body ={"status":"success","data":"hello"}
}
