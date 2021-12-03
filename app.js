const express = require('express')
const app = express()
const port = process.env.PORT || 5555

app.set('trust proxy', true)

app.get('/', (req, res) => {
	res.send(req.ip)
})

app.get('/json', (req, res) => {
	res.send({ip: req.ip})
})

app.listen(port, () => {
	console.log(`Listening on ${port}`)
})
