const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {type : String, required : true, 
    },
    email: {type: String, required: true, unique:true
    },
    password: {type: String, required: true
    },
    rol:{
        type: String,
        default:'user',
        enum:['administrador','usuario','vendedor']
    }
},{
    timeseries:true
});
userSchema.methods.contraEncriptada = async password =>{
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password,salt);
};
userSchema.methods.matchPassword = async function(password) {
   return await bcrypt.compare(password, this.password);
}
const user = mongoose.model('user', userSchema);
module.exports = user; 