const { join } = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack/dev')

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3009

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(PORT, '0.0.0.0', err => {
  if (err) {
    console.error(err)
    return
  }

  console.log(`Listening at http://0.0.0.0:${PORT}`)
})
