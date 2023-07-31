
const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const csvtojson = require('csvtojson');
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
