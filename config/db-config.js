const mongoose = require('mongoose')

function initDb (string){
    mongoose.connect(string)

}

module.exports=initDb