const userCtrl = {}
const User = require('../models/user')
const Producto = require('../models/producto')

//todos los usuarios
userCtrl.renderAllUsers = async (req,res) =>{
    const users = await User.find().lean();
    const products = await Producto.find().lean();
    res.render('users/users', { users, products })
    //res.render('users/users')
}

//Registro
userCtrl.renderSignupForm = (req,res) =>{
    res.render('users/signup')
}
userCtrl.signup = async (req,res)=>{
    //const errors = []
    const {name, email, password, rol} = req.body;
    /*if (password != password){
        errors.push({text:'La contra no coincide '})
    }
    if(password.lenght < 4 ){
        errors.push({text:'La contra deberia tener mas 4 catar. '})
    }
    if(errors.length > 0){
        res.render('users/signup', {errors})
    }else{
        res.send('registro satisfactorio')
    }*/
    const useremail = await User.findOne({email: email})
    if(useremail){
        //errors.push({text:'Esta en uso con ese correo electronico'})
        req.flash('failed_msg', 'ESTE CORREO O EMAIL YA SE ENCUANTRA EN USO');
        //console.log({message:'El email ya esta en uso'})
        res.redirect('/users/signup')
    }else{
       const nuevo = new User({name, email, password, rol})
       nuevo.password = await nuevo.contraEncriptada(password)
       await nuevo.save()
       req.flash('successlly_msg', 'USUARIO REGISTRADO CORRECTAMENTE');
       //console.log({message: 'User registrado correctamente'})   
       res.redirect('/users/signin')
    }
    //console.log(req.body)
    //res.send('signupRecibido')
}
//Logearse
userCtrl.rendersigninForm = (req,res) =>{
    res.render('users/signin')
}
userCtrl.signin = async(req,res)=>{
    /*const {email, password} = req.body;
    await User.findOne({email: email, password:password}) 
    if (email != email){
        console.log({message:'La email no coincide '})
    }
    if(password != password){
        console.log({message:'La contra no coincide '})
    }else{
        console.log('BIENVENIDO !!')
        res.redirect('/productos')
    }*/
    req.flash('successlly_msg', 'BIENVENIDO !!');
    res.redirect('/users')//--('/productos')
}
//actualizacion
userCtrl.renderEditForm = async(req,res) => {
    const editar = await User.findById(req.params.id).lean();
    //console.log(edi)
    res.render('users/updateUsers', { editar })//archivo o carpeta
    //res.send('editar producto')//send -- envia mensaje
}
userCtrl.actualizarEditForm = async (req,res) => {
    const {name, email, password, rol} = req.body //manejando los valores de la base de datos.
    await User.findByIdAndUpdate(req.params.id,{name:name ,email:email, password:password, rol:rol}).lean()
    console.log(req.body)
    req.flash('success_msg','USUARIO ACTUALIZADO CORRECTAMENTE')
    res.redirect('/users')
    //res.send('actualizado producto')
}
//eliminar usuario
userCtrl.eliminarFormUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
    req.flash('success_msg','USUARIO ELIMINADO CORRECTAMENTE')
    res.redirect('/users')//redirecciones a la ruta especifica
    //console.log(req.params.id)
    //res.send('eliminar user')
}
//salirse
userCtrl.logout = (req,res)=>{
    req.logout( (err) => {
        if (err) { return next(err); }
        req.flash("success_msg" , "SESION CERRADA, NOS VEMOS PRONTO 🛌" );
        res.redirect( "/users/signin" );
    });
}
module.exports = userCtrl;