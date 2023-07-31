// let express = require('express');
// let app = express();
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
// app.get('/time', function (req, res) {
//     let d = new Date();
//     let msg = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
//     res.send(msg);
// });
// app.get('/date', function (req, res) {
//     let d = new Date();
//     let msg = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
//     res.send(msg);
// });
// app.listen(8080);

// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const csvtojson = require('csvtojson');
const app = express();
const port = process.env.PORT || 3000;

// Function to read the CSV data and convert it to JSON
async function readDataFromFile() {
    const dataFilePath = path.join(__dirname, 'Table_Input.csv');
    const jsonArray = await csvtojson().fromFile(dataFilePath);
    return jsonArray;
}

// API endpoint to fetch data from Table 1
app.get('/api/table1', async (req, res) => {
    try {
        const table1Data = await readDataFromFile();
        res.json(table1Data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Table 1' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'readcsv.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
