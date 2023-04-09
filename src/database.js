const mongoose = require('mongoose');
const {MONGODB_HOST, MONGODB_DATABASE} = process.env;
const mongodb_uri = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;//alt+96 ``

mongoose.connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModify:false 
})
.then(()=>console.log('conexion a MongoDB !!'))
.catch(console.error);