const express = require('express');
const router = express.Router();

const {renderProductoAdd, createProductoAdd, renderProductos, 
    renderEditForm, actualizarEditForm ,eliminarFormProducto} 
    = require('../controllers/product.controller');

router.get('/producto/add', renderProductoAdd);
router.post('/producto/nuevoproducto', createProductoAdd);
router.get('/productos', renderProductos);
router.get('/producto/edit/:id',  renderEditForm);
router.put('/producto/edit/:id',  actualizarEditForm);
router.delete('/producto/delete/:id',  eliminarFormProducto);

module.exports = router;