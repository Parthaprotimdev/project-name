import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min80:grid-cols-3 gap-6">
      {/* Product Card */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductContainer;
