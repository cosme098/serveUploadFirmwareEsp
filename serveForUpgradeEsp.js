const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4555;

const NEW_VERSION = 0.2;

let downloadCounter = 1;

app.get('/firmware/httpUpdateNew.bin', (request, response) => {
    if (request.headers["x-ESP8266-version"] < NEW_VERSION) {
        response.download(path.join(__dirname, 'httpUpdateNew.bin'), 'httpUpdateNew.bin', (err) => {
            if (err) {
                console.error("Problem on download firmware: ", err)
            } else {
                downloadCounter++;
            }
        });
        console.log('Your file has been downloaded ' + downloadCounter + ' times!')
    } else {
        console.log('Your file is up to date!');
    }
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    console.log(`add bin in ${__dirname}`);
});