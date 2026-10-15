import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://placehold.co/400x300?text=Headphones",
    description: "Enjoy clear sound with wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    image: "https://placehold.co/400x300?text=Smart+Watch",
    description: "Track your daily activities with a smart watch.",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    image: "https://placehold.co/400x300?text=Shoes",
    description: "Comfortable shoes for running and walking.",
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "https://placehold.co/400x300?text=Backpack",
    description: "A useful backpack for everyday travel.",
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="container">Product not found!</h2>;
  }

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  }

  return (
    <div className="details-container">
      <img src={product.image} alt={product.name} />

      <div>
        <h1>{product.name}</h1>
        <h2>₹{product.price}</h2>
        <p>{product.description}</p>

        <button onClick={addToCart}>Add to Cart</button>

        <Link to="/products">
          <button className="secondary-btn">Back to Products</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;