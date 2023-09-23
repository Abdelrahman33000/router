
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetails = ({ products }) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProductDetails();
//   },[id]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await axios.get(`https://dummyjson.com/products/${id}`);
//       setProduct(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div>
//       <h2>Product Details</h2>
//       <div className="card mb-3">
//         <div className="card-body">
//           <h5 className="card-title">{product.name}</h5>
//           <p className="card-text">{product.description}</p>
//           <p className="card-text">Price: ${product.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

