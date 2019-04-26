// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/articles', (request, reply) => {
  reply.send([{
    title: "Lenguajes de Backend, alternativas a NodeJs: Go y Nim",
    date: new Date(),
    image: "https://interacso.com/blog/wp-content/uploads/2019/04/nodejs_logo-300x197.png",
    content: `Desarrollado en 2009 por Ryan Dahl al frustrarse debido a las capacidades limitadas de los servidores web de entonces. Es multiplataforma, válido para Windows, Mac, y Linux, orientado a eventos y basado en el motor desarrollado por Google para Chrome, V8.
    Al ser tan popular, se han creado muchos paquetes de software que pueden ser usados para construir nuestras soluciones, más de 100.000 están disponibles en NPM (Node Package Manager). De este modo los proyectos de software son más fáciles y económicos de implementar.
    Sin embargo, esta fortaleza y facilidad de uso también esconde una debilidad. Cada una de estas librerías que yo incorporo a mi código es una “dependencia” de mi programa y además esas dependencias tienen dentro sus propias dependencias con lo que el control sobre lo que hay al final en tu programa es, a veces, cuestionable. A veces, si te paras a analizar tus dependencias, puedes ver que tu código depende de mil librerías de otra gente que ya no es un código que tu controlas.
    El resultado de todo esto tiene efecto no solo en la seguridad, sino también en el tamaño de tu programa, ya que cuando instalas todas tus dependencias pueden llegar a ocupar varias decenas de megabytes. Además, solo estamos hablando de código, texto plano, pero esos varios megas pueden fácilmente equivaler a varios millones de líneas de código del que tú no sabes realmente qué hace (sólo sabes lo que su autor te dice que hace).`
  }])
})

// Run the server!
fastify.listen(6666, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})