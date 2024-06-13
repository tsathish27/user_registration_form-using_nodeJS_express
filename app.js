// const express = require('express');
// const PORT = process.env.PORT || 4000;

// const app = express();

// // Middleware

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));



// app.get('/form', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
    
// });



// app.post('/formPost', (req, res) => {
//     console.log(req.body);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     });


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (like the HTML form)
app.use(express.static('public'));

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/formPost', (req, res) => {
    console.log(req.body);
    // Perform validation and processing here

    // Respond to the client
    res.json({ message: 'Form submission received', data: req.body });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
