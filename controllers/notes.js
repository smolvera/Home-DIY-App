var Comment = require("../models/Comment");
var makeDate = require("../scripts/date");

module.exports = {
    get: function(data, cb) {
        Comment.find({
            _headlineId: data._headlineId
        }, cb);
    },
    save: function(data, cb) {
        var newComment = {
            _headlineId: dta._id,
            date: makeDate(),
            commentText: data.commentText
        };
        Comment.create(newComment, function(err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(doc)
            }
        });
    },
    delete: function(data, cb) {
        Comment.remove({
            _id: data._id
        }, cb);
    }
};