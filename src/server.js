const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
//peticiones para el accion del formulario
const override = require('method-override')
const flash = require('connect-flash');
const passport = require('passport')
const session = require('express-session')

//inicializacion
const app = express()
//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));//direccion de la ruta 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');
//midlewares
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(override('_method'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

//variables globales
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.failed_msg = req.flash('failed_msg')
    res.locals.successlly_msg = req.flash('successlly_msg')
    res.locals.user = req.user || null;
    next();//sino utilizo el next() botara error
})
//routes
 app.use(require('./routes/route'));
 app.use(require('./routes/product.route'));
 app.use(require('./routes/user.route'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;