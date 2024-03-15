Esta api maneja todo lo relativo a la pagina de inicio donde se mostraran promociones de la empresa. 


**iniciar la api: npm start


**Rutas :
**Imagenes**

GET: http://localhost:4000/inicio 


Obtener las imágenes activas por orden de posición

GET: http://localhost:4000/inicio/order


POST: http://localhost:4000/inicio 


        body: {  
          "image": "url",
          "folleto": "url",    
          "posicion": "1",      
          "activo": "true"
        }


GET by id: http://localhost:4000/inicio/id


PUT http://localhost:4000/inicio/id


    body: { //info a modificar ej:
        "image": "url"
    }

    
DELETE http://localhost:4000/inicio/id

Para subir una imagen a Digital Ocean
POST: http://localhost:4000/spacesbo
  body:
      {
        "image" : "archivo"
      }

Para eliminar una imagen en Digital Ocean
PUT: http://localhost:4000/spaces
  body:
      {
        "image" : "url_imagen"
      }

**Textos**


GET: http://localhost:4000/texto


Obtener los textos activos en orden de posicion
GET: http://localhost:4000/texto/order


POST: http://localhost:4000/texto


        body: {  
          "texto": "xxx",      
          "activo": "true"
        }


GET by id: http://localhost:4000/texto/id


PUT http://localhost:4000/texto/id


    body: { //info a modificar ej:
        "texto": "texto"
    }

    
DELETE http://localhost:4000/inicio/id


**Formulario de contacto**

POST http://localhost:4000/contacto
    body: {
      "nombre": "Jazmin",
      "mail": "jdn@gmail.com",
      "telefono": "2323-9897",
      "comentario": "9xnckdhfudfhgiudfhgkjxbvkdzhgfuidhgkuhdfkvbmxc",
      "horario": "9 a 18"
    }


GET http://localhost:4000/contacto

DELETE: http://localhost:4000/contacto/:id


***Versionado***
Para obtener todas las versiones guardadas

GET http://localhost:4000/version

Para obtener la version por id
GET http://localhost:4000/version/:id

Para crear una version
POST http://localhost:4000/version

Para modificar una version 
PUT http://localhost:4000/version/:id

Para eliminar una version 
DELETE http://localhost:4000/version/:id

Variable de entorno para el archivo .env


PORT='4000'
DB_USER ='postgres'
DB_NAME = 'postgres'
DB_PORT = '5433'
HOST = 'localhost'
DB_PASSWORD="xxxxx"
DB_HOST = 'localhost'
