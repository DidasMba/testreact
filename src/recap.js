//import React from 'react';
//import App from './App';

//const Hello = () => {
 // return (
   // <div>
    //  <h1>hello</h1>
   // </div>
  //);

  //return React.createElement(
    //'div',

     //{id: 'hellod', className: 'dummyClass'},
    //  React.createElement('h1', null, 'Hello bro') )
//};


function Product(props) {
    return (
      <div>
        <img src={props.img} alt="producs"/>
        <h4>{props.name}</h4>
        <p>{props.descrition}</p>
        <h4>{props.price}</h4>
      </div>
    );
}

export default Product;

//export default Hello;


