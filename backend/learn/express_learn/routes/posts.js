import express from 'express'

const router = express.Router()

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

router.get("/", (req, res) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        const data = posts.slice(0, limit)
        return res.json(data ? data : {})
    }
    res.json(posts);
});

router.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id == id)
    if (!post) {
        const error = new Error(`A post of id ${id} was not found`)
        error.status = 400
        return next(error)
    }
    res.status(200).json(post)
});

router.post("/", (req, res) => {
    const post = req.body.name
    if (post) {
        var data = {
            id: posts.length + 1,
            name: post
        }
        posts.push(data)
        return res.send(posts)
    }
    return res.status(400).json({ msg: "Please send the name" })
})

router.put('/', (req, res) => {
    const id = parseInt(req.body.id)
    const name = req.body.name
    if (!isNaN(id) && id > 0 && name) {
        posts = posts.map(record => record.id == id ? { ...record, name: name } : record)
        return res.json(posts)
    }
    res.status(400).json({ msg: 'Enter valid data' })
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const initLength = posts.length
    if (!isNaN(id) && id > 0) {
        posts = posts.filter(record => record.id != id)
        if (initLength != posts.length)
            return res.json(posts)
    }
    res.status(400).json({ msg: 'no data found' })
})

export default router;