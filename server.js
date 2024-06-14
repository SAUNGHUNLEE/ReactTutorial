const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://picsum.photos/64/64',
            'name' : '홍길동',
            'birthday' : '971108',
            'age' : '35',
            'gender' : '남자'
           
          },
          {
            'id' : 2,
            'image' : 'https://picsum.photos/64/64',
            'name' : '김길동',
            'birthday' : '951208',
            'age' : '22',
            'gender' : '남자'
           
          },
          {
            'id' : 3,
            'image' : 'https://picsum.photos/64/64',
            'name' : '구길동',
            'birthday' : '930508',
            'age' : '25',
            'gender' : '남자'
           
          }]
    )
})
app.listen(port, () => console.log(`Listening on port ${port}`));