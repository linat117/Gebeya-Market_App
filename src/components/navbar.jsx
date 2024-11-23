import {React, useState} from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [MoredropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setIsOpen((prev) => !prev);
  };
  
  const toggleMoreDropdown = () => {
    setMoreDropdownOpen((prev) => !prev);
    setIsMoreOpen((prev) => !prev);
  };
  return (
    <nav className="relative w-[1512px] h-[90px] flex ">
      <div  className="ml-[80px] mr-[80px] mt-[24px] mb-[24px] flex w-[1352px] h-[46.5px] space-x-[44px]">
        {/* Logo Section */}
        <div className="mt-[7.25px] mb-[7.25px] w-[32px] h-[32px]">
          <a href="/">
            <img src="/src/assets/img/image.png" alt="Logo" />
          </a>
        </div>

        {/* Links Section */}
        <ul className="flex ml-[76px] mt-[11.25px] w-[644px] h-[24px] space-x-[24px]">
        <li className="relative inline-block w-[165px] h-[24px]">
          <button
            onClick={toggleDropdown}
            className="hover:text-black flex space-x-[4px]"
          >
            <img src="/src/assets/icons/Vector.png" className="mt-[5.33px] ml-[2px] w-[12px] h-[12.67px]"/>
           <li className="w-[125px] h-[24px] font-poppins text-[16px] text-[#1E1E1E]"> Register/Sign In</li>
           <img src={isOpen ? "src/assets/icons/up.png" : "src/assets/icons/down.png"} className="mt-[4px] ml-[149px]"/>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div  id="dropdown-menu"
            className={`absolute  bg-white border border-[#C1C1C1]  
              w-[194px] h-[132px] mt-[9px] ml-[8px] space-y-[8px]
              ${
              dropdownOpen ? "block" : "hidden"
            } group-hover:block`}
          >
            <a
              href="/register"
              className="block ml-[64px] mt-[10px] font-poppins text-[16px] text-[#000000]"
            >
              Register
            </a>
            <hr className="w-[127px] ml-[33px] mt-[52px]"></hr>
            <a
              href="/signin"
              className="block  ml-[70px] mt-[10px] text-[#000000] font-poppins text-[16px]"
            >
              Sign In
            </a>
          </div>
          )}
        </li>
          <li><a href="/home" className="font-poppins text-[16px] text-[#1E1E1E] hover:text-SemiBold active:text-SemiBold">Home</a></li>
          <li><a href="/men" className="font-poppins text-[16px] text-[#1E1E1E]">Men</a></li>
          <li><a href="/women" className="font-poppins text-[16px] text-[#1E1E1E]">Women</a></li>
          <li><a href="/kids" className="font-poppins text-[16px] text-[#1E1E1E]">Kids</a></li>
          <li><a href="/accessories" className="font-poppins text-[16px] text-[#1E1E1E]">Accessories</a></li>
          <li className="relative inline-block space-x-[4px] text-[#1E1E1E]">
          <button
            onClick={toggleMoreDropdown}
            className="hover:text-black flex w-[60px] h-[24px] space-x-[4px]"
          >
           <li className="w-[40px] h-[24px] font-poppins text-[16px] text-[#1E1E1E]"> More</li>
          
            <img src={isMoreOpen ? "/src/assets/icons/up.png" : "src/assets/icons/down.png"} className="mt-[4px] "/>
          </button>

          {/* Dropdown Menu */}
          {isMoreOpen && (
          <div
            className={`absolute bg-white border border-[#C1C1C1]  
              w-[194px] h-[280px] space-y-[8px] mt-[18px] ml-[601px] 
              ${
              MoredropdownOpen ? "block" : "hidden"
            } group-hover:block`}
          >
            <a
              href="/perfume"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Perfumes
            </a>
            <hr/>
            <a
              href="/jewelry"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Jewelry
            </a>
            <hr/>
            <a
              href="/gym"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Gym wears
            </a>
            <hr/>
            <a
              href="/vintage"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Vintage wears
            </a>
            <hr/>
            <a
              href="/sport"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Sport wear
            </a>
            <hr/>
            <a
              href="/pj"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Pyjamas
            </a>
            <hr/>
            <a
              href="/slipper"
              className="block ml-[16px] mt-[8px] font-poppins font-medium text-[16px] text-[#000000]"
            >
              Slippers
            </a>
          </div>
)}
        </li>
        </ul>

        {/* Search Bar */}
        <div className="flex relative space-x-[8px] ml-[764px] mt-[3.25px] w-[275px] h-[40px] border border-[#C6C6C6] rounded-[16px] ">
          
          <div className="flex w-[197px] h-[40px] px-[8px] py-[8px]"><img src="src/assets/icons/search.png" className="w-[16px] h-[16px] text-[#1E1E1E] ml-[8px] mt-[4px]  opacity-100"/>
          <input type="text" placeholder="Search" className=" w-[57px] h-[24px] font-poppins text-[16px] font-normal align-left text-[#1E1E1E] ml-[8px]" />
          </div>
          <div className="rounded-r-[16px] w-[78px] h-[40px] space-x-[10px] ml-[197px]  bg-[#882BEC] "><img src="src/assets/icons/search.png" className="ml-[23px] mt-[8px] w-[20.28px] h-[20.28px] invert space-x-4 opacity-100"/></div>
        </div>

        {/* Cart Section */}
        <div className="flex w-[149px] h-[24px] space-x-[4px] ml-[1083px] mt-[11.25px]">
         <img src="/src/assets/icons/uk.png" className="w-[24px] h-[24px]"/>
          <div className=" ml-[28px] font-poppins font-regular text-[16px] text-[#1E1E1E]">EN/Currency</div>
          <img src="/src/assets/icons/down.png" className="w-[16px] h-[16px] mt-[4px]"/>
          
        </div>
        <div>
        <a href="/cart">
            <img src="/src/assets/icons/cart.png" alt="Cart" className="w-[47px] h-[46.5px] rounded-full filter mix-blend-screen bg-[#882BEC]" />
          </a>
        </div>

        {/* Mobile Menu Button 
        <button>Menu</button>
      </div>*/}

      {/* Mobile Menu 
      <div>
        <ul>
          <li><a href="/register">Register</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/accessories">Accessories</a></li>
          <li><a href="/dashboard">More</a></li>
        </ul>*/}
      </div>
    </nav>
  );
};

export default Navbar;
