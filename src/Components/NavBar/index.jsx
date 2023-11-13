import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10  top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Mens clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's Clothing"
            onClick={() => context.setSearchByCategory("women's Clothing")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Womens Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Electronics"
            onClick={() => context.setSearchByCategory("Electronics")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">erms12.99@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
