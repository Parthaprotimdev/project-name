import CategoryBtnContainer from "../components/catagoryBtns/CategoryBtnContainer";
import ProductContainer from "../components/products/ProductContainer";
import Header from "./../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="font-bold">Welcome</h2>

        {/* Gadget Container */}
        <section className="mx-auto max-w-[80rem] px-4 min80:px-0 flex flex-col items-center lg:flex-row lg:items-start gap-6 mt-12 mb-24">
          {/* sidebar button  container*/}
          <CategoryBtnContainer />

          {/* Product Container */}

          <ProductContainer />

          <section>Card</section>
        </section>
      </main>
    </>
  );
};

export default HomePage;
