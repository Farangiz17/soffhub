import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import data from "../../util/blogData";
import PortfolioCarousel from "../../components/slider/portfolio-carousel";
import portfolio from "../../util/portfolio";

const BlogDetails = () => {
  let Router = useRouter();

  const [blogPost, setBlogPost] = useState(null);

  const { id } = Router.query;

  useEffect(() => {
    setBlogPost(portfolio.find((data) => data.id == id));
  }, [id]);

  console.log(blogPost);
  return (
    <>
      <Layout>
        {blogPost && (
          <>
            <div className="cover-home3 portfolioId">
              <div className="container">
                <div className="row">
                  <div className="col-xl-1" />
                  <div className="col-xl-12 col-lg-12">
                    <div className="pt-30  pb-20">
                      <div className="box-breadcrumbs">
                        <ul className="breadcrumb">
                          <li>
                            <Link className="home" href="/">
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <span>
                              Digital Design That Will Help You Start Your
                              Business
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-50 align-items-end">
                      <div className="col-lg-4 col-md-8">
                        {/* <h2 className="color-linear mb-30">
                          {blogPost.title}{" "}
                          Kvant.uz
                        </h2> */}
                        <div className="mb-20 d-flex flex-column justify-content-end mb-2">
                          <div className="d-flex aligin-content-center justify-content-start" >
                            <img
                              className="d-inline-block me-3"
                              src={`/assets/imgs/page/about/${blogPost.logo}`}
                              alt={`${blogPost.logo}`}
                              style={{maxWidth:'150px', width:'100%'}}
                            />
                            <span className="d-inline-block mt-20"> /  {blogPost.type}</span>
                          </div>
                          <div className="author-info mt-2">
                            {/* <h5 className="color-linear"> {blogPost.name}</h5> */}
                            {/* <span className="color-gray-700 text-sm ms-1 mr-30">
                              {blogPost.type} / 2023
                            </span> */}
                            {/* <span className="color-gray-700 text-sm">
                              3 mins to read
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-4 ">
                        <div className="bg-gray border-gray-800 d-flex justify-content-end align-content-center ">
                          {/* <h5 className="d-inline-block  px-3 color-linear wow animate__animated animate__fadeInUp">
                            <img
                              width={100}
                              src={`/assets/imgs/page/about/${blogPost.icon}`}
                              alt="logo"
                            />
                          </h5>
                          <h5 className="d-inline-block  px-3 color-linear wow animate__animated animate__fadeInUp">
                            Node.Js
                          </h5> */}
                         <Link href={`${blogPost.link}`} >
                         <h6  className="d-inline-block  color-gray-500  card-style-2 px-3 hover-up  hover-neon wow animate__animated animate__fadeInUp">
                            Go to the site
                          </h6>
                         </Link>
                        </div>
                      </div>
                      <div className="row card-style-1 portfolio-technology hover-up    hover-neon wow animate__animated animate__fadeInUp">
                       <div className="col-12 d-flex aligin-content-center">
                       <h5 className="color-white d-flex align-content-center justify-content-center mt-2 py-3"> Used tools :</h5>
                        {blogPost.icons &&
                          blogPost.icons.map((item, i) => {
                            return (
                              <div
                                key={i}
                                className="mx-2 d-flex portfolio-tec-icons "
                              >
                               <Link href='#'>
                               <img
                                  className="d-inline-block mx-2 "
                                  width={90}
                                  src={`/assets/imgs/page/about/${item}`}
                                  alt="logo"
                                /> 
                               </Link>
                              </div> 
                            );
                          })}
                       </div>
                          {/* <div className={`col-${10-blogPost.icons.length*2}`}></div> */}
                      </div>
                    </div>
                    <div className="row mt-50">
                      {/* <div className="col-lg-8">
                        <div className="content-detail border-gray-800">
                          <p className="text-xl color-gray-500">
                            The fancy moon going in little artist painting.
                            Thirty days of lavender in the dreamy light inside.
                            Other perfect oh plants, for and again. I’ve honey
                            feeling. Caring dreamland projects noteworthy than
                            minimal, their it oh pretty feeling may. Include
                            pink be.
                          </p>
                          <div className="mt-20 mb-20">
                            <img
                              className="img-bdrd-16"
                              src="/assets/imgs/page/single/img.jpg"
                              alt="Genz"
                            />
                          </div>
                          <p className="text-lg color-gray-500 mb-50">
                            Tortor placerat bibendum consequat sapien, facilisi
                            facilisi pellentesque morbi. Id conse ctetur ut
                            vitae a massa a. Lacus ut bibendum sollicitudin
                            fusce sociis mi. Dictum volutpat praesent ornare
                            accumsan elit venenatis. Congue sodales nunc quis
                            ultricies odio porta. Egestas mauris placerat leo
                            phasellu s ut sit.
                          </p>
                          <h3 className="color-white mb-30">
                            Use your headings
                          </h3>
                          <p className="text-lg color-gray-500">
                            Thirty there &amp; time wear across days, make
                            inside on these you. Can young a really, roses blog
                            small of song their dreamy life pretty? Because
                            really duo living to noteworthy bloom bell.
                            Transform clean daydreaming cute twenty process
                            rooms cool. White white dreamy dramatically place
                            everything although. Place out apartment afternoon
                            whimsical kinder, little romantic joy we flowers
                            handmade. Thirty she a studio of she whimsical
                            projects, afternoon effect going an floated maybe.
                          </p>
                          <div className="bg-gray-850 box-quote">
                            <h3 className="color-gray-500">
                              Blandit consequat feugiat sed dapibus lorem diam
                              nibh venenatis sodales pulvinar augue adipiscing
                              turpis nulla sit tincidunt non lacus sit amet et
                              white dreamy dramatically place.
                            </h3>
                            <div className="d-inline-block mt-40">
                              <div className="box-author">
                                <img
                                  src="/assets/imgs/page/about/author2.png"
                                  alt="Genz"
                                />
                                <div className="author-info">
                                  <h6 className="color-gray-700">
                                    Ronald Richards
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="color-white mt-40 mb-30">
                            Smaller heading
                          </h4>
                          <div className="row">
                            <div className="col-lg-8 mb-30">
                              <p className="text-lg color-gray-500 mb-40">
                                Thirty there &amp; time wear across days, make
                                inside on these you. Can young a really, roses
                                blog small of song their dreamy life pretty?
                                Because really duo living to noteworthy bloom
                                bell. Transform clean daydreaming cute twenty
                                process rooms cool. White white dreamy
                                dramatically place everything although.
                              </p>
                              <p className="text-lg color-gray-500">
                                White white dreamy dramatically place everything
                                although. Place out apartment afternoon
                                whimsical kinder, little romantic joy we flowers
                                handmade. Thirty she a studio of she whimsical
                                projects, afternoon effect going an floated
                                maybe.
                              </p>
                            </div>
                            <div className="col-lg-4">
                              <img
                                className="img-bdrd-16 mb-30"
                                src="/assets/imgs/page/single/img2.jpg"
                                alt="Genz"
                              />
                            </div>
                          </div>
                          <p className="text-lg color-gray-500">
                            Tortor placerat bibendum consequat sapien, facilisi
                            facilisi pellentesque morbi. Id consectetur ut vitae
                            a massa a. Lacus ut bibendum sollicitudin fusce
                            sociis mi. Dictum volutpat praesent ornare accumsan
                            elit venenatis. Congue sodales nunc quis ultricies
                            odio porta. Egestas mauris placerat leo phasellus ut
                            sit.
                          </p>
                          <div className="row mt-50">
                            <div className="col-lg-6 gallery-left">
                              <img
                                className="img-bdrd-16 mb-30"
                                src="/assets/imgs/page/single/img3.jpg"
                                alt="Genz"
                              />
                            </div>
                            <div className="col-lg-6 gallery-right">
                              <img
                                className="img-bdrd-16 mb-20"
                                src="/assets/imgs/page/single/img4.jpg"
                                alt="Genz"
                              />
                              <img
                                className="img-bdrd-16"
                                src="/assets/imgs/page/single/img5.jpg"
                                alt="Genz"
                              />
                            </div>
                          </div>
                          <p className="text-center text-lg color-gray-500">
                            furniture in your house
                          </p>
                          <h3 className="color-white mt-50 mb-30">
                            Use your headings
                          </h3>
                          <p className="text-lg color-gray-500">
                            Thirty there &amp; time wear across days, make
                            inside on these you. Can young a really, roses blog
                            small of song their dreamy life pretty? Because
                            really duo living to noteworthy bloom bell.
                            Transform clean daydreaming cute twenty process
                            rooms cool. White white dreamy dramatically place
                            everything although. Place out apartment afternoon
                            whimsical kinder, little romantic joy we flowers
                            handmade. Thirty she a studio of she whimsical
                            projects, afternoon effect going an floated maybe.
                          </p>
                        </div>
                        <div className="box-tags">
                          <Link
                            className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                            href="/blog-archive"
                          >
                            #Nature
                          </Link>
                          <Link
                            className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                            href="/blog-archive"
                          >
                            #Beauty
                          </Link>
                          <Link
                            className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                            href="/blog-archive"
                          >
                            #Travel Tips
                          </Link>
                          <Link
                            className="btn btn-tags bg-gray-850 border-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            #House
                          </Link>
                        </div>
                        <div className="box-comments border-gray-800">
                          <h3 className="text-heading-2 color-gray-300">
                            Comments
                          </h3>
                          <div className="list-comments-single">
                            <div className="item-comment">
                              <div className="comment-left">
                                <div className="box-author mb-20">
                                  <img
                                    src="/assets/imgs/page/single/author.png"
                                    alt="Genz"
                                  />
                                  <div className="author-info">
                                    <h6 className="color-gray-700">
                                      Robert Fox
                                    </h6>
                                    <span className="color-gray-700 text-sm mr-30">
                                      August 25, 2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-right">
                                <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">
                                  White white dreamy drama tically place
                                  everything although. Place out apartment
                                  afternoon whimsical kinder, little romantic
                                  joy we flowers handmade.
                                </div>
                              </div>
                            </div>
                            <div className="item-comment">
                              <div className="comment-left">
                                <div className="box-author mb-20">
                                  <img
                                    src="/assets/imgs/page/single/author2.png"
                                    alt="Genz"
                                  />
                                  <div className="author-info">
                                    <h6 className="color-gray-700">
                                      Jenny Wilson
                                    </h6>
                                    <span className="color-gray-700 text-sm mr-30">
                                      August 25, 2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-right">
                                <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">
                                  White white dreamy drama tically place
                                  everything although. Place out apartment
                                  afternoon whimsical kinder, little romantic
                                  joy we flowers handmade.
                                </div>
                              </div>
                            </div>
                            <div className="item-comment item-comment-sub">
                              <div className="comment-left">
                                <div className="box-author mb-20">
                                  <img
                                    src="/assets/imgs/page/single/author3.png"
                                    alt="Genz"
                                  />
                                  <div className="author-info">
                                    <h6 className="color-gray-700">
                                      Eleanor Pena
                                    </h6>
                                    <span className="color-gray-700 text-sm mr-30">
                                      August 25, 2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-right">
                                <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">
                                  White white dreamy drama tically place
                                  everything although. Place out apartment
                                  afternoon whimsical kinder, little romantic
                                  joy we flowers handmade.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-form-comments mb-50">
                          <h4 className="text-heading-4 color-gray-300 mb-40">
                            Leave a comment
                          </h4>
                          <div className="box-forms">
                            <form action="#">
                              <textarea
                                className="form-control bg-gray-850 border-gray-800 bdrd16 color-gray-500"
                                name="comment"
                                rows={5}
                                placeholder="Write a comment"
                                defaultValue={""}
                              />
                              <div className="row mt-20">
                                <div className="col-sm-6 mb-20">
                                  <input className="cb-agree" type="checkbox" />
                                  <p className="text-sm color-gray-500 pl-25">
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                  </p>
                                </div>
                                <div className="col-sm-6 text-end">
                                  <Link className="btn btn-linear" href="#">
                                    Post Comment
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sidebar">
                          <div className="box-sidebar bg-gray-850 border-gray-800">
                            <div className="head-sidebar">
                              <h5 className="line-bottom">Categories</h5>
                            </div>
                            <div className="content-sidebar">
                              <div className="list-cats">
                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                  <div className="cat-left">
                                    <div className="image-cat">
                                      <Link href="/blog-archive">
                                        <img
                                          src="/assets/imgs/page/healthy/cat1.png"
                                          alt="Genz"
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-cat">
                                      <Link
                                        className="color-gray-500 text-xl"
                                        href="/blog-archive"
                                      >
                                        Travel Tips
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="cat-right">
                                    <Link
                                      className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                      href="/blog-archive"
                                    >
                                      36 posts
                                    </Link>
                                  </div>
                                </div>
                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                  <div className="cat-left">
                                    <div className="image-cat">
                                      <Link href="/blog-archive-2">
                                        <img
                                          src="/assets/imgs/page/healthy/cat2.png"
                                          alt="Genz"
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-cat">
                                      <Link
                                        className="color-gray-500 text-xl"
                                        href="/blog-archive-2"
                                      >
                                        Technology
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="cat-right">
                                    <Link
                                      className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                      href="/blog-archive-2"
                                    >
                                      14 posts
                                    </Link>
                                  </div>
                                </div>
                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                  <div className="cat-left">
                                    <div className="image-cat">
                                      <Link href="/blog-archive-3">
                                        <img
                                          src="/assets/imgs/page/healthy/cat3.png"
                                          alt="Genz"
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-cat">
                                      <Link
                                        className="color-gray-500 text-xl"
                                        href="/blog-archive-3"
                                      >
                                        Business
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="cat-right">
                                    <Link
                                      className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                      href="/blog-archive-3"
                                    >
                                      87 posts
                                    </Link>
                                  </div>
                                </div>
                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                  <div className="cat-left">
                                    <div className="image-cat">
                                      <Link href="/blog-archive-4">
                                        <img
                                          src="/assets/imgs/page/healthy/cat4.png"
                                          alt="Genz"
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-cat">
                                      <Link
                                        className="color-gray-500 text-xl"
                                        href="/blog-archive-4"
                                      >
                                        Food
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="cat-right">
                                    <Link
                                      className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                      href="/blog-archive-4"
                                    >
                                      125 posts
                                    </Link>
                                  </div>
                                </div>
                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                  <div className="cat-left">
                                    <div className="image-cat">
                                      <Link href="/blog-archive-5">
                                        <img
                                          src="/assets/imgs/page/healthy/cat5.png"
                                          alt="Genz"
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-cat">
                                      <Link
                                        className="color-gray-500 text-xl"
                                        href="/blog-archive-5"
                                      >
                                        Lifestyle
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="cat-right">
                                    <Link
                                      className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                      href="/blog-archive-5"
                                    >
                                      6 posts
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                        src="/assets/imgs/page/homepage1/img-post.jpg"
                                        alt="Genz"
                                      />
                                    </Link>
                                  </div>
                                  <div className="info-post border-gray-800">
                                    <Link href="/single-sidebar">
                                      <h6 className="color-white">
                                        Creating is a privilege but it’s also a
                                        gift
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
                                        src="/assets/imgs/page/homepage1/img-post2.jpg"
                                        alt="Genz"
                                      />
                                    </Link>
                                  </div>
                                  <div className="info-post border-gray-800">
                                    <Link href="/single-sidebar">
                                      <h6 className="color-white">
                                        Being unique is better than being
                                        perfect
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
                                        src="/assets/imgs/page/homepage1/img-post3.jpg"
                                        alt="Genz"
                                      />
                                    </Link>
                                  </div>
                                  <div className="info-post border-gray-800">
                                    <Link href="/single-sidebar">
                                      <h6 className="color-white">
                                        Every day, in every city and town across
                                        the country
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
                                        src="/assets/imgs/page/homepage1/img-post4.jpg"
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
                                        src="/assets/imgs/page/homepage1/img-post4.jpg"
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
                                    hello and bound and the and bland moral
                                    misheard roadrunner “
                                  </p>
                                  <div className="box-author-small">
                                    <img
                                      src="/assets/imgs/page/homepage1/author6.png"
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
                                    hello and bound and the and bland moral
                                    misheard roadrunner “
                                  </p>
                                  <div className="box-author-small">
                                    <img
                                      src="/assets/imgs/page/homepage1/author7.png"
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
                                    hello and bound and the and bland moral
                                    misheard roadrunner “
                                  </p>
                                  <div className="box-author-small">
                                    <img
                                      src="/assets/imgs/page/homepage1/author8.png"
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
                                  src="/assets/imgs/template/logo.svg"
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
                                      src="/assets/imgs/page/homepage1/gallery.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery2.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery3.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery4.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery5.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery6.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery7.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery8.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                  <Link href="#">
                                    <img
                                      className="bdrd-8"
                                      src="/assets/imgs/page/homepage1/gallery9.png"
                                      alt="Genz"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-sidebar bg-gray-850 border-gray-800">
                            <div className="head-sidebar">
                              <h5 className="line-bottom d-inline-block wow animate__animated animate__fadeIn">
                                Popular Tags
                              </h5>
                            </div>
                            <div className="content-sidebar pb-20">
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Technology
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Travel
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Interior
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Minimal
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Plant
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Nature
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Business
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Animal
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Healthy
                              </Link>
                              <Link
                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                href="/blog-archive"
                              >
                                Space
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-xl-12  card-style-1 hover-up p-3 hover-neon border-0  wow animate__animated animate__fadeInUp">
                        <img
                        className="border-radius-5"
                          src={`/assets/imgs/page/about/${blogPost.img_screen}`}
                          alt={`${blogPost.img_screen}`}
                        />
                      </div>
                      <h5 className="color-gray-500 my-5">
                        {blogPost.description}
                      </h5>
                    </div>
                    <div className="row">
                      <div className="col-12 my-70">
                        <PortfolioCarousel />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row portfilo-use-tecnology">
                    <div className="col-12">
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>
              </div> */}
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default BlogDetails;
