import React, { Fragment, useEffect, useState } from "react";
import "../../style/home/header.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authen/user/authContext";
import CartPane from "../cart/CartPane";
import { UseCart } from "../../context/cartContext";
import logoMain from "./logoMain.png";

const Header = () => {
  const { user, login, logout } = useAuth();
  const [check, setCheck] = useState();
  const [cart, setCart] = UseCart();
  let quantityCart = 0;
  if (cart && cart?.length > 0) {
    quantityCart = cart.length;
  }

  useEffect(() => {
    setCheck(user);
  }, [user]);
  return (
    <Fragment>
      <header>
        <div className="header-one">
          <div className="container flex j-between a-center">
            <div className="one left">
              <nav>
                <ul className="lang flex">
                  <li className="hover1">
                    Lang <i className="fas fa-chevron-down"></i>
                    <ul className="dropdown d1">
                      <li>
                        <a href="">ENG</a>
                      </li>
                      <li className="crossbar"></li>
                      <li>
                        <a href="">FR</a>
                      </li>
                    </ul>
                  </li>
                  <li>|</li>
                  <li className="hover2">
                    Currency <i className="fas fa-chevron-down"></i>
                    <ul className="dropdown d2">
                      <li>
                        <a href="#">USD</a>
                      </li>
                      <li className="crossbar"></li>
                      <li>
                        <a href="#">UER</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="one right">
              <nav>
                <ul className="flex">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fas fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-two">
          <div className="container flex j-between a-center">
            <div className="logo">
              <Link to={"/"}>
                <img src={logoMain} alt="" />
              </Link>
            </div>
            <div className="search-bar">
              <div className="search-bar-wrap flex j-center a-center">
                <div className="all flex a-center j-between">
                  <span className="All">All</span>
                  <i className="fas fa-chevron-down down"></i>
                  <ul className="dropdown_All">
                    <li>
                      <a href="/">All</a>
                    </li>
                    <li>
                      <a href="/" className="dried">
                        Dried beans
                      </a>
                      <ul className="dropdown_Diedbeans">
                        <li>
                          <a href="/">snack pack</a>
                        </li>
                        <li>
                          <a href="/">canned fruits</a>
                        </li>
                        <li>
                          <a href="/">Serveware</a>
                        </li>
                        <li>
                          <a href="/">chickpeas</a>
                        </li>
                        <li>
                          <a href="/">stewed</a>
                        </li>
                        <li>
                          <a href="/">vegetables pureed</a>
                        </li>
                        <li>
                          <a href="/">raw fruit</a>
                        </li>
                        <li>
                          <a href="/">dried fruits</a>
                        </li>
                        <li>
                          <a href="/">red kidney</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Allium</a>
                    </li>
                    <li>
                      <a href="/">Marrow</a>
                    </li>
                    <li>
                      <a href="/">Edible plant stem</a>
                    </li>
                    <li>
                      <a href="/">Red foods</a>
                    </li>
                    <li>
                      <a href="/">chickpea</a>
                    </li>
                    <li>
                      <a href="/">Cruciferous</a>
                    </li>
                    <li>
                      <a href="/">Green vegetables</a>
                    </li>
                    <li>
                      <a href="/">Fresh beans</a>
                    </li>
                    <li>
                      <a href="/">Leafy green</a>
                    </li>
                  </ul>
                </div>
                <input type="text" placeholder="Search product..." id="searchProducts" />
                <div className="icon flex a-center">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            <nav className="login">
              <ul className="flex a-center">
                <li className="relative ">
                  {!check ? (
                    <>
                      <Link to={"/register"}>
                        <span
                          className="font-normal"
                          // id="login"
                          // className="text-base p-2 hover:text-[#28a745] transition cursor-pointer"
                          // onClick={(e) => {
                          //   setShowLogin(true);
                          // }}
                        >
                          REGISTER
                        </span>
                      </Link>
                      <span className="p-2 font-medium">/</span>
                      <Link to={"/login"}>
                        <span
                          className="font-normal"
                          // id="register"
                          // className="text-base p-2 hover:text-[#28a745] transition cursor-pointer"
                          // onClick={(e) => {
                          //   setShowRegister(true);
                          // }}
                        >
                          LOGIN
                        </span>
                      </Link>
                    </>
                  ) : (
                    <div className="relative icon-user-wrapper">
                      <span
                        className="icon-user rounded-full bg-slate-100 h-[35px] w-[35px] flex justify-center items-center cursor-pointer  "
                        id="icon-user"
                      >
                        <i className="fa-solid fa-user text-[15px]"></i>
                        {/* <UserDetail className=""></UserDetail> */}
                      </span>
                      <div
                        className="w-[150px] bg-[#f4f4f4] absolute  drop-shadow-lg rounded-sm hidden transition-all translate-x-[-35%]"
                        id="dropdown-user"
                      >
                        <Link to={"/user/my-account"}>
                          <span className="block px-[10px] py-[5px] w-full hover:bg-[#fafafa] hover:text-[#28a745] text-center cursor-pointer">
                            My account
                          </span>
                        </Link>
                        <button
                          className="block px-[10px] py-[5px] hover:bg-[#fafafa] w-full hover:text-[#28a745]"
                          onClick={() => {
                            logout();
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <a className="icon">
                    <i className="far fa-heart"></i>
                    <span className="count count-heart">0</span>
                  </a>
                </li>
                <li>
                  <Link to={"/cart"} className="icon">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="count count-cart">{quantityCart}</span>
                  </Link>
                  <div className="content_pane my-[11px] overflow-y-scroll max-h-[400px]" id="cart_pane">
                    {/* <ul className="">
                      <li>No products in the cart.</li>
                    </ul> */}
                    <CartPane></CartPane>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-three">
          <div className="container flex">
            <nav className="cate-menu-wrap">
              <div className="flex a-center">
                <i className="fas fa-bars"></i>
                <h3 className="all-cate">All Categories</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <ul className="dropdown-menu-cate">
                <li>
                  <a href="/">Healthy</a>
                  <i className="fas fa-chevron-right"></i>
                  <ul className="dropdown-healthy flex">
                    <li>
                      <a href="/">Baskets & Bins</a>
                    </li>
                    <li>
                      <a href="/">Asparagus</a>
                    </li>
                    <li>
                      <a href="/">Broccoli</a>
                    </li>
                    <li>
                      <a href="/">Asparagus</a>
                    </li>
                    <li>
                      <a href="/">Shallot</a>
                    </li>
                    <li>
                      <a href="/">Headboards & Footboards</a>
                    </li>
                    <li>
                      <a href="/">Sweet Patoto</a>
                    </li>
                    <li>
                      <a href="/">Onion</a>
                    </li>
                    <li>
                      <a href="/">Storage & Organization</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Marrow</a>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li>
                  <a href="/">Allium</a>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li>
                  <a href="/">Vitamins</a>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li>
                  <a href="/">Chickpea</a>
                  <i className="fas fa-chevron-right"></i>
                </li>
                <li>
                  <a href="/">Green Vegetables</a>
                </li>
                <li>
                  <a href="/">Fresh Beans</a>
                </li>
                <li>
                  <a href="/">Leafy Green</a>
                </li>
                <li>
                  <a href="/">Cruciferous</a>
                </li>
                <li>
                  <a href="/">Onion</a>
                </li>
                <li>
                  <a href="/">More Categories</a>
                </li>
              </ul>
            </nav>
            <nav className="menu-wrap">
              <ul className="menu flex a-center">
                <li className="home">
                  <a href="/" className="home">
                    Home <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-home flex">
                    <li>
                      <a href="/">Demo Group 01</a>
                      <ul className="dropdown-home-element-one">
                        <li>
                          <a href="/" className="organic">
                            Organic 01
                          </a>
                        </li>
                        <li>
                          <a href="/">Organic 02</a>
                        </li>
                        <li>
                          <a href="/">Organic 03</a>
                        </li>
                        <li>
                          <a href="/">Organic 04</a>
                        </li>
                        <li>
                          <a href="/">Cosmetic 01</a>
                        </li>
                        <li>
                          <a href="/">Cosmetic 02</a>
                        </li>
                        <li>
                          <a href="/">Cosmetic 03</a>
                        </li>
                        <li>
                          <a href="/">Cosmetic 04</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Demo Group 02</a>
                      <ul className="dropdown-home-element-two">
                        <li>
                          <a href="/">Electronic 01</a>
                        </li>
                        <li>
                          <a href="/">Electronic 02</a>
                        </li>
                        <li>
                          <a href="/">Electronic 03</a>
                        </li>
                        <li>
                          <a href="/">Electronic 04</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="shop">
                  <a href="/">
                    Shop <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-home flex">
                    <li>
                      <a href="/">Shop Layouts</a>
                      <ul className="dropdown-home-element-one">
                        <li>
                          <a href="/">Sidebar Left</a>
                        </li>
                        <li>
                          <a href="/">Sidebar Right</a>
                        </li>
                        <li>
                          <a href="/">Full Width</a>
                        </li>
                        <li>
                          <a href="/">List View</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Shop Pages</a>
                      <ul className="dropdown-home-element-two">
                        <li>
                          <a href="/">Category</a>
                        </li>
                        <li>
                          <a href="/">My account</a>
                        </li>
                        <li>
                          <a href="/">Wishlist</a>
                        </li>
                        <li>
                          <a href="/">Cart</a>
                        </li>
                        <li>
                          <a href="/">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Product Types</a>
                      <ul className="dropdown-home-element-two">
                        <li>
                          <a href="/">Grouped Product</a>
                        </li>
                        <li>
                          <a href="/"> Variable Product</a>
                        </li>
                        <li>
                          <a href="/">Simple Product</a>
                        </li>
                        <li>
                          <a href="/"> External Product</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="blog">
                  <a href="/">
                    Blog <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-home flex">
                    <li>
                      <a href="/"> Blog Layouts</a>
                      <ul className="dropdown-home-element-one">
                        <li>
                          <a href="/" className="organic">
                            Sidebar Left
                          </a>
                        </li>
                        <li>
                          <a href="/">Sidebar Right</a>
                        </li>
                        <li>
                          <a href="/">Large image</a>
                        </li>
                        <li>
                          <a href="/">Blog Grid</a>
                        </li>
                        <li>
                          <a href="/">No Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Blog Pages</a>
                      <ul className="dropdown-home-element-two">
                        <li>
                          <a href="/">Author</a>
                        </li>
                        <li>
                          <a href="/">Archives</a>
                        </li>
                        <li>
                          <a href="/"> Category</a>
                        </li>
                        <li>
                          <a href="/">Blog Tag</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Post Formats</a>
                      <ul className="dropdown-home-element-two">
                        <li>
                          <a href="/">Image Format</a>
                        </li>
                        <li>
                          <a href="/">Gallery Format</a>
                        </li>
                        <li>
                          <a href="/">Audio Format</a>
                        </li>
                        <li>
                          <a href="/">Video Format</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="pages">
                  <a href="/">
                    Pages <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-home flex dropdown-page">
                    <li>
                      <a href="/"> Frequently Questions</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/"> Error 404 </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-four">
          <div className="container flex j-between a-center">
            <div className="logo-menu-wrap flex j-between a-center">
              <div className="logo2">
                <img className="image-logo2" src="" alt="" />
              </div>
              <nav className="menu-wrap">
                <ul className="menu flex a-center">
                  <li className="home">
                    <a href="/" className="home">
                      Home <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-home flex">
                      <li>
                        <a href="/">Demo Group 01</a>
                        <ul className="dropdown-home-element-one">
                          <li>
                            <a href="/" className="organic">
                              Organic 01
                            </a>
                          </li>
                          <li>
                            <a href="/">Organic 02</a>
                          </li>
                          <li>
                            <a href="/">Organic 03</a>
                          </li>
                          <li>
                            <a href="/">Organic 04</a>
                          </li>
                          <li>
                            <a href="/">Cosmetic 01</a>
                          </li>
                          <li>
                            <a href="/">Cosmetic 02</a>
                          </li>
                          <li>
                            <a href="/">Cosmetic 03</a>
                          </li>
                          <li>
                            <a href="/">Cosmetic 04</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Demo Group 02</a>
                        <ul className="dropdown-home-element-two">
                          <li>
                            <a href="/">Electronic 01</a>
                          </li>
                          <li>
                            <a href="/">Electronic 02</a>
                          </li>
                          <li>
                            <a href="/">Electronic 03</a>
                          </li>
                          <li>
                            <a href="/">Electronic 04</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="shop">
                    <a href="/">
                      Shop <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-home flex">
                      <li>
                        <a href="/">Shop Layouts</a>
                        <ul className="dropdown-home-element-one">
                          <li>
                            <a href="/">Sidebar Left</a>
                          </li>
                          <li>
                            <a href="/">Sidebar Right</a>
                          </li>
                          <li>
                            <a href="/">Full Width</a>
                          </li>
                          <li>
                            <a href="/">List View</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Shop Pages</a>
                        <ul className="dropdown-home-element-two">
                          <li>
                            <a href="/">Category</a>
                          </li>
                          <li>
                            <a href="/">My account</a>
                          </li>
                          <li>
                            <a href="/">Wishlist</a>
                          </li>
                          <li>
                            <a href="/">Cart</a>
                          </li>
                          <li>
                            <a href="/">Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Product Types</a>
                        <ul className="dropdown-home-element-two">
                          <li>
                            <a href="/">Grouped Product</a>
                          </li>
                          <li>
                            <a href="/"> Variable Product</a>
                          </li>
                          <li>
                            <a href="/">Simple Product</a>
                          </li>
                          <li>
                            <a href="/"> External Product</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="blog">
                    <a href="/">
                      Blog <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-home flex">
                      <li>
                        <a href="/"> Blog Layouts</a>
                        <ul className="dropdown-home-element-one">
                          <li>
                            <a href="/" className="organic">
                              Sidebar Left
                            </a>
                          </li>
                          <li>
                            <a href="/">Sidebar Right</a>
                          </li>
                          <li>
                            <a href="/">Large image</a>
                          </li>
                          <li>
                            <a href="/">Blog Grid</a>
                          </li>
                          <li>
                            <a href="/">No Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Blog Pages</a>
                        <ul className="dropdown-home-element-two">
                          <li>
                            <a href="/">Author</a>
                          </li>
                          <li>
                            <a href="/">Archives</a>
                          </li>
                          <li>
                            <a href="/"> Category</a>
                          </li>
                          <li>
                            <a href="/">Blog Tag</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Post Formats</a>
                        <ul className="dropdown-home-element-two">
                          <li>
                            <a href="/">Image Format</a>
                          </li>
                          <li>
                            <a href="/">Gallery Format</a>
                          </li>
                          <li>
                            <a href="/">Audio Format</a>
                          </li>
                          <li>
                            <a href="/">Video Format</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pages">
                    <a href="/">
                      Pages <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-home flex dropdown-page">
                      <li>
                        <a href="/"> Frequently Questions</a>
                      </li>
                      <li>
                        <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <a href="/"> Error 404 </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <nav className="login">
                <ul className="flex a-center">
                  <li>
                    <a className="icon" href="/">
                      <i className="far fa-heart"></i>
                      <span className="count count-heart">0</span>
                    </a>
                  </li>
                  <li>
                    <a className="icon icon-cart" href="cart.html">
                      <i className="fa fa-shopping-cart"></i>
                      <span className="count count-cart">0</span>
                    </a>
                    <div className="content_pane">
                      {/* <ul>
                        <li>No products in the cart.</li>
                      </ul> */}
                      {/* <!-- <div className="list-cart"> 
                      </div> 
                      <div className="total-wrapper">
                        <span>Subtotal:</span>
                        <span className="total">0.00$</span>
                      </div>
                      <div className="view-cart-and-checkout">
                        <a href="/">VIEW CART</a>
                        <a href="/">CHECKOUT</a>
                      <<CartPane></CartPane>> */}
                      {<CartPane></CartPane>}
                      sdasdssds
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
