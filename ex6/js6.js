

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/saveInput', (req, res) => {
    // Get the message from the request body
    const { Nome, TextArea } = req.body;
    console.log( Nome, TextArea )
    // Write the message to a JSON file
    const data = JSON.stringify({  Nome, TextArea }) + '\n';
    fs.appendFile(path.join(__dirname, 'JSON.json'), data, (err) => {
        if (err) {
            console.error('Error writing message to file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Message written to file');
            res.status(200).send('Message written to file');
        }
    });
});



        document.getElementById('formCritic').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
        
            const formData = new FormData(this);
            fetch('http://localhost:3000/saveInput', {
                method: 'POST',
                body: formData
            })
        });
        
        
     

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});