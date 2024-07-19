const errorHandler = ((err, req, res, next) => {
    if (err.status && err.message) {
        res.status(err.status).json({ msg: err.message })
    } else {
        res.status(500).json({ msg: 'Internal Server Error' })
    }

})

export default errorHandler