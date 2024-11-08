const CategoryBtn = ({ children, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(children)}
      className="max-w-[12rem] w-full py-3 rounded-[2rem] text-white bg-rose-500"
    >
      {children}
    </button>
  );
};

export default CategoryBtn;
