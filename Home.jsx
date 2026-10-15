import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to ShopEasy</h1>

      <p>Discover amazing products at the best prices!</p>

      <Link to="/products">
        <button className="shop-btn">Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;