import express from 'express'
import { createServer } from 'http'
import { join } from 'path'
import reload from 'reload'
import json from 'body-parser'
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

var app = express()

var publicDir = join(__dirname, '../dist')

app.set('port', process.env.PORT || 3000)
app.use(json()) // Parses json, multi-part (file), url-encoded
app.use(express.static(publicDir))

app.get('/', function (req, res) {
  res.sendFile(join(publicDir, 'index.html'))
})

app.get('/angebote', function (req, res) {
  res.sendFile(join(publicDir, 'angebote.html'))
})

app.get('/preise', function (req, res) {
  res.sendFile(join(publicDir, 'preise.html'))
})

app.get('/ablauf', function (req, res) {
  res.sendFile(join(publicDir, 'ablauf.html'))
})

app.get('/terminbuchen', function (req, res) {
  res.sendFile(join(publicDir, 'terminbuchen.html'))
})

app.get('/test', function (req, res) {
  res.send("Hello world!");
})

app.get('/send-mail', function (req, res) {
  console.debug("TODO: send mail");
  res.send("TODO");
})

var server = createServer(app);

// Reload code here
reload(app).then(function (reloadReturned) {
  // reloadReturned is documented in the returns API in the README

  // Reload started, start web server
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})