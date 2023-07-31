
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



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'readcsv.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
