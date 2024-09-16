import { FaArrowRight, FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="py-16 px-4 bg-[#191C1F] text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-3 text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img src="./fav.png" alt="Logo" className="w-12 h-auto" />
              <p className="text-2xl font-bold">CLICON</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Customer Supports:</p>
              <h2 className="text-lg font-bold">(629) 555-0129</h2>
            </div>
            <div>
              <p className="text-sm text-gray-400">4517 Washington Ave.</p>
              <p className="text-sm text-gray-400">
                Manchester, Kentucky 39495
              </p>
            </div>
            <p className="text-base">info@kinbo.com</p>
          </div>

          {/* Top Categories */}
          <div className="space-y-3 text-center md:text-start">
            <h2 className="text-lg font-bold">Top Categories</h2>
            <p className="text-sm text-gray-400">Computer & Laptop</p>
            <p className="text-sm text-gray-400">SmartPhone</p>
            <p className="text-sm text-gray-400">Headphone</p>
            <div className="flex items-center justify-center md:justify-start">
              <div className="h-1 w-6 bg-yellow-500 mt-1"></div>
              <p className="ml-2 text-sm">Accessories</p>
            </div>
            <p className="text-sm text-gray-400">Camera & Photo</p>
            <p className="text-sm text-gray-400">TV & Homes</p>
            <Link
              className="flex items-center text-sm font-bold text-yellow-500 justify-center md:justify-start"
              to={"/MindSetGradProject/products"}
            >
              <span>Browse All Products</span>
              <FaArrowRight className="ml-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center md:text-start">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Shop Product</p>
              <p>Shopping Cart</p>
              <p>Wishlist</p>
              <p>Compare</p>
              <p>Track Order</p>
              <p>Customer Help</p>
              <p>About Us</p>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-3 text-center">
            <h2 className="text-lg font-bold">Download App</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center bg-gray-800 p-3 rounded-md max-w-[176px]">
                <FaGooglePlay className="text-2xl text-white" />
                <div className="ml-3">
                  <p className="text-xs text-white">Get it now</p>
                  <h2 className="text-lg text-white">Google Play</h2>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 p-3 rounded-md max-w-[176px]">
                <FaApple className="text-2xl text-white" />
                <div className="ml-3">
                  <p className="text-xs text-white">Get it now</p>
                  <h2 className="text-lg text-white">App Store</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="space-y-3 text-center">
            <h2 className="text-lg font-bold">Popular Tags</h2>
            <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
              <div className="p-2 border border-gray-600 text-center text-white">
                Game
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                iPhone
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                TV
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Asus Laptops
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Macbook
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                SSD
              </div>
              <div className="p-2 border-2 border-white bg-gray-800 text-center text-white">
                Graphics Card
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Power Bank
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Smart TV
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Speaker
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Tablet
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Microwave
              </div>
              <div className="p-2 border border-gray-600 text-center text-white">
                Samsung
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t text-center p-4 text-gray-400 bg-[#191C1F]">
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </div>
  );
};

export default Footer;
