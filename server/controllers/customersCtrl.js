Customer = require('../models/customer')

var findAll = function (req, res) {
  Customer.find({}, handleFind)
  function handleFind(err, customers) {
    err ? res.status(500).send(err) : res.send(customers)
  }
}

var findOne = function (req, res) {
  Customer.find({_id : req.params.id}, handleFindOne)
  function handleFindOne(err, customer) {
    err ? res.status(500).send(err) : res.send(customer)
  }
}

var update = function (req, res) {
  Customer.findByIdAndUpdate(
    req.params.id,
    {$set : req.body},
    {runValidators : true},
    handleUpdate
  )
  function handleUpdate(err, customer) {
    err ? res.status(500).send(err) : res.send(customer)
  }
}

var remove = function (req, res) {
  Customer.findByIdAndRemove(req.params.id, handleRemove)
  function handleRemove(err, customer) {
    err ? res.status(500).send(err) : res.send(customer)
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove
}
