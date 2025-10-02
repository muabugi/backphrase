const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const app = require('./app');
const PORT = process.env.PORT

mongoose.connect(process.env.DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((conn) => {
    console.log(`Database Connected`);
}).catch((err) => {
    console.error("MongoDB connection error:", err.message);
});


app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
});