import React from 'react'

const BottomLinksSection:React.FC = () => {
  return (
    <div className="bottom-info">
    <div className="first-info">
       <a href="#"><button className="support"><i className="fa-regular fa-headset"></i></button></a>
    
   <h2 className="rubrik">Customer Support</h2>
   <p>Village did removed enjoyed explain talking.</p>

   </div>


   <div className="second-info">
   <a href="#"><button className="payment"><i className="fa-light fa-money-check"></i></button></a>
   
   <h2 className="rubrik">Secured Payment</h2>
   <p>Village did removed enjoyed explain talking.</p>
   </div>

   <div className="third-info">
       <a href="#"><button className="delivery"><i className="fa-light fa-truck"></i></button></a>    
       
       <h2 className="rubrik">Free Home Delivery</h2>
       <p>Village did removed enjoyed explain talking.</p>
   </div>


   <div className="fourth-info">
       <a href="#"><button className="reuters"><i className="fa-light fa-truck"></i></button></a>
       <h2 className="rubrik-1">30 Day Reuters</h2>
       <p>Village did removed enjoyed explain talking.</p>
   </div>
  
   
</div>
  )
}

export default BottomLinksSection