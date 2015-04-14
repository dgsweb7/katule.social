var mongo = require('../db/mongo');

function ProductsModel() 
{

}

ProductsModel.prototype.create = function(data, callback) {
	mongo.collection('products').save(data, callback);
}

ProductsModel.prototype.findOne = function(_id, callback) {
	mongo.collection('products').findOne({ _id: mongo.ObjectId(_id)}, callback);
}

ProductsModel.prototype.findAll = function(callback) {
	mongo.collection('products').find({}, callback);
}

ProductsModel.prototype.update = function(data, _id, callback) {
	mongo.collection('products').update({ _id: mongo.ObjectId(_id)}, data, callback);
}

ProductsModel.prototype.delete = function(_id, callback) {
	mongo.collection('products').remove({ _id: mongo.ObjectId(_id)}, callback);
}

module.exports = new ProductsModel();



