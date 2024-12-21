const CreatePost = require('../../application/use-cases/CreatePost');
const FindAllPosts = require('../../application/use-cases/FindAllPosts');
const FindPost = require('../../application/use-cases/FindPost');
const MongoPostRepository = require('../../infrastructure/repositories/MongoPostRepository');

class PostController {
    constructor() {
        this.mongoPostRepository = new MongoPostRepository();
        this.createPost = new CreatePost(this.mongoPostRepository);
        this.findAllPosts = new FindAllPosts(this.mongoPostRepository);
        this.findPost = new FindPost(this.mongoPostRepository);
    }

    async create(req, res){
        const post = req.body;
        const result = await this.createPost.execute(post);
        res.status(201).json(result);
    }

    async findAll(req, res){
        const posts = await this.findAllPosts.execute();
        res.status(200).json(posts);
    }
}

module.exports = PostController