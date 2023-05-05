const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors())
const categories = require('./data/categories.json')
console.log(categories);
app.get('/', (req, res) => {
    res.send('Food Website is Running')
});
app.get('/categories', (req, res) => {
    res.send(categories);
    console.log(categories);
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const category = categories.find(category => category.id === id);
    if (category) {
        res.send(category);
    } else {
        res.status(404).send('Category not found');
    }
});

app.listen(port, () => {
    console.log(`Thai Delight API is running on port:${port}`)
})