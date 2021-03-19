import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

class CartScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cartProducts:[],
    };
  }

  componentWillMount(){
    this.setState({cartProducts: this.props.cartProducts})
  }

  removeFromCart = async (item)=>{
    
    var element = {}
    element.productID = item.id;
    var config = {
      method: 'delete',
      url: 'http://localhost:4000/cartItems',
      headers: { 
        'Content-Type': 'application/json'
      },
    };
    config.data = element;
    console.log(config);
    
    axios(config)
    .then( (response)=> {
        const {cartProducts} = this.state
        var products = cartProducts.filter((i)=>{return i.id != item.id})
        console.log(cartProducts);
        this.setState({cartProducts: products})
      console.log(JSON.stringify(response.data));
       
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  total=()=>{
    var Total = 0;
    this.state.cartProducts.map((i)=>{
      Total = Total + (i.price * i.quantity);
    })
    return Total;
  }


  render(){
      console.log(this.state.cartProducts)
    return (
      <div style={{backgroundColor:'#edebeb',height:'100vh', width:'null'}}>
        {(this.state.cartProducts.length == 0) && (<div><p>cart is empty</p></div>)}
        {!(this.state.cartProducts.length == 0) && (
          <div>
            {this.state.cartProducts.map((cartItem) =>{
            return(
                <div>
                    <h1>prodict id :{cartItem.productID}</h1>
                    <h1> {cartItem.description}</h1> 
                    <h1>price : {cartItem.price}</h1>
                    <h1>quanity : {cartItem.quantity}</h1>
                    <button onClick={()=>this.removeFromCart(cartItem)}>
                        remove from cart
                    </button>
                </div>
            )
        })}
          </div>
          
        ) }
        <hr />
        <div><p> total price: {this.total()}</p></div>
        
        
      </div>
    )
  }
}

export default CartScreen;