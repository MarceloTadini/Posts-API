class FindAllPosts {
    constructor(postRepository){
        this.postRepository = postRepository;
    }

    execute(){
        return this.postRepository.findAll();
    }
}

module.exports = FindAllPosts;