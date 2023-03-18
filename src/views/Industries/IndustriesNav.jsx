import React from 'react'

function IndustriesNav() {
    return (
        <div>
            <h3 className="sidebar__title">Industries</h3>
            <ul className="sidebar__category">
                <li><a href="/bank-nabi">Bank & NBFI</a></li>
                <li><a href="/telecommunications">Telecommunications</a></li>
                <li><a href="/payment-card">Payment Card Industry</a></li>
                <li><a href="/educational-industry">Educational Institutions</a></li>
                <li><a href="/ecommerce-retail">E-Commerce & Retail Merchants</a></li>
                <li><a href="/insurance"> 	Insurance</a></li>

                <li><a href="/bpo-service"> 	IT and BPO Services</a></li>
 

                <li><a href="/health-care">Health Care</a></li>
                <li><a href="/power-sector">  Power Sector</a></li>

            </ul>
        </div>
    )
}

export default IndustriesNav