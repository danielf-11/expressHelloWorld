exports.helloWord = (req, res) => {
    console.log (req.body)
    res.send({message: " look, a response"})
}