const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.get('/', function(req, res){
	let filepath = path.join(__dirname, 'home.html')

	console.log("*------------------------*")
	console.log("this is __dirname", __dirname)
	console.log(filepath)
	console.log("*------------------------*")



    res.sendFile(filepath)
})

app.listen(PORT, function(){
	console.log(`running on port ${PORT}`)
})


