import { useGlobalState } from "../context/GlobalContext";
import CategoryBtn from "./CategoryBtn";

const buttonCategory = [
  "All",
  "Mobiles",
  "Laptops",
  "Smartwatches",
  "Accessories",
  "Headphones",
];

const CategoryBtnContainer = () => {
  const { allProducts, filteredProducts, setFilteredProducts } =
    useGlobalState();
  const handleClick = (category) => {
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  return (
    <section className="p-6 bg-white flex flex-wrap gap-4 items-center justify-center lg:max-w-[15rem] w-full lg:flex-col rounded-lg">
      {buttonCategory.map((category) => (
        <CategoryBtn handleClick={handleClick} key={category}>
          {category}
        </CategoryBtn>
      ))}
    </section>
  );
};

export default CategoryBtnContainer;
