const productCtr = {}
//importar mongoose y models que creamos, la schema 
const Producto = require('../models/producto');
const User = require('../models/user');
//agregar producto
productCtr.renderProductoAdd = async(req,res)=> {
    const users = await User.find().lean();
    res.render('productos/newproducto',{users});//(carpeta y archivo)'render' para renderizar una vista o archivo
}
productCtr.createProductoAdd = async(req,res)=> {
    const {titulo, precio}= req.body;  
    //guardar datos
    const newProduct = new Producto({
        titulo:titulo, precio:precio
    });
    await newProduct.save();
    req.flash('successlly_msg', 'PRODUCTO AGREGADO CORRECTAMENTE');
     res.redirect('/productos');
}  
productCtr.renderProductos = async(req,res)=> {
    const products = await Producto.find().lean();
    const users = await User.find().lean();
    res.render('productos/allproductos', { products,users })// -- nueva vista
}
productCtr.renderEditForm = async(req,res) => {
    const users = await User.find().lean();
    const editar = await Producto.findById(req.params.id).lean();
    res.render('productos/editproducto', { editar,users })//archivo o carpeta
}
productCtr.actualizarEditForm = async (req,res) => {
    const {titulo, precio} = req.body 
    await Producto.findByIdAndUpdate(req.params.id,{titulo:titulo,precio:precio}).lean()
    console.log(req.body)
    req.flash('success_msg', 'PRODUCTO ACTUALIZADO CORRECTAMENTE')
    res.redirect('/productos')
}
productCtr.eliminarFormProducto = async (req,res) => {
    await Producto.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'PRODUCTO ELIMINADO CORRECTAMENTE')
    res.redirect('/productos')//redirecciones a la ruta especifica
}
module.exports = productCtr