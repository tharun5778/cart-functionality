import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleclick=()=>{
    alert("hello");
  }

  add= async (item)=>{
    // console.log(item);
    // console.log(this.state.quantity)
    var element = {}
    element.productID = item.id;
    element.quantity = this.state.quantity;
    // var a = JSON.stringify(element)
    // console.log(a);
    var config = {
      method: 'put',
      url: 'http://localhost:4000/cartItems',
      headers: { 
        'Content-Type': 'application/json'
      },
    };
    config.data = element;
    console.log(config);

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  decreaseQuantity=()=>{
    if(this.state.quantity>0){
      var a = this.state.quantity - 1;
      this.setState({quantity:a})
    } 
  }

  increaseQuantity=()=>{
    if(this.state.quantity<10){
      var a = this.state.quantity + 1;
      this.setState({quantity:a})
    }
  }

  render(){
    return (
      <div>
        <h1>{this.props.item[0].productName}</h1>
        <h2>{this.props.item[0].description}</h2>
        <Link href={'/cart'}>
          <button onClick={()=>this.handleclick()}>
            go to cart page
          </button>
        </Link>
        <div>
          <button onClick={()=>this.decreaseQuantity()}>
              -
          </button>
        </div>
        <div>{this.state.quantity}</div>
        <div>
          <button onClick={()=>this.increaseQuantity()}>
              +
          </button>
        </div>
        <div>
          <button onClick={()=>this.add(this.props.item[0])}>
              add
          </button>
        </div>
        
        {/* <span onClick={() => router.push('/cart')}>Cart Screen</span> */}
      </div>
    )
  }
}

export default Home;