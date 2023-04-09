const express = require('express');
const router = express.Router();
const {renderAllUsers,
        renderSignupForm,
        signup,
        rendersigninForm,
        signin,
        renderEditForm,
        eliminarFormUser,
        actualizarEditForm,
    logout} = require('../controllers/user.controller');

router.get('/users/signup', renderSignupForm)
router.post('/users/signup', signup)

router.get('/users',renderAllUsers)
//ajuste de usuario
router.get('/users/edit/:id', renderEditForm)
router.put('/users/edit/:id', actualizarEditForm)
router.delete('/users/delete/:id', eliminarFormUser);

router.get('/users/signin', rendersigninForm)
router.post('/users/signin', signin)
router.get('/users/logout', logout)

module.exports = router;