class FindPost {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    execute(id){
        return this.postRepository.findById(id);
    }
}

module.exports = FindPost;