const Comment = {
    post(parent, args, {db}, info) {
        return db.posts.find( (post) => {
            return post.id == parent.post
        })
    },
    author(parent, args, {db}, info) {
        return db.users.find( (user) => {
            return user.id = parent.author
        })
    }

}


export { Comment as default}