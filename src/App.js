// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect, redirect } from 'react-router-dom';
// import axios from 'axios';
// import Home from './components/Home';
// import ProductDetails from './components/ProductDetails';
// import NotFound from './components/NotFound';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://dummyjson.com/products');
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <Link to="/" className="navbar-brand">Home</Link>
//         </nav>
//       </div>
//       <div className="container mt-4">
//         <Switch>
//           <Route exact path="/">
//             <Home products={products} loading={loading} />
//           </Route>
//           <Route path="/product/:id">
//             <ProductDetails products={products} />
//           </Route>
//           <Route path="/not-found">
//             <NotFound />
//           </Route>
//           <Redirect to="/not-found" />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderProducts = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      {renderProducts()}
    </div>
  );
};

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct(match.params.id);
  }, [match.params.id]);

  const fetchProduct = async (productId) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderProductDetails = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <Link to="/">Back to Home</Link>
      {renderProductDetails()}
    </div>
  );
};

const NotFound = () => (
  <div className="container mt-4">
    <h2>Page Not Found</h2>
    <p>The requested page could not be found.</p>
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Product App
        </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
