const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const Post = new Schema({
    mini_title : String,
    title : String,
    publisher : String,
    created_at : {
        type: Date,
        default : Date.now
    },
    description : String
});

Post.statics.findPostAt_id = function( { _id } ){
    return this.findOne({
        _id
    });
};
Post.statics.findAll = function(){
    return this.find();
    
}
Post.statics.newPost = function({
    mini_title = '',
    title,
    publisher,
    description
}){
    const posts = new this({
        mini_title,
        title,
        publisher,
        description
    });
    return posts.save();
}
module.exports = mongoose.model('Post', Post);

