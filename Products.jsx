import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://placehold.co/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    image: "https://placehold.co/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    image: "https://placehold.co/300x200?text=Shoes",
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "https://placehold.co/300x200?text=Backpack",
  },
];

function Products() {
  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;