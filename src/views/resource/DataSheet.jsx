import React, { useState } from 'react'
import Allpage from '../../components/all-page/Allpage'
import './datasheet.css'

function DataSheet() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'All Categories',
    'AI & Machine Learning',
    'Cloud Security', 
    'Data Protection',
    'Endpoint Protection',
    'Identity Protection',
    'Incident Response',
    'Managed Security',
    'Threat Intelligence',
    'Network Security',
    'Compliance & Risk',
    'Professional Services'
  ]

  const dataSheets = [
    {
      id: 1,
      title: "Right Time Falcon® Shield: Comprehensive SaaS Security",
      category: "Cloud Security",
      description: "Complete SaaS security solution protecting your cloud applications from advanced threats with AI-powered detection and response capabilities.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "4 pages",
      featured: true
    },
    {
      id: 2,
      title: "Next-Gen SIEM: Simplify Security Data Management",
      category: "Managed Security",
      description: "Revolutionary SIEM solution that simplifies security data onboarding and provides real-time threat detection with advanced analytics.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "6 pages",
      featured: true
    },
    {
      id: 3,
      title: "AI Systems Security Assessment",
      category: "AI & Machine Learning",
      description: "Comprehensive security assessment framework for AI systems, ensuring robust protection against emerging AI-specific threats.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "8 pages",
      featured: true
    },
    {
      id: 4,
      title: "Advanced Endpoint Protection Platform",
      category: "Endpoint Protection",
      description: "Next-generation endpoint protection with behavioral analysis, machine learning, and real-time threat prevention capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "5 pages",
      featured: false
    },
    {
      id: 5,
      title: "Zero Trust Identity Management",
      category: "Identity Protection",
      description: "Comprehensive identity protection solution implementing zero trust principles with advanced authentication and access controls.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "7 pages",
      featured: false
    },
    {
      id: 6,
      title: "24/7 Cyber Incident Response Services",
      category: "Incident Response",
      description: "Rapid incident response services with expert cybersecurity professionals available around the clock for immediate threat containment.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "6 pages",
      featured: false
    },
    {
      id: 7,
      title: "Data Loss Prevention & Classification",
      category: "Data Protection",
      description: "Advanced data protection solution with intelligent classification, monitoring, and prevention of sensitive data breaches.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "5 pages",
      featured: false
    },
    {
      id: 8,
      title: "Real-Time Threat Intelligence Platform",
      category: "Threat Intelligence",
      description: "Comprehensive threat intelligence platform providing real-time insights and proactive threat hunting capabilities.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "9 pages",
      featured: false
    },
    {
      id: 9,
      title: "Network Security Gateway Solutions",
      category: "Network Security",
      description: "Advanced network security gateway providing comprehensive protection against network-based attacks and intrusions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "4 pages",
      featured: false
    },
    {
      id: 10,
      title: "Compliance & Risk Management Framework",
      category: "Compliance & Risk",
      description: "Comprehensive framework for maintaining compliance with industry standards and managing cybersecurity risks effectively.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "12 pages",
      featured: false
    },
    {
      id: 11,
      title: "Professional Cybersecurity Consulting",
      category: "Professional Services",
      description: "Expert cybersecurity consulting services helping organizations build robust security strategies and implement best practices.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "6 pages",
      featured: false
    },
    {
      id: 12,
      title: "Cloud-Native Security Architecture",
      category: "Cloud Security",
      description: "Modern cloud-native security architecture designed for scalable protection of containerized and serverless applications.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "#",
      pages: "8 pages",
      featured: false
    }
  ]

  const filteredDataSheets = dataSheets.filter(sheet => {
    const matchesCategory = selectedCategory === 'All Categories' || sheet.category === selectedCategory
    const matchesSearch = sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sheet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sheet.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredDataSheets = dataSheets.filter(sheet => sheet.featured)
  
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
       <li>Data Sheets</li>
     </ul>
     <h2 className="page-header__title">Data Sheets</h2>
   </div>

   </div>

   {/* Hero Section */}
   <section className="py-5">
     <div className="container">
       <div className="row">
         <div className="col-lg-8 mx-auto ">
           <h2 className="display-4 fw-bold text-center  mb-4">Data Sheets</h2>
           <p className="lead text-dark mb-4">
             In-depth fact sheets with detailed information on Right Time Limited's comprehensive suite of 
             cybersecurity products and services. Get the technical specifications, features, and benefits 
             you need to make informed security decisions.
           </p>
           <div className="d-flex justify-content-center gap-3">
             <button className="btn btn-primary btn-lg">
               <i className="fas fa-download me-2"></i>Download All Sheets
             </button>
             <button className="btn btn-outline-primary btn-lg">
               <i className="fas fa-envelope me-2"></i>Request Custom Sheet
             </button>
           </div>
         </div>
       </div>
     </div>
   </section>

   {/* Featured Data Sheets */}
   <section className="py-5 bg-light">
     <div className="container">
       <div className="row mb-5">
         <div className="col-12 text-center">
           <h3 className="display-5 fw-bold orange mb-3">Featured Data Sheets</h3>
           <p className="lead text-muted">Our most popular and recently updated cybersecurity solution overviews</p>
         </div>
       </div>
       
       <div className="row g-4">
         {featuredDataSheets.map((sheet) => (
           <div key={sheet.id} className="col-lg-4 col-md-6">
             <div className="card h-100 border-0 shadow-sm datasheet-card featured-card">
               <div className="position-relative">
                 <img 
                   src={sheet.image} 
                   className="card-img-top" 
                   alt={sheet.title}
                   style={{ height: '200px', objectFit: 'cover' }}
                 />
                 <div className="position-absolute top-0 end-0 m-3">
                   <span className="badge bg-warning text-dark">FEATURED</span>
                 </div>
                 <div className="card-img-overlay d-flex align-items-center justify-content-center opacity-0 datasheet-overlay">
                   <button className="btn btn-light btn-lg">
                     <i className="fas fa-download me-2"></i>Download
                   </button>
                 </div>
               </div>
               <div className="card-body">
                 <div className="d-flex justify-content-between align-items-start mb-2">
                   <span className="badge bg-primary">{sheet.category}</span>
                   <small className="text-muted">{sheet.pages}</small>
                 </div>
                 <h5 className="card-title">{sheet.title}</h5>
                 <p className="card-text text-muted">{sheet.description}</p>
                 <div className="d-flex gap-2 mt-3">
                   <button className="btn btn-primary btn-sm flex-fill">
                     <i className="fas fa-download me-1"></i>Download
                   </button>
                   <button className="btn btn-outline-primary btn-sm">
                     <i className="fas fa-eye"></i>
                   </button>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>

   {/* Search and Filter Section */}
   <section className="py-5">
     <div className="container">
       <div className="row mb-4">
         <div className="col-lg-8 mx-auto">
           <div className="input-group input-group-lg">
             <span className="input-group-text bg-primary text-white">
               <i className="fas fa-search"></i>
             </span>
             <input
               type="text"
               className="form-control"
               placeholder="Search data sheets by title, category, or keywords..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             {searchTerm && (
               <button 
                 className="btn btn-outline-secondary"
                 onClick={() => setSearchTerm('')}
               >
                 <i className="fas fa-times"></i>
               </button>
             )}
           </div>
         </div>
       </div>

       {/* Category Filter */}
       <div className="row mb-5">
         <div className="col-12">
           <div className="text-center mb-3">
             <h5 className="orange">Filter by Category</h5>
           </div>
           <div className="category-filter-container">
             <div className="d-flex flex-wrap justify-content-center gap-2">
               {categories.map((category) => (
                 <button
                   key={category}
                   className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm category-btn`}
                   onClick={() => setSelectedCategory(category)}
                 >
                   {category}
                 </button>
               ))}
             </div>
           </div>
         </div>
       </div>

       {/* Results Count */}
       <div className="row mb-4">
         <div className="col-12">
           <div className="d-flex justify-content-between align-items-center">
             <h4 className="orange mb-0">
               All Data Sheets 
               <span className="badge bg-secondary ms-2">{filteredDataSheets.length}</span>
             </h4>
             <div className="d-flex gap-2">
               <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                 <option>Sort: Newest First</option>
                 <option>Sort: A-Z</option>
                 <option>Sort: Category</option>
                 <option>Sort: Most Popular</option>
               </select>
               <button className="btn btn-outline-primary btn-sm">
                 <i className="fas fa-th-large"></i>
               </button>
               <button className="btn btn-outline-primary btn-sm">
                 <i className="fas fa-list"></i>
               </button>
             </div>
           </div>
         </div>
       </div>

       {/* Data Sheets Grid */}
       <div className="row g-4">
         {filteredDataSheets.map((sheet) => (
           <div key={sheet.id} className="col-lg-4 col-md-6">
             <div className="card h-100 border-0 shadow-sm datasheet-card">
               <div className="position-relative">
                 <img 
                   src={sheet.image} 
                   className="card-img-top" 
                   alt={sheet.title}
                   style={{ height: '180px', objectFit: 'cover' }}
                 />
                 {sheet.featured && (
                   <div className="position-absolute top-0 end-0 m-2">
                     <span className="badge bg-warning text-dark">FEATURED</span>
                   </div>
                 )}
                 <div className="card-img-overlay d-flex align-items-center justify-content-center opacity-0 datasheet-overlay">
                   <button className="btn btn-light">
                     <i className="fas fa-download me-2"></i>Download
                   </button>
                 </div>
               </div>
               <div className="card-body">
                 <div className="d-flex justify-content-between align-items-start mb-2">
                   <span className="badge bg-primary text-truncate" style={{ maxWidth: '70%' }}>
                     {sheet.category}
                   </span>
                   <small className="text-muted">{sheet.pages}</small>
                 </div>
                 <h6 className="card-title">{sheet.title}</h6>
                 <p className="card-text text-muted small">{sheet.description}</p>
                 <div className="d-flex gap-2 mt-auto">
                   <button className="btn btn-primary btn-sm flex-fill">
                     <i className="fas fa-download me-1"></i>Download
                   </button>
                   <button className="btn btn-outline-primary btn-sm">
                     <i className="fas fa-share-alt"></i>
                   </button>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>

       {/* No Results */}
       {filteredDataSheets.length === 0 && (
         <div className="row">
           <div className="col-12 text-center py-5">
             <i className="fas fa-search fa-3x text-muted mb-3"></i>
             <h4 className="text-muted mb-3">No Data Sheets Found</h4>
             <p className="text-muted mb-4">
               No data sheets match your current search criteria. Try adjusting your filters or search terms.
             </p>
             <button 
               className="btn btn-primary"
               onClick={() => {
                 setSelectedCategory('All Categories')
                 setSearchTerm('')
               }}
             >
               Clear All Filters
             </button>
           </div>
         </div>
       )}

       {/* Load More */}
       {filteredDataSheets.length > 0 && (
         <div className="row mt-5">
           <div className="col-12 text-center">
             <button className="btn btn-outline-primary btn-lg">
               Load More Data Sheets
               <i className="fas fa-chevron-down ms-2"></i>
             </button>
           </div>
         </div>
       )}
     </div>
   </section>

   {/* Call to Action */}
   <section className="py-5 bg-primary text-white">
     <div className="container">
       <div className="row">
         <div className="col-lg-8 mx-auto text-center">
           <h3 className="display-6 fw-bold mb-4">Need a Custom Solution?</h3>
           <p className="lead mb-4">
             Can't find the exact information you're looking for? Our cybersecurity experts can create 
             customized data sheets tailored to your specific requirements and use cases.
           </p>
           <div className="d-flex flex-wrap justify-content-center gap-3">
             <button className="btn btn-light btn-lg orange">
               <i className="fas fa-phone me-2"></i>Schedule Consultation
             </button>
             <button className="btn btn-outline-light btn-lg">
               <i className="fas fa-envelope me-2"></i>Request Custom Sheet
             </button>
           </div>
         </div>
       </div>
     </div>
   </section>

   {/* Resource Center */}
   <section className="py-5 bg-light">
     <div className="container">
       <div className="row mb-5">
         <div className="col-12 text-center">
           <h3 className="display-6 fw-bold orange mb-3">Discover More at Our Resource Center</h3>
           <p className="lead text-muted">Explore additional cybersecurity resources and tools</p>
         </div>
       </div>
       
       <div className="row g-4">
         <div className="col-lg-3 col-md-6">
           <div className="card border-0 h-100 text-center resource-card">
             <div className="card-body">
               <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                    style={{ width: '60px', height: '60px' }}>
                 <i className="fas fa-case-medical fa-lg"></i>
               </div>
               <h5 className="card-title">Case Studies</h5>
               <p className="card-text text-muted">Real-world success stories and implementation examples</p>
               <a href="#" className="btn btn-outline-primary btn-sm">View Case Studies</a>
             </div>
           </div>
         </div>
         
         <div className="col-lg-3 col-md-6">
           <div className="card border-0 h-100 text-center resource-card">
             <div className="card-body">
               <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                    style={{ width: '60px', height: '60px' }}>
                 <i className="fas fa-tools fa-lg"></i>
               </div>
               <h5 className="card-title">Security Tools</h5>
               <p className="card-text text-muted">Free cybersecurity tools and utilities for professionals</p>
               <a href="#" className="btn btn-outline-success btn-sm">Explore Tools</a>
             </div>
           </div>
         </div>
         
         <div className="col-lg-3 col-md-6">
           <div className="card border-0 h-100 text-center resource-card">
             <div className="card-body">
               <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                    style={{ width: '60px', height: '60px' }}>
                 <i className="fas fa-book fa-lg"></i>
               </div>
               <h5 className="card-title">White Papers</h5>
               <p className="card-text text-muted">In-depth research and analysis on cybersecurity topics</p>
               <a href="#" className="btn btn-outline-warning btn-sm">Read Papers</a>
             </div>
           </div>
         </div>
         
         <div className="col-lg-3 col-md-6">
           <div className="card border-0 h-100 text-center resource-card">
             <div className="card-body">
               <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                    style={{ width: '60px', height: '60px' }}>
                 <i className="fas fa-video fa-lg"></i>
               </div>
               <h5 className="card-title">Webinars</h5>
               <p className="card-text text-muted">Live and recorded cybersecurity training sessions</p>
               <a href="#" className="btn btn-outline-info btn-sm">Watch Now</a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   



     
   <br/><br/><br/><br/><br/> </div>
 )
}

export default DataSheet