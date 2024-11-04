import { useGlobalState } from "../context/GlobalContext";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  const { filteredProducts } = useGlobalState();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min80:grid-cols-3 gap-6">
      {/* Product Card */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </section>
  );
};

export default ProductContainer;
