const express = require('express');
const { networkInterfaces } = require('os');
const path = require('path');

const app = express();
const nets = networkInterfaces();

const PORT = 3000;

let downloadCounter = 1;

app.get('/firmware/httpUpdateNew.bin', (request, response) => {
    response.download(path.join(__dirname, 'httpUpdateNew.bin'), 'httpUpdateNew.bin', (err) => {
        if (err) {
            console.error("Problem on download firmware: ", err)
        } else {
            downloadCounter++;
        }
    });
    console.log('Your file has been downloaded ' + downloadCounter + ' times!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    console.log(`add bin in ${__dirname}`);
});