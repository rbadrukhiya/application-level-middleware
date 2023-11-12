const express = require('express')
const app = express();

const reqfilter =(req , res, next)=>{
    if(!req.query.age)
    {
        res.send('please enter age')
    }
    else if(req.query.age < 18)
    {
        res.send('you can not access this page')
    }
    else
    {
        next();
    }
}
app.use(reqfilter)
app.get('/' , (req,res)=>{
    res.send('home page')
})
app.get('/user', (req , res)=>{
    res.send('user page')
})
app.listen(3000)


//  route level middleware perticlar route ma aapde aapva nu hoy like a 50 routes che and aapde 10 ma j  validation jotu che to aeni mate route level middleware no use thay che and jyare application level ma badha route ma ek sathe apply thai jay che