const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://demo12:123123123@cluster0.ovfnci1.mongodb.net/demo?retryWrites=true&w=majority"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.set('strictQuery', true);
mongoose.connect(dbUrl,connectionParams)
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
    console.log(err);
});  


/*
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/Users',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});  
*/
