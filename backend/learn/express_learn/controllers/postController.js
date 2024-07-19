let posts = [
    {
        id: 1,
        name: "arun",
    },
    {
        id: 2,
        name: "ram",
    },
    {
        id: 3,
        name: "siva",
    },
];

// get post with limit -  api/posts || api/posts?limit=2
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        const data = posts.slice(0, limit)
        return res.json(data ? data : {})
    }
    res.json(posts);
}

// get post using id - api/posts/3
export const getPostsById = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id == id)
    if (!post) {
        const error = new Error(`A post of id ${id} was not found`)
        error.status = 400
        return next(error)
    }
    res.status(200).json(post)
}

// create new post - api/posts
export const newPost = (req, res, next) => {
    const post = req.body.name
    if (post) {
        var data = {
            id: posts.length + 1,
            name: post
        }
        posts.push(data)
        return res.send(posts)
    }
    const error = new Error(`Name field missing`)
    error.status = 400
    return next(error)
}

// edit existing post - api/posts
export const editPost = (req, res, next) => {
    const id = parseInt(req.body.id)
    const name = req.body.name
    if (!isNaN(id) && id > 0 && name) {
        posts = posts.map(record => record.id == id ? { ...record, name: name } : record)
        return res.json(posts)
    }
    const error = new Error(`Enter valid name`)
    error.status = 400
    return next(error)
}

// delete post - api/posts
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const initLength = posts.length
    if (!isNaN(id) && id > 0) {
        posts = posts.filter(record => record.id != id)
        if (initLength != posts.length)
            return res.json(posts)
    }
    const error = new Error(`No data found at id ${id}`)
    error.status = 400
    return next(error)
}