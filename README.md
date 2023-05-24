# Bloggit//BlogIT/Blogit

Blog Site App orientada al sector IT.

# SERVER ENDPOINTS

## Crear un usuario:
#### POST

    http://localhost:4000/api/users/create
    
    {
      "userId": "Tu ID", 
      "userName": "Tu userName", 
      "email": "mail@gmail.com",
      "profileImage": "http://imagen.com"
    }

## Buscar un usuario por userId (la que creaste)
#### GET

    http://localhost:4000/api/users/:userId

## Buscar un usuario básico por userId
#### GET

    http://localhost:4000/api/users/profile/:userId // Provisto por Auth0

## Crear un Blog
#### POST
    
    http://localhost:4000/api/blogs/create

    {
      "userId": "6466cd0e1c52a27142360a67",
      "category": "La Categoría"
    }

## Crear un post
#### POST
  
    http://localhost:4000/api/posts/create

    {
      "blogId": "mongoDB_ID",
      "title": "Mi segundo post",
      "content": "este es un post",
      "images": "image.com",
      "status": 1
    }

## Obtener todos los Posts (artículos)
#### GET

    http://localhost:4000/api/posts/all/#

## Obtener un post (artículo) por mongoDB ID
#### GET

    http://localhost:4000/api/posts/:id

## Agregar/remover un like a un post (artículo)
#### PUT
    http://localhost:4000/api/posts/like/:id

    {
      "userId": "mongoDB ID" //ID del usuario
    }

## Obtener todos los comentarios de un post (artículo)
#### GET
    
    http://localhost:4000/api/comments/all/:postId

## Agregar/eliminar likes a un comentario
#### PUT
    http://localhost:4000/api/comments/like/:postId

    {
      "userId": "mongoDB ID", //id del usuario
      "commentId": "mongoDB ID" //id del comentario
    }

## Buscar Posts (artículos) por palabra clave
#### GET
    
    http://localhost:4000/api/posts/keyword/:keyword

## Buscar blogs por categoría
#### GET

    http://localhost:4000/api/blogs/category/:category

## Guardar Posts para un asuario (saved)
#### PUT

    http://localhost:4000/api/users/saved/:userId // el que creaste no el de mongo

    {
      "postId": "646ce9c7146cdcdbe236531b",
      "title": "test 404",
      "images": "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q3/jira-product-roadmap/how-to-create-a-product-roadmap-visualization-header@2x.png"
    }

