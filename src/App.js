import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '971108',
  'age' : '35',
  'gender' : '남자'
 
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김길동',
  'birthday' : '951208',
  'age' : '22',
  'gender' : '남자'
 
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '구길동',
  'birthday' : '930508',
  'age' : '25',
  'gender' : '남자'
 
}]

class App extends Component{
  render() { 
    return (
    <div>
      {/* <Customer
          id = {customers[0].id}
          image = {customers[0].image}
          name = {customers[0].name}
          birthday={customers[0].birthday}
          age={customers[0].age}
          gender={customers[0].gender}
      />
      <Customer
      id = {customers[1].id}
      image = {customers[1].image}
      name = {customers[1].name}
      birthday={customers[1].birthday}
      age={customers[1].age}
      gender={customers[1].gender}
  />

      <Customer
      id = {customers[2].id}
      image = {customers[2].image}
      name = {customers[2].name}
      birthday={customers[2].birthday}
      age={customers[2].age}
      gender={customers[2].gender}
    /> */}

    {
      customers.map(c => {
        return (
        <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          age={c.age}
          gender={c.gender}
        />
        );
      })
    }
  </div>
    );
  }
}

export default App;
