const express=require('express');
const app= express();
const port=process.env.PORT||3000;
const path=require("path");
const User=require('./model/userRegistratiom');
require('./db/connection');
const hbs=require("hbs");
//including bootstrap
app.use('/css',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/js')));
//including jquery
app.use('/jq',express.static(path.join(__dirname,'./node_modules/jquery/dist')))
const staticpath=path.join(__dirname,'./public');
const partialpath=path.join(__dirname,'./templates/partials');
const templatepath=path.join(__dirname,'./templates/views');
app.use(express.static(staticpath));
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialpath);
//to get value for from
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{

res.render('index');
});

app.get('/contact',(req,res)=>{

    res.render('contact');
    });


app.post('/contact',async(req,res)=>{

try{
 
const userData=new User(req.body);
  await userData.save();
res.status(201).render('index');
}
catch(err){
    res.status(500).send(err);
}

        });

app.get('/about',(req,res)=>{
   
   res.render('about');
   });
   app.get('/service',(req,res)=>{
   
    res.render('service');
    });
 app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
 })