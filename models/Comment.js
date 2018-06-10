var mongoose = require("mongoose");

// Saves a reference to the Schema constructor
var Schema = mongoose.Schema;

// Constructor to create a new CommentSchema object
var commentSchema = new Schema({
  _commentId: {
    type:Schema.Types.ObjectId,
    ref: "Article"
  },
  date: String,
  commentText: String
});

// This creates our comment model from the above schema
var Comment = mongoose.model("Comment", commentSchema);

// Export the comment model
module.exports = Comment;