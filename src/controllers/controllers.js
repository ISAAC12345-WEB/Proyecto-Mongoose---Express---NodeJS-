const controller = {}

controller.renderIndex = (req, res)=>{
    res.render('index');
}
controller.renderAbout = (req, res)=>{
    res.render('about');
}
module.exports = controller;