import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import "../list.scss";

const ListPage = () => {
    return(
        <>
        <div className="wrap cf">
  <h1 className="projTitle">Feng Shui Suggest These Items...</h1>
  <div className="heading cf">
    <h1>My Cart</h1>
    <a href="#" className="continue">Continue Shopping</a>
  </div>
  <div className="cart">

    <ul className="cartWrap">
      <li className="items odd">
        
    <div className="infoWrap"> 
        <div className="cartSection">
        <img src="https://pyxis.nymag.com/v1/imgs/c53/863/e04949a832edb6be53d8f9ed8fd1d8c13d.2x.rsquare.w600.jpg" alt="" className="itemImg" />
          <p className="itemNumber">#QUE-007544-002</p>
          <h3>Blue Bed Sheets</h3>
        
           <p> <input type="text"  className="qty" placeholder="1"/> x $15.00</p>
        
          <p className="stockStatus"> In Stock</p>
        </div>  
    
        
        <div className="prodTotal cartSection">
          <p>$15.00</p>
        </div>
              <div className="cartSection removeWrap">
           <a href="#" className="remove">x</a>
        </div>
      </div>
      </li>
      <li className="items even">
        
       <div className="infoWrap"> 
        <div className="cartSection">
         
        <img src="https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s" alt="" className="itemImg" />
          <p className="itemNumber">#QUE-007544-002</p>
          <h3>Modern Chair</h3>
        
           <p> <input type="text"  className="qty" placeholder="3"/> x $5.00</p>
        
          <p className="stockStatus"> In Stock</p>
        </div>  
    
        
        <div className="prodTotal cartSection">
          <p>$15.00</p>
        </div>
              <div className="cartSection removeWrap">
           <a href="#" className="remove">x</a>
        </div>
      </div>
      </li>
      
          
      <li className="items odd">
       <div className="infoWrap"> 
        <div className="cartSection info">
             
        <img src="https://cdn.shopify.com/s/files/1/0514/6794/4099/products/introspect_modern_contemporary_evergreen_velvet_sofa_-_brooklyn_space_11_7.jpg?v=1649282091" alt="" className="itemImg" />
          <p className="itemNumber">#QUE-007544-002</p>
          <h3>Long couch</h3>
        
          <p> <input type="text"  className="qty" placeholder="1"/> x $100.00</p>
        
          <p className="stockStatus"> In Stock</p>
          
        </div>  
    
        
        <div className="prodTotal cartSection">
          <p>$15.00</p>
        </div>
    
            <div className="cartSection removeWrap">
           <a href="#" className="remove">x</a>
        </div>
         </div>
         <div className="special"><div className="specialContent">Free gift with purchase!, gift wrap, etc!!</div></div>
      </li>
      
      
     
    </ul>
  </div>
  
  <div className="subtotal cf">
    <ul>
      <li className="totalRow"><span className="label">Subtotal</span><span className="value">$130.00</span></li>
      
          <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
      
            <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
            <li className="totalRow final"><span className="label">Total</span><span className="value">$139.00</span></li>
      <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
    </ul>
  </div>
</div>
      </>
      
    );
};

export default ListPage;