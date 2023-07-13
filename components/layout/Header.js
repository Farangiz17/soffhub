import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import data from "../../util/blogData";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const [coloring1Usestate, setcoloring1Usestate] = useState("color-gray-500");
  const [coloring2Usestate, setcoloring2Usestate] = useState("color-gray-500");
  const [coloring3Usestate, setcoloring3Usestate] = useState("color-gray-500");
  const [coloring4Usestate, setcoloring4Usestate] = useState("color-gray-500");
  const [coloring5Usestate, setcoloring5Usestate] = useState("color-gray-500");
  const [coloring6Usestate, setcoloring6Usestate] = useState("color-gray-500");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  function coloring1(params) {
    setcoloring1Usestate("active");
    setcoloring2Usestate("color-gray-500");
    setcoloring3Usestate("color-gray-500");
    setcoloring4Usestate("color-gray-500");
    setcoloring5Usestate("color-gray-500");
    setcoloring6Usestate("color-gray-500");
  }
  function coloring2(params) {
    setcoloring1Usestate("color-gray-500");
    setcoloring2Usestate("active");
    setcoloring3Usestate("color-gray-500");
    setcoloring4Usestate("color-gray-500");
    setcoloring5Usestate("color-gray-500");
    setcoloring6Usestate("color-gray-500");
  }
  function coloring3(params) {}
  function coloring4(params) {}
  function coloring5(params) {}
  function coloring6(params) {}

  return (
    <div className="position-relative">
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
      >
        <div className="container services-header-parent-relative">
          <div className="main-header">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <img
                  className="logo-night"
                  alt="GenZ"
                  src="/assets/imgs/page/about/soff_hub_logo.jpg"
                />
                {/* <h4 className="ms-2 color-gray-50">Soff Hub</h4> */}
              </Link>
            </div>
            <div className="header-nav ">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link className="color-gray-500" href="/about">
                      ABOUT US
                    </Link>
                  </li>
                  <li
                    onClick={coloring1}
                    className="services-header position-static"
                  >
                    <Link className={coloring1Usestate} href="/services">
                      SERVICES
                    </Link>

                    <div className="cover-home3 services-hover">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-1" />
                          <div className="col-xl-3 color-linear">
                            <h3 className="color-linear">SERVICES</h3>
                          </div>
                          <div className="col-xl-8 col-lg-8">
                            <div className="row">
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  Frontend Development
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  Backend Web Development
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  CRM Systems
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  UX / UI Design
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  AWS Serverless
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  Mobile apps
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  Cybersecurity
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  Branding
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li onClick={coloring2}>
                    <Link className={coloring2Usestate} href="/portfolio">
                      PORTFOLIO
                    </Link>
                  </li>

                  <li onClick={coloring3}>
                    <Link className={coloring3Usestate} href="/vacancies">
                      VACANCIES
                    </Link>
                  </li>
                  <li onClick={coloring4}>
                    <Link className={coloring4Usestate} href="/blog">
                      BLOG
                    </Link>
                  </li>
                  <li onClick={coloring5}>
                    <Link className={coloring5Usestate} href="/contact">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${
                  openClass && "burger-close"
                }`}
                onClick={() => {
                  handleOpen();
                  handleRemove();
                }}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            <div className="header-right text-end">
              <p className="home-contact-fixed  ">
                <Link href="/page-contact " className="color-white text-center  d-sm-inline-block  wow animate__animated animate__fadeInUp  typewrite color-linear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
