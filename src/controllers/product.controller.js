const productCtr = {}
//const producto = require('../models/producto');
//importar mongoose y models que creamos, osea la schema 
const Producto = require('../models/producto');
const User = require('../models/user');

//agregar producto
productCtr.renderProductoAdd = (req,res)=> {
     res.render('productos/newproducto');//(carpeta y archivo)'render' para renderizar una vista o archivo
}
productCtr.createProductoAdd = async(req,res)=> {
    const {titulo, precio}= req.body;  
    //guardar datos
    const newProduct = new Producto({
        titulo:titulo, precio:precio
    });
    await newProduct.save();
    req.flash('successlly_msg', 'PRODUCTO AGREGADO CORRECTAMENTE');
    //console.log(newProduct) 
    /*console.log(req.body) -> hacer una peticion y que llegue los datos*/
     res.redirect('/productos');//render('productos/allproductos')
}  
productCtr.renderProductos = async(req,res)=> {
    const products = await Producto.find().lean();
    const users = await User.find().lean();
    res.render('productos/allproductos', { products,users })// -- nueva vista
    //res.send('todos productos');
}
productCtr.renderEditForm = async(req,res) => {
    const editar = await Producto.findById(req.params.id).lean();
    //console.log(edi)
    res.render('productos/editproducto', { editar })//archivo o carpeta
    //res.send('editar producto')//send -- envia mensaje
}
productCtr.actualizarEditForm = async (req,res) => {
    const {titulo, precio} = req.body //manejando los valores de la base de datos.
    await Producto.findByIdAndUpdate(req.params.id,{titulo:titulo,precio:precio}).lean()
    console.log(req.body)
    req.flash('success_msg','PRODUCTO ACTUALIZADO CORRECTAMENTE')
    res.redirect('/productos')
    //res.send('actualizado producto')
}
productCtr.eliminarFormProducto = async (req,res) => {
    await Producto.findByIdAndDelete(req.params.id)
    req.flash('success_msg','PRODUCTO ELIMINADO CORRECTAMENTE')
    res.redirect('/productos')//redirecciones a la ruta especifica
    //console.log(req.params.id)
    //res.send('eliminar producto')
}
module.exports = productCtr