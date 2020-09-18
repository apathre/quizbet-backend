const express = require('express');
const app = express();
const cors=require('cors');
const middleware=require('./middleware/middleware');
const mongoose = require('mongoose');
const ddData=require('./dbModel');
const connection_url=`mongodb+srv://apathre:a09SVlQpntf3WXSD@cluster0.tlbkx.mongodb.net/countryData?retryWrites=true&w=majority`;


mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});


app.use(express.json());
app.use(cors({origin:true}));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()
});

// Catch unauthorised errors
app.use(middleware.errorHandler);

app.get('/v1/addData',(req,res)=>{
    ddData.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})
app.post('/v2/addData',(req,res)=>{
    const data = {
    "name": req.name,
    "state": req.state,
    "country": req.country
    };
    // Add a new document in collection "cities" with ID 'LA'
    ddData.create(data,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});


const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})

