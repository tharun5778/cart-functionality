import React, { Component } from 'react';
import Link from 'next/link';

class Home extends Component{
  render(){
    return (
        <div>
          <p>hello</p>
          <ul>
            {this.props.posts.data.map((i, index)=>{
              return (
                <Link href={'/about/'+ i.id}>
                  <a>
                    <li > {i.id} </li>
                  </a>
                </Link>
            )
          })
            }
          </ul>
          
        
      </div>
      
    )
  }
}

export default Home;