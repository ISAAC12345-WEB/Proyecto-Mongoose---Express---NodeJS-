const app = require('./server');
require('dotenv').config();

require('./database');
//VARIABLES DE ENTORNO

app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto', app.get('port'));
})
