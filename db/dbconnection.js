const mongoose = require('mongoose');
try{
    mongoose.connect(process.env.MONGO_URL,{})
    console.log('db connected ')
}
catch(err){
    console.log('db connection failed')
    console.log(err)
}
