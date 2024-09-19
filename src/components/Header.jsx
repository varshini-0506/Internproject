const Header = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto flex justify-around pt-4 items-center">
        <div>
          <img></img>
          <h2 className="font-bold text-3xl ">BigLinkz</h2>
        </div>
        <div>
          <ul className="flex gap-x-10 text-center">
            <li>For Brands</li>
            <li>For Agencies</li>
            <li className="flex justify-center items-center">
              Product
              <span className="material-symbols-outlined text-orange-600 ">
                keyboard_arrow_down
              </span>
            </li>
            <li className="flex justify-center items-center">
              Resources
              <span className="material-symbols-outlined text-orange-600">
                keyboard_arrow_down
              </span>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex justify-end gap-4">
          <button className="border border-red-500 p-3 px-10 flex justify-center items-center bg-red-50 rounded-xl text-orange-600 font-bold hover:shadow-orange-50 hover:shadow-xl">
            Login
            <span className="material-symbols-outlined">north_east</span>
          </button>
          <button className="border border-red-500 p-3 px-10 flex justify-center items-center bg-orange-500 rounded-xl text-white font-bold hover:shadow-orange-100 hover:shadow-xl">
            Book a Demo
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
