const userCtrl = {}
const User = require('../models/user')
const Producto = require('../models/producto')

//todos los usuarios
userCtrl.renderAllUsers = async (req,res) =>{
    const users = await User.find().lean();
    const products = await Producto.find().lean();
    res.render('users/users', { users, products })
}
//Registro
userCtrl.renderSignupForm = (req,res) =>{
    res.render('users/signup')
}
userCtrl.signup = async (req,res)=>{
    const {name, email, password, rol} = req.body;
    const useremail = await User.findOne({email: email})
    if(useremail){
        req.flash('failed_msg', '⚠️ ESTE EMAIL YA SE ENCUANTRA EN USO');
        res.redirect('/users/signup')
    }else{
       const nuevo = new User({name, email, password, rol})
       nuevo.password = await nuevo.contraEncriptada(password)
       await nuevo.save()
       req.flash('successlly_msg', 'USUARIO REGISTRADO ✔️');
       res.redirect('/users/signin')
    }
}
//Logearse
userCtrl.rendersigninForm = (req,res) =>{
    res.render('users/signin')
}
userCtrl.signin = async(req,res)=>{
    req.flash('successlly_msg', 'BIENVENIDO 🧑‍💻 !');
    res.redirect('/users')
}
//actualizacion
userCtrl.renderEditForm = async(req,res) => {
    const editar = await User.findById(req.params.id).lean();
    res.render('users/updateUsers', { editar })//archivo o carpeta
}
userCtrl.actualizarEditForm = async (req,res) => {
    const {name, email, password, rol} = req.body
    await User.findByIdAndUpdate(req.params.id,
        {name:name ,email:email, password:password, rol:rol}).lean()
    console.log(req.body)
    req.flash('success_msg','USUARIO ACTUALIZADO CORRECTAMENTE')
    res.redirect('/users')
}
//eliminar usuario
userCtrl.eliminarFormUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
    req.flash('success_msg','USUARIO ELIMINADO CORRECTAMENTE')
    res.redirect('/users')//redirecciones a la ruta especifica
}
//salirse del login
userCtrl.logout = (req,res)=>{
    req.logout((err) => {
        if (err) { 
            return next(err); 
        }
        req.flash("success_msg" , "SESION CERRADA, NOS VEMOS PRONTO 🙋" );
        res.redirect( "/users/signin" );
    });
}
module.exports = userCtrl;