import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, args, {db}, info) {
        const emailTaken = db.users.some( (user) => user.email == args.data.email)
        if ( emailTaken) {
            throw new Error('Email Taken')
        }

        const user = {
            id: uuidv4(),
            ...args.data
        }

        db.users.push(user)

        return user
    },
    deleteUser(parent, args, {db}, info) {
        const userIndex = db.users.findIndex( (user) => user.id == args.id )
        const havePost = db.posts.some( (post) => post.author == args.id )

        if ( userIndex === -1 ) {
            throw new Error(' User not found')
        }

        const deletedUser = db.users.splice( userIndex, 1)


        if ( havePost ) {
            post = db.posts.splice.filter( (post) => {
               const match = post.author == args.id

               if( match) {
                   comments = db.comments.filter( (comment) => {
                       return comment.post == post.id
                   } )
               }

               return !match
            })
        }

        comments = db.comments.filter( (comment) => comment.author !== args.id )

        return deletedUser[0]

    },
    createPost(parent, args, {db, pubsub}, info) {
        const userExist = db.users.some( (user) => user.id == args.data.author)
        if (!userExist) {
            throw new Error('User not found')
        } 

        const post = {
            id: uuidv4(),
            ...args.data
        }

        db.posts.push(post)
        if( args.data.published == true) {
            pubsub.publish('post', {
                post: {
                    mutation: 'CREATED',
                    data: post
                }
            })
        }
        return post
    },
    deletePost(parent, args, {db}, info) {
        const postIndex = db.posts.findIndex( (post) => post.id == args.id )

        if ( postIndex === -1 ) {
            throw new Error('Post not found')
        } 

        deletedPost = db.posts.splice( postIndex, 1)

        comments = db.comments.filter( (comment) => comment.post !== args.id )

        return deletedPost[0]


    },
    createComment(parent,args,{db, pubsub}, info) {
        const userExist = db.users.some( (user) => user.id == args.data.author )
        const postExist = db.posts.some( (post) =>post.id == args.data.post )

        if ( !userExist ) {
            throw new Error('User not found')
        }

        
        if( !postExist ) {
            throw new Error('Post not found')
        }
        
        const comment = {
            id: uuidv4(),
            ...args.data
        }

        
        db.comments.push(comment)
        pubsub.publish(`comment ${args.data.post}`, {comment})

        return comment

    }
}

export { Mutation as default}