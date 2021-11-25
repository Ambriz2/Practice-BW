const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

/*// CALLBACK
const findPostById = (id, callback) => {
    const post = posts.find(item => item.id === id);

    if(post){
        callback(null, post) 
    } else {
        callback('Post ID not found: ' + id)
    } 
};

findPostById(1, (err, post) => {
    if (err){
        return console.log(err);
    }
    return console.log(post);
});
/// USING TERNARY OPERATOR , CALLBACK HELL
const findPostById2 = (id, callback) => {
    const post2 = posts.find(item => item.id === id);
       post2 ? callback(null, post2) :
        callback('Post ID not found: ' + id)
    };

findPostById2(1, (err, post2) => {
    if(err) console.log(err);
        console.log(post2)
        findPostById2(3, (err, post2) => {
            if(err) console.log(err);
            console.log(post2)
        });
});

//PROMISE

const findPostById3 = (id) => {
    const post3 = posts.find(item => item.id === id)
    
    return new Promise ((resolve, reject) => {
        if (post3){
            resolve(post3)
        }else {
            reject('Id not found: ' + id)
        }
    });
};

findPostById3(2)
    .then((post3) => console.log(post3))
    .catch((e) => console.log(e));

//////////////
    const findPostById4 = id => new Promise((resolve, reject) => {
        const post4 = posts.find ((item) => item.id === id);
            if (post4){
                resolve(post4);
            }else {
                reject('Id not found: ' + id);
            }
        });
    
    findPostById4(3)
        .then((post4) => console.log(post4))
        .catch((e) => console.log(e));

//////////////////    
const findPostById5 = id => new Promise((resolve, reject) => {
        const post5 = posts.find ((item) => item.id === id);
            if (post5){
                resolve(post5);
            }else {
                reject('Id not found: ' + id);
            }
        });
    
    findPostById5(4)
        .then((post5) => console.log(post5))
        .catch((e) => console.log(e));
    
//////////////////

const findPostById6 = id => new Promise((resolve, reject) => {
    const post6 = posts.find ((item) => item.id === id);
        if (post6){
            resolve(post6);
        }else {
            reject('Id not found: ' + id);
        }
    });

findPostById6(1)
    .then((post6) => console.log(post6))
    .catch((e) => console.log(e));

//// ASYNC AWAIT-- AWAIT ALWAYS WAITS FOR A PROMISE AND NEEDS ASYNC
    const findId = id => new Promise((resolve, reject) => {
        setTimeout(() => {
            const aPost = posts.find ((item) => item.id === id);
            aPost ? resolve(aPost) : reject('Id not found: ' + id);
        }, 2000);
    });

    findId(1)
    .then((aPost) => console.log(aPost))
    .catch((e) => console.log(e));

    const idSearch = async (id) => { 
        const postB = await findId(id);
        console.log(postB);
    }
    idSearch(1)
    console.log('End program')

    const idSearch2 = async () => {
        try {
            const postC = await Promise.all([findId(1), findId(2)]);//if one is missing(not found) will jump to catch
            console.log(postC);
        } catch (error){
            console.log(error);
        } finally {console.log('executes')};
    };

    idSearch2();
*/
    ///// FETCH 

    const url =('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
    fetch (url)
        .then((res) => res.json())
        .then((data) => console.log(data.dataseries[13]))
        .catch((e) => console.log(e))
        .finally(() => console.log("finalizo"))

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res));

fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((res) => res.json())
    .then((data) => console.log(data));

const findPostID = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        const post = await res.json();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

findPostID(1);

const findPostID2 = async (id) => {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id
        );
        const post = await res.json();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

findPostID2(27);
