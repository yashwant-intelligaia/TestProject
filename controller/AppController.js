'use strict';
const xl = require('excel4node');
const wb = new xl.Workbook();

exports.getData = async function(ctx, next){
    var ws = wb.addWorksheet('Sheet 1');
    var style = wb.createStyle({
        font: {
        color: '#FF0800',
        size: 12,
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
    });
    ws.cell(1, 1)
    .number(100)
    .style(style);
    
    // Set value of cell B1 to 200 as a number type styled with paramaters of style
    ws.cell(1, 2)
    .number(200)
    .style(style);
    
    // Set value of cell C1 to a formula styled with paramaters of style
    ws.cell(1, 3)
    .formula('A1 + B1')
    .style(style);

    ws.cell(2, 1)
    .number(100)
    .style(style);
    
    // Set value of cell B1 to 200 as a number type styled with paramaters of style
    ws.cell(2, 2)
    .number(200)
    .style(style);
    
    // Set value of cell C1 to a formula styled with paramaters of style
    ws.cell(2, 3)
    .formula('A1 + B1')
    .style(style);
    
    ws.cell(3, 1)
    .number(300)
    .style(style);
    
    // Set value of cell B1 to 200 as a number type styled with paramaters of style
    ws.cell(3, 2)
    .number(400)
    .style(style);
    
    // Set value of cell C1 to a formula styled with paramaters of style
    ws.cell(3, 3)
    .formula('A2 + B2')
    .style(style);
    

    ws.row(2).group(1, true);
    ws.row(3).group(1, true);
    
    wb.write('ExcelFileWithGroup.xlsx', function(err, stats) {
        if (err) {
          console.error(err);
        } else {
          console.log(stats); // Prints out an instance of a node.js fs.Stats object
        }
      });
    ctx.body ={"status":"success","data":"hello"}
}

exports.postData = function(ctx, next){
    ctx.body ={"status":"success","data":"post hello"}
}
