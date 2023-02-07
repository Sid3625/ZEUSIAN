let fetch = require('fetch')

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Comment 105',
            email: 'dylansemail310@gmail.com',
            body: 'Dopes comment in the game',
            postId: 1000
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => console.log(data))