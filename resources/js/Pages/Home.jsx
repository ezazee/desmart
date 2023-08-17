import Navbar from "@/Components/user/Navbar";
import { Link, Head } from "@inertiajs/react";

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <section
                className="ptb-100 bg-image overflow-hidden"
                image-overlay={10}
            >
                <div
                    className="hero-bottom-shape-two"
                    style={{
                        background:
                            'url("img/hero-bottom-shape-2.svg")no-repeat bottom center',
                    }}
                />
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                        <div className="col-md-12 col-lg-6">
                            <div className="hero-slider-content text-white py-5">
                                <h1 className="text-white">
                                    Best Way to Connect with Customers
                                </h1>
                                <p className="lead">
                                    Holisticly procrastinate mission-critical
                                    convergence with reliable customer service.
                                    Assertively underwhelm idea-sharing for
                                    impactful solutions.
                                </p>
                                <div className="action-btns mt-3">
                                    <a
                                        href="#"
                                        className="btn btn-brand-03 btn-rounded mr-3"
                                    >
                                        Download Now{" "}
                                        <i className="fas fa-cloud-download-alt pl-2" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=1APwq1df6Mw"
                                        className="popup-youtube btn btn-white btn-circle btn-icon"
                                    >
                                        <i className="fas fa-play" />{" "}
                                    </a>{" "}
                                    <span className="pl-2"> Watch Now</span>
                                </div>
                                <div className="hero-counter mt-4">
                                    <div className="row">
                                        <div className="col-6 col-sm-4">
                                            <div className="counter-item d-flex align-items-center py-3">
                                                <div className="single-counter-item">
                                                    <span className="h4 count-number text-white">
                                                        672,086
                                                    </span>
                                                    <h6 className="text-white mb-0">
                                                        Total Install
                                                    </h6>
                                                </div>
                                                <span className="color-6 ml-2 p-2 rounded-circle">
                                                    <i className="fas fa-arrow-up icon-sm" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4">
                                            <div className="counter-item d-flex align-items-center py-3">
                                                <div className="single-counter-item">
                                                    <span className="h4 count-number text-white">
                                                        143,870
                                                    </span>
                                                    <h6 className="text-white mb-0">
                                                        Total Download
                                                    </h6>
                                                </div>
                                                <span className="color-6 ml-2 p-2 rounded-circle">
                                                    <i className="fas fa-arrow-up icon-sm" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4">
                                            <div className="counter-item d-flex align-items-center py-3">
                                                <div className="single-counter-item">
                                                    <span className="h4 count-number text-white">
                                                        31,191
                                                    </span>
                                                    <h6 className="text-white mb-0">
                                                        Active Users
                                                    </h6>
                                                </div>
                                                <span className="color-6 ml-2 p-2 rounded-circle">
                                                    <i className="fas fa-arrow-up icon-sm" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-5">
                            <div className="img-wrap">
                                <img
                                    src="img/app-mobile-image.png"
                                    alt="app image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    {/*end of row*/}
                </div>
                {/*end of container*/}
            </section>
        </>
    );
}
