import React from 'react'
import './Card.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Card({title,imageUrl,body}) {
    return (
        <div className='card-container'>
          <div className='image-container'>
               <img src={imageUrl} alt=''/>
          </div>
            <div className='card_content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>

          <Link to= {`/ppage/${title}`} className='btn'>
              <button>
                  <a>
                      View more
                  </a>
              </button>
          </Link>
            
        </div>
    )
}

export default Card;
