import Link from "next/link";
import React, { useState, useEffect } from "react";
import portfolio from "../../util/portfolio";


const PortfolioFilter = ({col, show}) => {
    // const portfolio = [
    //     {   
    //         id: "1",
    //         name: "Flyer design",
    //         category: ["all", "web", "motion"],
    //         img: "kvant.jpg",
    //         type: 'Online Store'
    //     },
    //     {
    //         id: "2",
    //         name: "Boomirang",
    //         category: ["all", "graphic", "web"],
    //         img: "boomirang.png",
    //         type: 'Website'
    //     },
    //     {
    //         id: "3",
    //         name: "Soff Study",
    //         category: ["all", "graphic", "motion "],
    //         img: "soff-study-uz.jpg",
    //         type: 'Website'
    //     },
    //     {
    //         id: "4",
    //         name: "All data",
    //         category: ["all", "motion", "mobile"],
    //         img: "all-data.jpg",
    //         type: 'Website'
    //     },
    //     {
    //         id: "5",
    //         name: "Logo design",
    //         category: ["all", "web", "graphic"],
    //         img: "img5.png",
    //         type: 'Website'
    //     },
    //     {
    //         id: "6",
    //         name: "Animal pattern",
    //         category: ["all", "mobile"],
    //         img: "img5.png",
    //         type: 'Website'
    //     }
    // ];

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);

    return (
        <>
{/* portfilo select */}
            {/* <div className="row text-center filter-nav">
                <div className="col-lg-12">
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "all" && "active"}`} active={filter === "all" ? 1 : 0} onClick={() => setFilter("all")}>All Projects</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "web" && "active"}`}
                            onClick={() => setFilter("web")}>Web Development</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "mobile" && "active"}`}
                            onClick={() => setFilter("mobile")}>Mobile App</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "motion" && "active"}`}
                            onClick={() => setFilter("motion")}>Motion</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "graphic" && "active"}`}
                            onClick={() => setFilter("graphic")}>Graphic Design</span>
                    </span>
                </div>
            </div> */}

            <div className="mt-70 mb-50">
                <div className="row">
                    {projects.map(item =>
                        item.filtered === true ?
                            <div className={`col-lg-${item.col} mb-5`} key={item.name}>
                                <div className="project"  data-category="web motion">
                                    <div className="item-content">
                                        <div className="card-style-1 hover-up mb-30" data-wow-delay=".0s">
                                            <div className={`card-image portfolio-card-${item.id} my-2`}>
                                                <Link className="link-post" href={`/blog/${item.id}`}><img src={`/assets/imgs/page/about/${item.img}`} alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h4 className="color-white ">{item.name}</h4>
                                                            <p className="color-gray-500 text-sm">{item.type}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        : null
                    )}
                </div>
            </div>
        </>
    );
};

export default PortfolioFilter;