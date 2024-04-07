import jsonServer from 'json-server'

import products from './data.js'
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

export function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

server.use(middlewares)
server.get('/products', (req, res) => {
  const { title: titleReq } = req.query

  if (titleReq) {
    const filteredProducts = products.filter((product) => {
      const productTitle = removeAccents(product.title).toLocaleLowerCase()
      const title = removeAccents(titleReq).toLocaleLowerCase()

      return productTitle.includes(title)
    })
    return res.json(filteredProducts)
  }

  res.json(products)
})

server.listen(3333, () => {
  console.log('JSON Server is running')
})
