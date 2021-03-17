import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

class CartScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cartProducts:[]
    };
  }

  componentWillMount(){
    this.setState({cartProducts: this.props.cartProducts})
  }

  removeFromCart = async (item)=>{
    // var products = this.state.cartProducts.filter((i)=>{return i.id != item.id})
    console.log(this.state.cartProducts);
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
    .then(function (response) {
        
        // this.setState({cartProducts: products})
      console.log(JSON.stringify(response.data));
       
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }



  render(){
      console.log(this.state.cartProducts)
    return (
      <div>
        {/* <h1>{this.props.item[0].productName}</h1>
        <h2>{this.props.item[0].description}</h2>
        <div>
          <button onClick={()=>this.add(this.props.item[0])}>
              add
          </button>
        </div> */}
        {this.state.cartProducts.map((cartItem) =>{
            return(
                <div>
                    <h1>{cartItem.desc1ription}</h1> 
                    <h1>{cartItem.productID}</h1>
                    <h1>{cartItem.price}</h1>
                    <h1>{cartItem.quantity}</h1>
                    <button onClick={()=>this.removeFromCart(cartItem)}>
                        remove
                    </button>
                </div>
            )
        })}
        
      </div>
    )
  }
}

export default CartScreen;