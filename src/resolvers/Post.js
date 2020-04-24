const Post =  {
    author(parent, args, {db}, info) {
        return db.users.find( (user) => {
            console.log(parent.author)
            return user.id == parent.author
        })
    },
    comments(parent, args, {db}, info) {
        return db.comments.filter( (comment) => {
            return comment.post == parent.id
        })
    }
}

export { Post as default}