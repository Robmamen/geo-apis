const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const PORT= 8000

const nairobiMalls = {
    'all' : {
        'mallLocation' : 'limuru road',
        'mallSize': '11 acres',
        'swimmingPool': 'No'
    
    },

    'trm' :{
        'mallLocation' : 'Thika road',
        'mallSize': '35,800 sqr fts',
        'swimmingPool': 'Rooftop pool'
    
    },

    'v':{
        'mallLocation' : 'limuru road',
        'mallSize ': '210,000 square fts',
        'swimmingPool': ' available '
    
    },
    'sc':{
        'mallLocation' : 'Ngong road',
        'mallSize ': '500,000 sqr fts',
        'swimmingPool': 'Rooftop pool'
    
    },
    'unknown' :{
        'mallLocation' : 'Uknown',
        'mallSize ': '0',
        'swimmingPool': 'uknown'
    }
}
 




app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
    
})

app.get( '/api/:name',(req,res)=>{
    const mallName=req. params.name.toLocaleLowerCase()
   
    if(nairobiMalls[mallName]){
         res.json(nairobiMalls[mallName ])
    }else{ res.json( nairobiMalls['unknown'])

    }
    
})

app.listen(PORT,()=>{
    console.log( `The server is running in ${PORT} go catch it `)
}
    )