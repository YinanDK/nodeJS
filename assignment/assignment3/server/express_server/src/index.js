const express = require('express');
const bodyParser = require('body-parser');
import { shopping_list, shopping_item } from './shoppinglist.js'

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const my_shopping_list = new shopping_list();

/**
 * Get all the item in the shopping list
 */
app.get("/shopping_list", (req, res) => {
    
    
    console.log("'my_shopping_list", my_shopping_list.list_of_item);
    res.send("done");
    
})

/**
 * Get a specific item from the shopping list
 */
app.get("/shopping_list/:id", (req, res) => {
   
    console.log("get the whole shopping list")
    res.send('done');
})

/**
 * Add an item from the shopping list
 */
app.post("/shopping_list", (req, res) => {
    const item = new shopping_item(req.body.name, req.body.amount, req.body.price);
    my_shopping_list.addItem(item);
    console.log("get the whole shopping list")
    res.send('my_shopping_list', my_shopping_list.list_of_item);
})

/**
 * Delete an item from the shopping list
 */
app.delete("/shopping_list/:id", (req, res) => {
    
})


app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})


