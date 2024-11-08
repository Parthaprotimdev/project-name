const Footer = () => {
  return (
    <footer className="mt-auto bg-white text-center">
      <section className="px-4 min80:px-0 py-[6.25rem] bg-white flex flex-col items-center">
        <div className="space-y-3 pb-8 border-b mb-8 w-full text-center">
          <h2 className="text-[#09080F] text-[2rem] font-bold">
            Gadget Heaven
          </h2>
          <p className="text-[#09080F99] text-base font-medium text-center">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <div className="max-w-[45rem] w-full flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#09080F]text-lg font-bold">Services</h3>
            <ul className="text-[#09080F99] text-base space-y-2 mt-4 text-center">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery Returns</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#09080F]text-lg font-bold">Company</h3>
            <ul className="text-[#09080F99] text-base space-y-2 mt-4 text-center">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#09080F]text-lg font-bold">Legal</h3>
            <ul className="text-[#09080F99] text-base space-y-2 mt-4 text-center">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
