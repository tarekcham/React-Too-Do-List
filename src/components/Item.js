import React from 'react';
import  './Item.css'

 const Item = (props) => {

 	return ( 
 		<ul> 
		 	{
		 		props.items.map((item , index) => 
				<li key={index} > NO {index + 1} <span> <button className="button"> {item} </button> 
				<button className="cancelButton" onClick={()=>{props.onDelete(index,item)}}> cancel </button></span></li> 
 
				)
 			}
 	 </ul>
	);	
}


export default Item;