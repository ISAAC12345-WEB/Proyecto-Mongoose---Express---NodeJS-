# Proyecto-Mongoose-Express-NodeJS
## Introduccion 
# Este proyecto se maneja con express, nodejs, mongodb y mongoose
1. Operaciones CRUD: crear/leer/actualizar/eliminar productos
2. Inicia el login, su registro de login y guardar sus datos.
# Imagen Del Login 

![screenshot](https://user-images.githubusercontent.com/89948658/231792087-a46045ec-e4a7-46fe-aab7-93821db7725d.png)

# Instalación
- git clone https://github.com/ISAAC12345-WEB/Proyecto-Mongoose---Express---NodeJS-.git
- npm i
- npm run dev "El servidor en el puerto 4000"

*Aqui el instalador de MongoDB Community Server para empezar a trabajar. *
- [Link MongoDB Community server](https://www.mongodb.com/try/download/community)
1. Abrimos la consola o el cmd (Win + r) y colocamos "mongod --version".
2. Si no sale o no lo reconoce, nos vamos en archivos de programa -> MongoDB -> Server -> (version de mongo 6.0) -> bin
3. Desde bin Click derecho para abrir PowerShell colocamos ".\mongod.exe --version", si sale la version es porque esta correcto
4. Agregamos la ruta de la carpeta del segundo paso al Path ó variables de entorno de tu equipo.
5. Ahora volvemos a poner en el cmd "mongod --version" y listo.
- Nos vamos en la carpeta unidad C de tu equipo, creamos una carpeta "data" y dentro de la carpeta "db"
- En el cmd ponemos "mongod" para que se mantenga ejecutando.


*Interfaz grafica para utilizar la base de datos.*
*Mongodb instalado localmente o establecer una variable de entorno MONGODB_URI para conectarse a cualquier instancia de mongodb. El puerto de MongoDB esta por defecto 27017.*
- [Link de MongoDBCompass](https://www.mongodb.com/try/download/compass).

*El MongoDBShell se trabaja con el cmd o tambien de tu visual studio abriendo el terminal. Deben descargar el MongoDBShell de la pagina oficial de mongo, descomprimir el zip  pegarlo en la carpeta 6.0 o la version que tengan, y el comando ponemos "mongosh". Algunos pasos aquí*
- [Link de descarga de MongoDBShell](https://www.mongodb.com/try/download/shell).
1. Abrimos la consola o el cmd (Win + r) y colocamos "mongosh --version".
2. Si no sale o no lo reconoce, nos vamos en archivos de programa -> MongoDB -> Server -> (version de mongo 6.0) -> bin.
3. En mi caso como descargue mongoshell, coloque el .zip en la direccion de MongoDB del primer paso y descomprimí el archivo .zip.
5. Volvemos abrir la consola o cmd, colocamos "mongosh --version" y listo.
