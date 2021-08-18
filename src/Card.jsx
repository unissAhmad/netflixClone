import React from 'react';
import './card.css';
function Card(props){
    return(
        <>
            <div>
                <div className="card">
                    <img src ={props.imgSrc}></img>
                    <p className = "sDesc">{props.sDesc}</p>
                    <h3 className = "sName">{props.sName}</h3>
                   <button> <a href = {props.link}>Watch now</a></button>
                </div>
            </div>
        </>
  );
}
export default Card;