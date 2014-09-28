var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds041160.mongolab.com:41160/books');


var BookSchema = mongoose.Schema({
    id: String,
    items: [{
        title: String,
        ISBN: Number,
        publisher: String
    }]
});

var AuthorSchema = mongoose.Schema({
    name:  {type: String, index: true },
    bio: String,
    books: [BookSchema]
});

AuthorSchema.methods.sendBook = function(Book, cb){
    this.books.push(book);
    this.save(cb);
}


var Book = mongoose.model('Book', BookSchema);

var Author = mongoose.model('Author', AuthorSchema);


module.exports.Book = Book;
module.exports.Author = Author;

