//import logo from './logo.svg';
//import './App.css';



//export default App;

//import GalleryG from './recap';
//import React, {Component} from 'react';
import Product from './recap';
import React from './recap';

//import Hello from './recap';

//class App extends Component {
  //render(){
    //return(
        //<div className='App'>
          //<Hello/>
          //<Hello/>
         // <Hello/>

       // </div>
  //  );
  //}
//}

function App(){
  return(
    <div>
      <h1>PRO</h1>
      <div className='App'>
        <Product
         img = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"

         name="Cyxus"
         desc="Non-Slip Fitness Leisure Running Sneakers"
        price="$29"
        />
        <Product
         img = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"

         name="Cyxus"
         desc="Non-Slip Fitness Leisure Running Sneakers"
        price="$29"
        />
        <Product
         img = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"

         name="Cyxus"
         desc="Non-Slip Fitness Leisure Running Sneakers"
        price="$29"
        />
    

 
 
      </div>
    </div>
  );
}

export default App;


//export default function App(){

    //return(
         //<GalleryG />

    
 //   );
 
  //}