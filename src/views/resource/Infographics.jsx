import React, { useState } from "react";
import "./infographics.css";

function Infographics() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All Categories",
    "Password Security",
    "Phishing Prevention",
    "Data Protection",
    "Cyber Threats",
    "Best Practices",
  ];

  const infographicsData = [
    {
      id: 1,
      title: "Strong Password Best Practices",
      category: "Password Security",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Learn how to create unbreakable passwords and implement multi-factor authentication for maximum security.",
      size: "2.4 MB",
      badgeColor: "primary",
    },
    {
      id: 2,
      title: "Spot & Stop Phishing Attacks",
      category: "Phishing Prevention",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Identify common phishing tactics and learn how to protect yourself from email scams and fraudulent websites.",
      size: "3.1 MB",
      badgeColor: "warning",
    },
    {
      id: 3,
      title: "Personal Data Protection Guide",
      category: "Data Protection",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Essential strategies for safeguarding your personal information and maintaining privacy in the digital age.",
      size: "2.8 MB",
      badgeColor: "success",
    },
    {
      id: 4,
      title: "Social Engineering Awareness",
      category: "Cyber Threats",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Understand manipulation tactics used by cybercriminals and learn how to recognize social engineering attacks.",
      size: "2.6 MB",
      badgeColor: "danger",
    },
    {
      id: 5,
      title: "Secure Remote Work Guide",
      category: "Best Practices",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Best practices for maintaining cybersecurity while working from home or any remote location.",
      size: "3.5 MB",
      badgeColor: "info",
    },
    {
      id: 6,
      title: "2024 Cyber Threat Landscape",
      category: "Cyber Threats",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Comprehensive overview of current cybersecurity threats, statistics, and emerging attack vectors.",
      size: "4.2 MB",
      badgeColor: "dark",
    },
  ];

  const filteredInfographics = infographicsData.filter((item) => {
    const matchesCategory =
      activeCategory === "All Categories" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleDownload = (infographic) => {
    // Simulate download - in real app, this would trigger actual download
    alert(`Downloading: ${infographic.title}`);
  };

  const handlePreview = (infographic) => {
    // Simulate preview - in real app, this would open a modal or new window
    alert(`Previewing: ${infographic.title}`);
  };

  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Info Graphics</li>
          </ul>
          <h2 className="page-header__title">Info Graphics</h2>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-4 fw-bold text-primary mb-4">
                Cybersecurity Infographics
              </h2>
              <p className="lead text-dark">
                Explore our comprehensive collection of cybersecurity
                infographics designed to simplify complex security concepts.
                These visual resources provide actionable insights, statistics,
                and best practices to help individuals and organizations stay
                protected in today's digital landscape.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="row mb-4">
            <div className="col-lg-6 mx-auto">
              <div className="input-group input-group-lg">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search infographics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setSearchTerm("")}
                    type="button"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Categories Navigation */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`btn btn-outline-primary ${activeCategory === category ? "active" : ""}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Infographics Grid */}
          <div className="row g-4">
            {filteredInfographics.map((infographic) => (
              <div key={infographic.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 infographic-card">
                  <div className="card-img-top position-relative overflow-hidden">
                    <img
                      src={infographic.image}
                      className="img-fluid w-100"
                      alt={`${infographic.title} Infographic`}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center opacity-0 infographic-overlay">
                      <button
                        className="btn btn-light btn-lg"
                        onClick={() => handleDownload(infographic)}
                      >
                        <i className="fas fa-download me-2"></i>Download
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className={`badge bg-${infographic.badgeColor} mb-2`}>
                      {infographic.category}
                    </span>
                    <h5 className="card-title">{infographic.title}</h5>
                    <p className="card-text text-muted">
                      {infographic.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        PNG • {infographic.size}
                      </small>
                      <div>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handlePreview(infographic)}
                        >
                          Preview
                        </button>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => handleDownload(infographic)}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Show message when no infographics match filter */}
            {filteredInfographics.length === 0 && (
              <div className="col-12 text-center py-5">
                <div className="text-muted">
                  <i className="fas fa-search fa-3x mb-3"></i>
                  <h4>No infographics found</h4>
                  <p>
                    Try selecting a different category or check back later for
                    new content.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Load More Button */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-lg px-5">
                Load More Infographics
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 text-primary fw-bold">
                {infographicsData.length}+
              </div>
              <p className="text-muted">Infographics Available</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 text-primary fw-bold">10K+</div>
              <p className="text-muted">Downloads This Month</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 text-primary fw-bold">
                {categories.length - 1}
              </div>
              <p className="text-muted">Categories</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 text-primary fw-bold">Weekly</div>
              <p className="text-muted">New Releases</p>
            </div>
          </div>

          {/* Active Filter Display */}
          {(activeCategory !== "All Categories" || searchTerm) && (
            <div className="row mt-4">
              <div className="col-12 text-center">
                <div className="alert alert-info d-inline-block">
                  <i className="fas fa-filter me-2"></i>
                  Showing {filteredInfographics.length} result
                  {filteredInfographics.length !== 1 ? "s" : ""}
                  {activeCategory !== "All Categories" && (
                    <span>
                      {" "}
                      in <strong>{activeCategory}</strong>
                    </span>
                  )}
                  {searchTerm && (
                    <span>
                      {" "}
                      for "<strong>{searchTerm}</strong>"
                    </span>
                  )}
                  <button
                    className="btn btn-sm btn-outline-primary ms-2"
                    onClick={() => {
                      setActiveCategory("All Categories");
                      setSearchTerm("");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Featured Topics Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h3 className="display-5 fw-bold text-primary">
                Featured Security Topics
              </h3>
              <p className="lead">
                Stay informed about the latest cybersecurity trends and threats
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-shield-alt fa-2x"></i>
                </div>
                <h5>Zero Trust Security</h5>
                <p className="text-muted">
                  Learn about the zero trust security model and how to implement
                  it in your organization.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div
                  className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-robot fa-2x"></i>
                </div>
                <h5>AI & Cybersecurity</h5>
                <p className="text-muted">
                  Explore how artificial intelligence is transforming
                  cybersecurity defense and attack strategies.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div
                  className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fas fa-cloud fa-2x"></i>
                </div>
                <h5>Cloud Security</h5>
                <p className="text-muted">
                  Best practices for securing cloud infrastructure and
                  protecting data in cloud environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Subscription Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="display-6 fw-bold mb-4">
                Stay Updated with Latest Security Resources
              </h3>
              <p className="lead mb-4">
                Subscribe to our newsletter and get the latest cybersecurity
                infographics, guides, and resources delivered directly to your
                inbox.
              </p>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="input-group input-group-lg">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      style={{ borderRadius: "50px 0 0 50px" }}
                    />
                    <button
                      className="btn btn-light text-primary fw-bold px-4"
                      type="button"
                      style={{ borderRadius: "0 50px 50px 0" }}
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <small className="text-light mt-2 d-block">
                    <i className="fas fa-lock me-1"></i>
                    We respect your privacy. Unsubscribe at any time.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Links Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h4 className="fw-bold text-primary">Related Resources</h4>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 text-center p-3">
                <i className="fas fa-book fa-2x text-primary mb-3"></i>
                <h6>Security Guides</h6>
                <p className="text-muted small">
                  Comprehensive cybersecurity guides and best practices
                </p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  View Guides
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 text-center p-3">
                <i className="fas fa-video fa-2x text-primary mb-3"></i>
                <h6>Training Videos</h6>
                <p className="text-muted small">
                  Interactive video tutorials on cybersecurity topics
                </p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  Watch Videos
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 text-center p-3">
                <i className="fas fa-newspaper fa-2x text-primary mb-3"></i>
                <h6>Security News</h6>
                <p className="text-muted small">
                  Latest cybersecurity news and threat intelligence
                </p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  Read News
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 h-100 text-center p-3">
                <i className="fas fa-tools fa-2x text-primary mb-3"></i>
                <h6>Security Tools</h6>
                <p className="text-muted small">
                  Free tools and resources for cybersecurity professionals
                </p>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  Explore Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />{" "}
    </div>
  );
}

export default Infographics;
