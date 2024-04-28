const serverOnlineTest = (req, res) =>{
    res.status(200).json({
        message: "Server is Online. This is the home route.",
        status: 200
    })
}

module.exports = {serverOnlineTest};