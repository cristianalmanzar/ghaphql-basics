const Query = {
    users(parent, args, {db}, info) {
       if(!args.query) {
           return db.users
       }

       return db.users.filter( user => {
           return user.name.toLowerCase().includes(args.query.toLowerCase())
       })
    },
    posts(parent, args, {db}, info) {
      if ( !args.query ) {
          return db.posts
      }

      return db.posts.filter( post => {
          const titleMath = post.title.toLowerCase().includes(args.query.toLowerCase())
          const bodyMath  = post.body.toLowerCase().includes(args.query.toLowerCase())

          return titleMath || bodyMath
      })
    },
    comments() {
      return db.comments
    },
  }


  export { Query as default}