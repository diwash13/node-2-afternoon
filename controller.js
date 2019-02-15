module.exports = {
    getProducts: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_products().then((response) => {
        res.status(200).send(response)
    })
    },

    createProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body
        dbInstance.create_product(name, description, price, image_url).then(response => {
            res.status(200).send(response)
        }).catch((err) => {console.log(err)})
    },
    getProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.read_product(id).then((response) => {
            res.status(200).send(response)
        }).catch((err) => {console.log(err)})
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_product(id).then((response) => {
            res.send(response)
        }).catch((err) => {console.log(err)})
    },

    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const{id} = req.params
        const {name, description, price, image_url} = req.body
        dbInstance.update_product(id, name, description, price, image_url).then(response => {
            res.status(200).send(response)
        }).catch((err) => {console.log(err)})
    }
}
