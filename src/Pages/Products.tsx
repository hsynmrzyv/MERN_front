import React, { useEffect, useState } from "react";
import Newsletter from "../Components/Newsletter/Newsletter.tsx";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb.tsx";
import Filter from "../Components/Filters/Filter.tsx";
import Tags from "../Components/Tags/Tags.tsx";
import Sort from "../Components/Sort/Sort.tsx";
import Product from "../Components/Product/Product.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

interface ProductType {
  _id: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState("newest");

  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories
  );

  const selectedSizes = useSelector(
    (state: RootState) => state.sizes.selectedSizes
  );

  const selectedColors = useSelector(
    (state: RootState) => state.colors.selectedColors
  );

  const getProduct = async (page = 1, limit = 3, sortOption = "newest") => {
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sort: sortOption,
        colors: selectedColors.map((c) => c._id).join(","),
        sizes: selectedSizes.map((s) => s._id).join(","),
        categories: selectedCategories.map((c) => c._id).join(","),
      });

      const response = await fetch(`/api/products?${query.toString()}`);
      const data = await response.json();

      if (data.products && Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
      setTotalPages(data.totalPages || 0);
      setCurrentPage(data.currentPage || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    getProduct(currentPage, 9, sort);
  }, [currentPage, sort, selectedCategories, selectedSizes, selectedColors]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handleSortChange = (sortOption: string) => {
    if (sortOption !== sort) {
      setSort(sortOption);
      setCurrentPage(1);
    }
  };

  return (
    <div>
      <Breadcrumb title="Search" />
      <div className="grid grid-cols-5 gap-8 container mx-auto mt-8">
        <Filter />
        <div className="col-span-4">
          <Tags
            selectedCategories={selectedCategories}
            selectedSizes={selectedSizes}
          />
          <div className="mt-6 flex justify-between items-center">
            <p className="text-[#5C5F6A] text-xs">
              Showing {(currentPage - 1) * 9 + 1}-
              {Math.min(currentPage * 9, totalPages * 9)} of {totalPages * 9}{" "}
              results.
            </p>
            <Sort onSortChange={handleSortChange} />
          </div>
          <div className="grid grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <Product key={product._id} {...product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 ${
                  currentPage === index + 1 ? "bg-gray-500" : "bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Products;
