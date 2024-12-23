const unKnownRoute = (req, res, next) => {
    // const error = new Error(`Route not found`)
    // error.status = 404
    // next(error)
    res.status(404).json({ msg: 'Route not found' })
}

export default unKnownRoute