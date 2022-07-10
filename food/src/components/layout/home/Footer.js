import React from "react";
import "../../style/home/footer.scss";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-element1">
          <div className="logo">
            <a href="" className="">
              <img src="https://easyfreshmarket.com/catalog/view/theme/tt_safira1/image/logo-footer.png" alt="" />
            </a>
            <div className="about">
              <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
            </div>
            <div className="contact">
              <ul>
                <li>
                  <strong>Address:</strong> 4710-4890 Breckinridge USA
                </li>
                <li>
                  <strong>Emali:</strong> support@plazathemes.com
                </li>
                <li>
                  <strong>Call Us:</strong> 1-1001-234-5678
                </li>
              </ul>
            </div>
          </div>
          <nav className="information">
            <div className="title-information">
              <h3>Information</h3>
            </div>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Frequently Questions</a>
              </li>
            </ul>
          </nav>
          <nav className="category">
            <div className="title-category">
              <h3>Categories</h3>
            </div>
            <ul>
              <li>
                <a href="">Lentil</a>
              </li>
              <li>
                <a href="">Limes</a>
              </li>
              <li>
                <a href="">Mangoes</a>
              </li>
              <li>
                <a href="">Chickpea</a>
              </li>
              <li>
                <a href="">Avocados</a>
              </li>
              <li>
                <a href="">Cauliflower</a>
              </li>
            </ul>
          </nav>
          <div className="sign-up">
            <div className="title-sign-up">
              <h3>Sign Up To Newsletter</h3>
            </div>
            <div className="about">
              <p>Subscribe to get the latest news and updates from Safira</p>
            </div>
            <div className="search-email flex a-center">
              <input type="text" placeholder="Your email address..."></input>
              <button className="subscribe">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="crossbar"></div>
        <div className="footer-element2 flex j-between">
          <div className="copyright">
            <p className="text-[#999]">
              Copyright © PlazaThemes. All Right Reserved.
              <br />
              Design by Plazathemes.com
            </p>
          </div>
          <div className="credit flex">
            <img className=" mx-2 rounded-sm" src="https://easyfreshmarket.com/image/catalog/ptblock/paypal.jpg" alt="" />
            <img className=" mx-2 rounded-sm" src="https://easyfreshmarket.com/image/catalog/ptblock/paypal1.jpg" alt="" />
            <img className=" mx-2 rounded-sm" src="https://easyfreshmarket.com/image/catalog/ptblock/paypal2.jpg" alt="" />
            <img className=" mx-2 rounded-sm" src="https://easyfreshmarket.com/image/catalog/ptblock/paypal3.jpg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
