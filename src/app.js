require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
const authRoute = require('./routes/auth-route');

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 15,
//     max: 1000,
//     message: { message: 'too many requests' }
//   })
// );

app.use('/auth',authRoute);

app.use('/',(req,res)=>{
    console.log('######',req.body)
    res.status(500).send({msg: 'error 500 at app.js'})
    
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server running on port ' + port));

