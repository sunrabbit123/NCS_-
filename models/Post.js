const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;

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
    description : String,
    picturePath : String
});

Post.statics.findPostAt_id = function( id ){
    const o_id = String(id);
    return this.findById(o_id);
};
Post.statics.findAll = function(){
    return this.find();
    
}
Post.statics.newPost = function({
    mini_title = '',
    title,
    publisher,
    description
}, Path){
    const posts = new this({
        mini_title,
        title,
        publisher,
        description,
        picturePath : Path
    });
    return posts.save();
}
module.exports = mongoose.model('Post', Post);

