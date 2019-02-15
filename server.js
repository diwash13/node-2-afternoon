const express = require ('express')
const bodyParser = require ('body-parser')
require('dotenv').config()
const massive = require ('massive')

const ctrl = require('./controller')

const app = express()

const{CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(4000, () => console.log('Sweeetttt'))
}).catch(err => console.log(err))

app.get('/api/products', ctrl.getProducts)

app.post('/api/product', ctrl.createProduct)

app.get('/api/product/:id', ctrl.getProduct)

app.delete('/api/product/:id', ctrl.deleteProduct)

app.put('/api/product/:id', ctrl.updateProduct)

