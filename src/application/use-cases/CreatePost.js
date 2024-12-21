class CreatePost {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    execute(post){
        return this.postRepository.save(post);
    }
}

module.exports = CreatePost;