const mongoose = require('../database/mongoose');

const Post = require('../../domain/entities/Post');

const postSchema = new mongoose.Schema({
    title: String,
    intro: String,
    content: String, 
    author: String,
});

const PostModel = mongoose.model('Post', postSchema);

class MongoPostRepository {
    async save(post){
        const postModel = new PostModel(post);
        return postModel.save();
    }

    async findAll(){
        const posts = await PostModel.find();
        return posts.map(post => new Post(post._id, post.title, post.intro, post.content, post.author));
    }

    async findById(id) {
        const post = await PostModel.findById(id);
        if(post) {
            return new Post(post._id, post.title, post.intro, post.content, post.author);
        }
        return null;
    }
}

module.exports = MongoPostRepository;