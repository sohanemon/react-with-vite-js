import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section>
      <ul className='text-gray-900 bg-gray-600'>
        <div
          className='self-start p-5 text-2xl md:hidden cursor-pointer'
          onClick={() => setIsNavOpen((p) => !p)}
        >
          {isNavOpen ? <MdClose /> : <GiHamburgerMenu />}
        </div>
        <div
          className={`flex absolute ${
            isNavOpen ? "top-18" : "-top-96"
          } flex-col bg-gray-600 w-full md:flex-row justify-center select-none gap-10 py-4 items-center mx-auto font-semibold transition-all duration-500 ease-in `}
        >
          {data.map((el) => (
            <li className=' uppercase hover:text-black' key={el}>
              <a href={`/${el}`}>{el || "home"}</a>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

export default Navbar;

const data = ["", "about", "contact", "product", "subscribe"];
