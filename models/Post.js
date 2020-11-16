const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const Post = new Schema({
    title : String,
    publisher : String,
    created_at : Date,
    description : String
});

Post.statics.findPostAt_id = function( { _id } ){
    return this.findOne({
        _id
    });
};

exports.module = mongoose.model('Post', Post);

