import React from "react";

const Navbar = () => {
    return (
        <>
            <header className="header">
                {/*start navbar*/}
                <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img
                                src="img/logo-white.png"
                                alt="logo"
                                className="img-fluid"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="ti-menu" />
                        </button>
                        <div
                            className="collapse navbar-collapse h-auto"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto menu">
                                <li>
                                    <a href="#" className="dropdown-toggle">
                                        {" "}
                                        Home
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html">
                                                Home Page 01
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">
                                                Home Page 02
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-3.html">
                                                Home Page 03
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-4.html">
                                                Home Page 04
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-5.html">
                                                Home Page 05
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-6.html">
                                                Home Page 06
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-7.html">
                                                Home Page 07
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-8.html">
                                                Home Page 08
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-9.html">
                                                Home Page 09
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-10.html">
                                                Home Page 10
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-11.html">
                                                Home Page 11
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-12.html">
                                                Home Page 12{" "}
                                                <span className="badge badge-danger">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-13.html">
                                                Home Page 13{" "}
                                                <span className="badge badge-danger">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#about" className="page-scroll">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="page-scroll">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-toggle">
                                        Pages
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a
                                                href="#"
                                                className="dropdown-toggle-inner"
                                            >
                                                Login &amp; Sign Up
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="login.html">
                                                        Login Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sign-up.html">
                                                        Signup Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="password-reset.html">
                                                        Reset Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="dropdown-toggle-inner"
                                            >
                                                Utilities
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="faq.html">
                                                        FAQ Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="404.html">
                                                        404 Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="coming-soon.html">
                                                        Coming Soon
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="thank-you.html">
                                                        Thank You Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="download.html">
                                                        Download Page{" "}
                                                        <span className="badge accent-bg text-white">
                                                            New
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="review.html">
                                                        Review Page{" "}
                                                        <span className="badge accent-bg text-white">
                                                            New
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="dropdown-toggle-inner"
                                            >
                                                Team
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="team.html">
                                                        Our Team Members
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team-single.html">
                                                        Team Member Profile
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="dropdown-toggle-inner"
                                            >
                                                Our Blog
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-default.html">
                                                        Blog Grid
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-no-sidebar.html">
                                                        Blog No Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-left-sidebar.html">
                                                        Blog Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-right-sidebar.html">
                                                        Blog Right Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-single-left-sidebar.html">
                                                        Details Left Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-single-right-sidebar.html">
                                                        Details Right Sidebar
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about-us.html">
                                                About Us{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="sale-invoice.html">
                                                Sale Invoice{" "}
                                                <span className="badge badge-danger">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        href="#screenshots"
                                        className="page-scroll"
                                    >
                                        Screenshots
                                    </a>
                                </li>
                                <li>
                                    <a href="#process" className="page-scroll">
                                        Process
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="page-scroll">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="page-scroll">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
