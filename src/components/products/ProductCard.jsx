const ProductCard = ({ product }) => {
  const { product_title, price, product_image } = product;
  return (
    <div className="w-[20.2rem] p-5 bg-white rounded-2xl space-y-3 shadow-lg">
      <div className="w-full h-[11.5rem] overflow-clip rounded-xl bg-slate-500">
        <img
          className="w-full h-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>
      <div className="space-y-3 text-center">
        <h3 className="text-black text-2xl font-semibold">{product_title}</h3>
        <p className="text-black/60 text-xl">Price: ${price}</p>
        <button className="px-4 py-2 text-rose-500 text-lg font-semibold bg-white border border-rose-500 rounded-[2rem]">
          View Details
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
