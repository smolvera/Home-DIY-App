var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    headline:  {
        type: String,
        required: true,
    },
    summary:  {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        required: false
    }
  });

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;
 