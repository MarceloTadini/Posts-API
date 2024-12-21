class PostRepository{
    constructor(){
        this.posts = [];
    }

    async save(post){
        this.posts.push(post);
        return post;
    }

    async findAll(){
        return this.posts;
    }

    async findById(id){
        return this.posts.find(post => post.id === id);
    }
}

module.exports = PostRepository;