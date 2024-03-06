import { useState } from "react";
export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(1);

  const handleAddToCartClick = () => {
    setItemsInCart((itemsInCart)=> itemsInCart+1);
    alert(`You have ${itemsInCart} products added to your cart`);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <button onClick={()=>{setCurrentImageIndex((currentImageIndex) => currentImageIndex+1)}} disabled={currentImageIndex == product.imageUrls.length-1}>Next</button>
        <button onClick={()=>{setCurrentImageIndex((currentImageIndex) => currentImageIndex-1)}} disabled={currentImageIndex == 0}>Previous</button>
      </div>

      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <button onClick={()=>{setShowDescription((showDescription)=> !showDescription)}}>{showDescription ? "Hide Description" : "Show Description"}</button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
