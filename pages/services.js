import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import data from "../util/blogData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soff Hub | Services</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-12 col-lg-12">
                <div className="row align-items-end mt-50">
                  <div className="col-lg-7 mb-20">
                    <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">
                      IS THERE A PROBLEM?
                    </p>
                    <h4 className="wow animate__animated animate__fadeInUp mt-20 color-gray-50  color-linear">
                      What solution do you want?
                    </h4>
                  </div>
                </div>
                <div className="mt-50 mb-50">
                  <div className="row mt-50 mb-10">
                    {data.map((item, i) => (
                      <div className="col-lg-6" key={i}>
                        <div
                          className="services-card card-style-2 d-flex justify-content-between px-3 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0s"
                        >
                          <div className="service-cart__content">
                            <h3 className="color-white mb-15 d-block">
                              {item.title}
                            </h3>
                            <p className="text-base color-gray-700">
                              {item.description}
                            </p>
                          </div>
                          <div className="ms-1">
                            <div className="item-icon bg-gray-950 " >
                            <i class={`${item.iconClass}`}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-70" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
