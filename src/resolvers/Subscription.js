const Subscription = {
    count: {
        subscribe(parent, args, {pubsub}, info) {
            let count = 0 

            setInterval(() => {
               count++ 
               pubsub.publish('count',{
                   count
               })
            }, 1500);

            return pubsub.asyncIterator('count')
        }
    },
    comment: {
        subscribe(parent, {postId,}, {db, pubsub}, info) {
            const dpost = db.posts.find( (post) => post.id == postId )


                if( !dpost ) {
                    throw new Error('Post not found')
                }

                return pubsub.asyncIterator(`comment ${postId}`)
            
        }
    },
    post: {
        subscribe( parent, ctx, {db, pubsub}, info) {
            return pubsub.asyncIterator(`post`)
        }
    }
}


export { Subscription as default}