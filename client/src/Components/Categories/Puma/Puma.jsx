import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import { Paginate } from "../../Paginate/Paginate";
import { Link } from "react-router-dom";
import { NavBar } from "../../Navbar/Navbar";
import FilterNavBar from "../../FilterNavBar/FilterNavBar";
import Filters from "../../Filters/Filters";
import style from "./Puma.module.css";
import Footer from "../../Footer/Footer";

export default function Puma() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
    
  }, [dispatch]);

  const  allProducts = useSelector((state) => state.filteredProducts);
  const filterProducts = allProducts.filter((product) => {
    return product.brands === "PUMA";
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const ultimo = currentPage * productsPerPage;
  const primero = ultimo - productsPerPage;
  const products = filterProducts.slice(primero, ultimo);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  return (
    <div>
      <NavBar />
      <FilterNavBar />
      <Filters SizeFilter={true} GenderFilter={true} WearedFilter={true} SeasonFilter={true}/>

      <div className={style.container}>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Link to={`/detail/${product._id}`}>
                <ProductCard
                  key={crypto.randomUUID()}
                  _id={product._id}
                  name={product.name}
                  image={product.productConditionals[0].image[1]}
                  size={product.size}
                  price={product.price}
                  description={product.description}
                />
              </Link>
            );
          })
        ) : (
          <p className={style.loading}>NO ÍTEMS FOUND...</p>
        )}
      </div>

      {products.length > 0 ? (
  <Paginate
    productsPerPage={productsPerPage}
    allProducts={filterProducts.length}
    setPagination={setPagination}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />
) : null}
<Footer />
    </div>
  );
}
