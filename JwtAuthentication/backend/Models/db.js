const mongoose = require('mongoose')

const mongo_url = process.env.MONG_CONN;

mongoose.connect(mongo_url)
.then(() => {
    console.log('Mongodb connected successfully')

}).catch((err) => {
    console.log('mongodb connection error',err);
})





// db password  2pGP75LSBgv0dDwH  and user text-db