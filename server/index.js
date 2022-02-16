const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 3001
const quizList_path = path.resolve(__dirname, './data/quizList.json');
const quizeSelectList_path = path.resolve(__dirname, './data/quizeSelectList.json');


const app = express();

app.use(express.json());

app.get('/quizeSelect', (req, res) => {
    fs.readFile(quizeSelectList_path, 'utf8', (err, data) => {
        res.send(data);
    })
});

app.get('/quize', (req, res) => {
    fs.readFile(quizList_path, 'utf8', (err, data) => {
        res.send(data);
    })
});

app.post('/quize', (req, res) => {

    fs.readFile(quizList_path, 'utf8', (err, data) => {
        let quizList = JSON.parse(data);
        let good = req.body;
        quizList.unshift(good);
        
        fs.writeFile(quizList_path, JSON.stringify(quizList), (err) => {
            res.send(quizList);
            res.end();
        });
    });

});

app.delete('/quize/:id', (req, res) => {
    fs.readFile(quizList_path, 'utf8', (err, data) => {
        let quizList = JSON.parse(data);
        const itemId = req.params.id;
        let index = quizList.findIndex((item) => item.product_id == itemId);
        quizList.splice(index, 1);

        fs.writeFile(quizList_path, JSON.stringify(quizList), (err) => {
            res.send(quizList);
            res.end();
        });
    });
});


app.listen(port, function () {
    console.log('server is running on port ' + port + '!')
})