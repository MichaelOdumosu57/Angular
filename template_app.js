const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const compression = require('compression')
const cors = require('cors')
app.use(compression())
app.use(cors())

var heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

var update;// used to update my little DB
var add;//used to add a new hero to my little DB
var max = -Infinity
    

app.get('/api/heroes', function (req, res, next) {

	res.send(heroes)
});

app.get('/api/heroes/:id', function (req, res, next) {
    console.log(   typeof(   req.params.id   )   )
    for(   i of heroes   ){
        
        
        if(   i.id === +req.params.id   ){
            
            console.log(i)
            res.send(i)
            
            
        }
        
        
    }
});

app.put('/api/heroes/',function (req, res, next) {
    req.on('data', (chunk) => {
      setImmediate(() => {
          if(   req.body === undefined   ) req.body = ''
          req.body += chunk;
      });
    });
    
    req.on('end', () => {
      setImmediate(() => {
            update = JSON.parse(   req.body   )
            for(   i in heroes   ){
                if(   heroes[i].id === update.id   ){
                    heroes[i] = update
                    break
                }
            }
            
      });
    });
    res.send(null)
})

app.post('/api/heroes/',function (req, res, next) {
    req.on('data', (chunk) => {
      setImmediate(() => {
          if(   req.body === undefined   ) req.body = ''
          req.body += chunk;
      });
    });
    req.on('end', () => {
      setImmediate(() => {
            heroes.map(   (x)  => x.id > max ? max = x.id:null   )
            add = JSON.parse(   req.body   )
            add.id = max + 1
            heroes.push(   add   )
            res.send(add)
      });
    });
    
})

app.delete('/api/heroes/:id', function (req, res, next) {
    console.log(req.params.id)
    heroes = heroes.filter((x) => x.id !== +req.params.id)
    res.send(null)
})



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
