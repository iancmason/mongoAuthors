var models = require('./models');
// var faker = require('faker');

// for(var i=0; i<1000000; i ++) ({
// // add some faker records
// });

// models.Author.find({"address.state": "iowa"}), function(err, Author){
//   var stopTime = Date.now()
//   console.log('found', results.length, 'results');
//   console.log('took:', 'stopTime - startTime, 's');
// })





//get Author with name "thomas"
// models.Author.findOne({"name": "Bill"}, function(err, Author){
//     //Author is the Author instance we found
//     console.log(Author);

var author = new models.Author({ items:[{     
  name: "Bill OReilly",
  bio: "douche"  
}]      
})

    // create an Book,
    // add it to the Authors books,
    // save the Author
    // when saved, do: process.exit();
var books = new models.Book({ items:[{     
  title: "Bill OReillys screed",
  ISBN: 12345,
  Publisher: "Random House"   
}]      
})    

console.log(books)     

author.books.push(books)      

var whenDone = function(){     
  process.exit();     
}      

author.save(whenDone)







