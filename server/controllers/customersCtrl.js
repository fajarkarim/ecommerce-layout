Customer = require('../models/customer')

var findAll = function (req, res) {
  Customer.find({}, handleFind)
  function handleFind(err, books) {
    err ? res.status(500).send(err) : res.send(books)
  }
}

var findOne = function (req, res) {
  Item.find({_id : req.params.id}, handleFindOne)
  function handleFindOne(err, book) {
    err ? res.status(500).send(err) : res.send(book)
  }
}

var findByCategory = function (req, res) {
  Item.find({category : req.params.category}, handleFindByCategory)
  function handleFindByCategory(err, books) {
    err ? res.status(500).send(err) : res.send(books)
  }
}

var create = function (req, res) {
  let item = new Item({
    name : req.body.name,
    image : req.body.image,
    description : req.body.description,
    stock : req.body.stock,
    price : req.body.price
  })
  Item.save(handleCreate)
  function handleCreate(err, book) {
    err ? res.status(500).send(err) : res.send(`${book.name} created`)
  }
}

var update = function (req, res) {
  Item.findByIdAndUpdate(
    req.params.id,
    {$set : req.body},
    {runValidators : true},
    handleUpdate
  )
  function handleUpdate(err, item) {
    err ? res.status(500).send(err) : res.send(item)
  }
}

var remove = function (req, res) {
  Item.findByIdAndRemove(req.params.id, handleRemove)
  function handleRemove(err, item) {
    err ? res.status(500).send(err) : res.send(item)
  }
}

module.exports = {
  findAll,
  findOne,
  findByCategory,
  create,
  update,
  remove
}
