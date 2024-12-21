class PostView {
    static render(post) {
        return {
            title: post.title,
            intro: post.intro,
            content: post.content,
            author: post.author
        };
    }

    static renderMany(posts) {
        return posts.map(post => this.render(post));
    }
}

module.exports = PostView;