//imports
const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set vies
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res)=>{
    res.render('index', { text: 'This is ejs'})
})
app.get('/main', (req, res)=>{
    res.render('main', { text: 'main page'})
})

app.get('/aboutMe', (req, res)=>{
    res.render('aboutMe', { text: 'about page'})
})
app.get('/projectPage', (req, res)=>{
    res.render('projectPage', { text: 'proJect page'})
})
app.get('/servicesPage', (req, res)=>{
    res.render('servicesPage', { text: 'servicesPage page'})
})
app.get('/contactMe', (req, res)=>{
    res.render('contactMe', { text: 'contact Me page'})
})


// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))