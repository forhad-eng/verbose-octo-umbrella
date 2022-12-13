import React from "react";
import { Link } from "react-router-dom";
import Logo from "./favicon.ico";

const Footer = () => {
  return (
    <div className="mt-auto bg-green-600 py-10">
      <div className=" px-5 md:px-0 container mx-auto text-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={Logo} alt="Logo" />
            <h4 className="text-xl mt-2">Immune and Inspired</h4>
          </div>

          <div className="md:w-1/2">
            <div className="mt-4 md:mt-0 w-full text-base flex items-center justify-between">
              <div className="quick-link-1 flex flex-col space-y-1">
                <Link className="transition hover:text-gray-700" to="/">
                  Go Home
                </Link>
                <Link className="transition hover:text-gray-700" to="/">
                  Departments
                </Link>
                <Link className="transition hover:text-gray-700" to="/blogs">
                  Read our Blog
                </Link>
                <Link
                  className="transition hover:text-gray-700"
                  to="/#news-later"
                >
                  News Later
                </Link>
              </div>
              <div className="quick-link-2 flex flex-col space-y-1">
                <Link className="transition hover:text-gray-700" to="/">
                  Get Help
                </Link>
                <Link className="transition hover:text-gray-700" to="/">
                  Read FAQs
                </Link>
                <Link
                  className="transition hover:text-gray-700"
                  to="/#appointment"
                >
                  Make an Appointment
                </Link>
                <Link className="transition hover:text-gray-700" to="/">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-800 mt-8 md:mt-12 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center text-sm">
          <div>Copyright &copy;2022 Immune and Inspired</div>

          <div className="policies space-x-4">
            <Link to="/">Privacy policy</Link>
            <Link to="/">Use of terms</Link>
            <Link to="/">Pricing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
