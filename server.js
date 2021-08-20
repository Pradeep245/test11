const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const fs = require('fs')
var html_to_pdf = require('html-pdf-node');


app.get('/',(req,res)=>{
   

let options = { format: 'A4' };

let file = { url: "https://www.w3.org/TR/css-page-3/" };
html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFileSync('./Contract.pdf', pdfBuffer);
    res.contentType('application/pdf');
    res.send(pdfBuffer);
});
})


app.listen(PORT, console.log("lising on 5000"))