const {Schema, model}=require('mongoose')
const productSchema = new Schema({
    titulo:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    }
},{
    timeseries:true
});
module.exports=model('producto', productSchema);