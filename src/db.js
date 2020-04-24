let users = [
    {
        id: '1',
        name: 'Cristian',
        email: 'c@gmail.com',
        age: 21
    },
    {
        id: 2,
        name: 'Daniel',
        email: 'd@gmail.com'
    },
    {
        id: 3,
        name: 'Mike',
        email:'m@gmail.com'
    }
]

let posts = [
    {
        id: 1,
        title: 'Batman Begins',
        body: 'Heeey its a batman  post',
        published: true,
        author: '1'
    },
    {
        id: 2,
        title: 'Joker Begins',
        body: 'Heeey its a joker  post',
        published: true,
        author: '2'
    },
    {
        id: 3,
        title: 'Robin Begins',
        body: 'Heeey its a Robin  post',
        published: true,
        author: '3',
    }
]

let comments = [
    {
        id: '1',
        text: 'This worked well for me. Thanks!',
        post: '1',
        author: '1'
    },
    {
        id: '2',
        text: 'Good Work!',
        post: '2',
        author: '2'
    },
    {
        id: '3',
        text: 'This did no work for me',
        post: '3',
        author: '3'
    }

]


const db = {
    users,
    posts,
    comments
}


export { db as default }