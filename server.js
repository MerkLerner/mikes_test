const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')


let data = { viewCount: 0 }


app.get('/', function(req, res){
 
 data.viewCount += 1
 res.render('home', {count:  data.viewCount  }   )

})

app.get('/favorites', function(req,res){
	let filepath = path.join(__dirname, 'favorites.html')
    res.sendFile(filepath)
})

app.get('/blog', function(req,res){
	let filepath = path.join(__dirname, 'thoughts.html')
    res.sendFile(filepath)
})

app.listen(PORT, function(){
	console.log(`running on port ${PORT}`)
})

