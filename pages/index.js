import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Soff Hub</title>
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-12 col-lg-12">
                <div className="banner mb-5">
                  <div className="row align-items-end">
                    <div className="col-lg-5 pt-100">
                      <h3
                        style={{ maxWidth: "400px" }}
                        className="color-gray-50 typewrite color-linear mt-20 mb-20 wow animate__animated animate__fadeInUp"
                      >
                        {t("H_title")}
                      </h3>
                    </div>
                    <div className="col-lg-7 text-center mb-5">
                      <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                        <img
                          width="400px"
                          src="/assets/imgs/page/about/soffhub-removebg-preview.png"
                          alt="Genz"
                          className="mb-70"
                        />
                        <div className="pattern-1">
                          <img
                            src="assets/imgs/page/home/soff study logo.png"
                            alt="Genz"
                          />
                        </div>
                        <div className="pattern-2">
                          <img
                            src="assets/imgs/template/pattern-2.svg"
                            alt="Genz"
                          />
                        </div>
                        <div className="pattern-3">
                          <img
                            src="assets/imgs/template/pattern-3.svg"
                            alt="Genz"
                          />
                        </div>
                        <div className="pattern-4">
                          <img
                            src="assets/imgs/template/pattern-4.svg"
                            alt="Genz"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-70 mb-50">
                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-4 col-2">
                    {/* yo'nalishlar */}
                    <div className="text-center  mt-50">
                      <ul className="list-tags-col-5  mb-50 text-center d-flex">
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                React.js
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                Next.js
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon-white.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                Vue/Nuxt.js
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.2s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://w7.pngwing.com/pngs/702/915/png-transparent-ruby-on-rails-round-logo-tech-companies-thumbnail.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                Rails
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.3s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                Node.js
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                Nest.js
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.0s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://e7.pngegg.com/pngimages/969/723/png-clipart-functional-programming-in-python-computer-programming-programming-language-python-programming-practice-workshop-program-logo-text-logo-thumbnail.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                Python
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                SQL
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="card-image">
                              <Link href="">
                                <img
                                  src="https://www.openxcell.com/wp-content/uploads/2021/11/Group-56816.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link className="color-gray-500" href="">
                                NoSQL
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row mt-70 mb-50 border-gray-800  ">
                  <h2 className="typewrite color-linear mb-50">
                    {t("I_our_services")}
                  </h2>
                  <div className="col-lg-6 col-xl-6 col-12">
                    <div
                      className="card-style-2 services-card px-3 hover-up hover-neon wow animate__animated animate__fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="service-cart__content">
                        <h3 className="color-white mb-15 d-block">
                          {t("I_frontend_development")}
                        </h3>
                        <p className="text-base color-gray-700">
                          {t("I_front_desc")}
                        </p>
                      </div>
                      <div className="ms-1">
                        <span className="item-icon bg-gray-950 icon-motion" />
                      </div>
                    </div>

                    <div
                      className="card-style-2 services-card px-3 hover-up hover-neon wow animate__animated animate__fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="service-cart__content">
                        <h3 className="color-white mb-15 d-block">
                          {t("I_design")}
                        </h3>
                        <p className="text-base color-gray-700">
                         {t("I_design_desc")}
                        </p>
                      </div>
                      <div className="ms-1">
                        <span className="item-icon bg-gray-950 icon-branding" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div
                      className="card-style-2 services-card px-3 hover-up hover-neon wow animate__animated animate__fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="service-cart__content">
                        <h3 className="color-white mb-15 d-block">
                          {t("I_backend")}
                        </h3>
                        <p className="text-base color-gray-700">
                         {t("I_backend_desc")}
                        </p>
                      </div>
                      <div className="ms-1">
                        <span className="item-icon bg-gray-950 icon-ui" />
                      </div>
                    </div>
                    <div
                      className="card-style-2 services-card px-3 hover-up hover-neon wow animate__animated animate__fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="service-cart__content">
                        <h3 className="color-white mb-15 d-block">
                         {t("I_AWS_serverless")}
                        </h3>
                        <p className="text-base color-gray-700">
                          {t("I_AWS_serverless_desc")}
                        </p>
                      </div>
                      <div className="ms-1">
                        <span className="item-icon bg-gray-950 icon-product" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-70">
                  <h2 className="color-linear d-inline-block mb-10">
                    {t("I_portfolio")}
                  </h2>
                  <div className="col-6">
                    <div
                      className="card-list-posts wow animate__animated animate__fadeIn"
                      width="100%"
                    >
                      <div className="card-image hover-up">
                        <Link href="/single-sidebar">
                          <img
                            src="assets/imgs/page/portfolio/kvant.jpg"
                            alt="Genz"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-3">
                    <div className="card-list-posts wow animate__animated animate__fadeIn">
                      <div className="card-image hover-up">
                        <Link href="/single-sidebar">
                          <img
                            src="assets/imgs/page/portfolio/kvant.jpg"
                            alt="Genz"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card-list-posts wow animate__animated animate__fadeIn">
                      <div className="card-image hover-up">
                        <Link href="/single-sidebar">
                          <img
                            src="assets/imgs/page/portfolio/kvant.jpg"
                            alt="Genz"
                          />
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-12">
                    {/* <p className="text-lg color-gray-500">
                      Don't miss the latest trends
                    </p> */}
                    {/* <div className="box-list-posts mt-70">
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-1.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-2.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-3.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-4.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-5.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <nav className="mb-50">
                      <ul className="pagination">
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".0s"
                        >
                          <Link className="page-link page-prev" href="#">
                            <i className="fi-rr-arrow-small-left" />
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".1s"
                        >
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".2s"
                        >
                          <Link className="page-link active" href="#">
                            2
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".3s"
                        >
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".4s"
                        >
                          <Link className="page-link" href="#">
                            ...
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".5s"
                        >
                          <Link className="page-link page-next" href="#">
                            <i className="fi-rr-arrow-small-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav> */}
                  </div>
                  {/* <div className="col-lg-4">
                    <div className="sidebar">
                      <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                          <h5 className="line-bottom">Popular Posts</h5>
                        </div>
                        <div className="content-sidebar">
                          <div className="list-posts">
                            <div className="item-post wow animate__animated animate__fadeIn">
                              <div className="image-post">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/homepage1/img-post.jpg"
                                    alt="Genz"
                                  />
                                </Link>
                              </div>
                              <div className="info-post border-gray-800">
                                <Link href="/single-sidebar">
                                  <h6 className="color-white">
                                    Creating is a privilege but it’s also a gift
                                  </h6>
                                </Link>
                                <span className="color-gray-700">
                                  15 mins read
                                </span>
                                <ul className="d-inline-block">
                                  <li className="color-gray-700">
                                    15 April 2022
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="item-post wow animate__animated animate__fadeIn">
                              <div className="image-post">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/homepage1/img-post2.jpg"
                                    alt="Genz"
                                  />
                                </Link>
                              </div>
                              <div className="info-post border-gray-800">
                                <Link href="/single-sidebar">
                                  <h6 className="color-white">
                                    Being unique is better than being perfect
                                  </h6>
                                </Link>
                                <span className="color-gray-700">
                                  15 mins read
                                </span>
                                <ul className="d-inline-block">
                                  <li className="color-gray-700">
                                    15 April 2022
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="item-post wow animate__animated animate__fadeIn">
                              <div className="image-post">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/homepage1/img-post3.jpg"
                                    alt="Genz"
                                  />
                                </Link>
                              </div>
                              <div className="info-post border-gray-800">
                                <Link href="/single-sidebar">
                                  <h6 className="color-white">
                                    Every day, in every city and town across the
                                    country
                                  </h6>
                                </Link>
                                <span className="color-gray-700">
                                  15 mins read
                                </span>
                                <ul className="d-inline-block">
                                  <li className="color-gray-700">
                                    15 April 2022
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="item-post wow animate__animated animate__fadeIn">
                              <div className="image-post">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/homepage1/img-post4.jpg"
                                    alt="Genz"
                                  />
                                </Link>
                              </div>
                              <div className="info-post border-gray-800">
                                <Link href="/single-sidebar">
                                  <h6 className="color-white">
                                    Your voice, your mind, your story, your
                                    vision
                                  </h6>
                                </Link>
                                <span className="color-gray-700">
                                  15 mins read
                                </span>
                                <ul className="d-inline-block">
                                  <li className="color-gray-700">
                                    15 April 2022
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="item-post wow animate__animated animate__fadeIn">
                              <div className="image-post">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/homepage1/img-post4.jpg"
                                    alt="Genz"
                                  />
                                </Link>
                              </div>
                              <div className="info-post border-gray-800">
                                <Link href="/single-sidebar">
                                  <h6 className="color-white">
                                    Your voice, your mind, your story, your
                                    vision
                                  </h6>
                                </Link>
                                <span className="color-gray-700">
                                  15 mins read
                                </span>
                                <ul className="d-inline-block">
                                  <li className="color-gray-700">
                                    15 April 2022
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                          <h5 className="line-bottom">Last Comment</h5>
                        </div>
                        <div className="content-sidebar">
                          <div className="list-comments">
                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                              <p className="color-gray-500 mb-20">
                                “ Gosh jaguar ostrich quail one excited dear
                                hello and bound and the and bland moral misheard
                                roadrunner “
                              </p>
                              <div className="box-author-small">
                                <img
                                  src="assets/imgs/page/homepage1/author6.png"
                                  alt="Genz"
                                />
                                <div className="author-info">
                                  <span className="d-block color-gray-700 text-sm">
                                    Jane Cooper
                                  </span>
                                  <span className="color-gray-700 text-xs">
                                    15 April 2022
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                              <p className="color-gray-500 mb-20">
                                “ Gosh jaguar ostrich quail one excited dear
                                hello and bound and the and bland moral misheard
                                roadrunner “
                              </p>
                              <div className="box-author-small">
                                <img
                                  src="assets/imgs/page/homepage1/author7.png"
                                  alt="Genz"
                                />
                                <div className="author-info">
                                  <span className="d-block color-gray-700 text-sm">
                                    Katen Doe
                                  </span>
                                  <span className="color-gray-700 text-xs">
                                    15 April 2022
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                              <p className="color-gray-500 mb-20">
                                “ Gosh jaguar ostrich quail one excited dear
                                hello and bound and the and bland moral misheard
                                roadrunner “
                              </p>
                              <div className="box-author-small">
                                <img
                                  src="assets/imgs/page/homepage1/author8.png"
                                  alt="Genz"
                                />
                                <div className="author-info">
                                  <span className="d-block color-gray-700 text-sm">
                                    Barbara Cartland
                                  </span>
                                  <span className="color-gray-700 text-xs">
                                    15 April 2022
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar">
                          <Link href="/">
                            <img
                              src="assets/imgs/template/logo.svg"
                              alt="Genz"
                            />
                          </Link>
                          <h6 className="color-gray-700">
                            Follow us on instagram
                          </h6>
                        </div>
                        <div className="content-sidebar">
                          <div className="row mt-30 mb-10">
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery2.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery3.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery4.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery5.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery6.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery7.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery8.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                              <Link href="#">
                                <img
                                  className="bdrd-8"
                                  src="assets/imgs/page/homepage1/gallery9.png"
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
