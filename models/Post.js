const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const Post = new Schema({
    category : String,
    title : String,
    description : String,
    Publisher : String,
    atDate : Date,
    img : String
});

Post.statics.findPostAt_id = function( { _id } ){
    return this.findOne({
        _id
    });
};

exports.module = mongoose.model('Post', Post);

