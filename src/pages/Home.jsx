import React from "react";
import OrderTypeSelection from "../components/OrderTypeSelection";
import ProductCard from "../components/ProductCard";
import ProductDialog from "../components/ProductDialog";
const Home = () => {
  const products = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_mzAUvHCl_e3jg0Gh821Q0_Sd9HC9ADdg&s", name: "Special Biryani", price: 199, item_group: "biryani" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_mzAUvHCl_e3jg0Gh821Q0_Sd9HC9ADdg&s", name: "Chicken Biryani", price: 180, item_group: "biryani" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_mzAUvHCl_e3jg0Gh821Q0_Sd9HC9ADdg&s", name: "Veg Biryani", price: 150, item_group: "biryani" },
  ];

  return (
    <>
    <div className="container py-6">
      <OrderTypeSelection />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </div>
    </div>

    <ProductDialog />
    </>
  );
};

export default Home;
