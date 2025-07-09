import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { data } from './data';
function BenitsConpany() {
  const [tabIndex, setTabIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const text = data[tabIndex]?.subTitle[subIndex]?.description;
  const handleItemClick = (index) => {
    setActiveIndex(index);
    setTabIndex(index);
  };

  const handleSubItemClick = (index) => {
    setSubIndex(index);
    setActiveSubIndex(index);
  };

  const location = useLocation();
 
 useEffect(() => {
  const currentPath = location.pathname.toLowerCase().replace('/', '');
  const index = data.findIndex(item => item.slug === currentPath);

  if (index !== -1) {
    setTabIndex(index);
    setActiveIndex(index);
  }
}, [location.pathname]);



  // Function to split the text into three portions with specific word limits
  const divideText = (text) => {
    const words = text.split(' ');
    const firstPortion = words.slice(0, 40).join(' ');
    const secondPortion = words.slice(40, 75).join(' ');
    const lastPortion = words.slice(75).join(' ');

    return { firstPortion, secondPortion, lastPortion };
  };

  const { firstPortion, secondPortion, lastPortion } = divideText(text);

  return (
    <div className="container">
      <div className="section-title text-center">
        <p className="section-title__text">Company Benefits</p>
        <h2 className="header ">We Provide Best Information Security <br /> Service and Solution For 14Md. Shamim Al Mamun Years</h2>

      </div>

      <div className="uk-section uk-section-default text-center">
        <div className="uk-container">
          <div style={{ display: "flex", justifyContent: "space-between" }} className="row col-xs-6 uk-margin uk-grid-match uk-grid-collapse uk-child-width-1-4@l uk-text-center" uk-grid>
            {
              data.map((item, index) => (

                <div className=" col-lg-2 col-md-3 col-sm-6 borderReidus uk-visible-toggle  mt-3" tabindex="-1">
                  <a onClick={() => handleItemClick(index)} href='#javascript20void(0)' className={`${activeIndex === index ? 'activeTab' : ''}`}>
                    <div style={{ height: "220px" }} className={`borderReidus uk-margin uk-card uk-card-default uk-card-hover ${activeIndex === index ? 'hoverTop' : ''}`}>
                      <div className="uk-card-body">
                        <div className="uk-flex uk-flex-center">
                          <span className={`${activeIndex === index ? 'activeTab' : 'uk-icon default'}`}><i className={`${item?.logo}`}></i></span>
                          <span className="uk-icon hover"><i className={`${item?.logo}`}></i></span>
                        </div>
                        <h5 className="uk-card-title uk-margin mt-5">{item?.title}</h5>
                        <h6>...............</h6>
                      </div>
                    </div></a>
                </div>


              ))
            }
          </div>




        </div>
      </div>

      <section className="container mt-5">
        <h1 className="text-center">{data[tabIndex]?.title}</h1>
        <p className='textJustify'>{data[tabIndex]?.description}</p>

        <div className="row mt-4">
          <div className="col-md-4 ">

            {
              data[tabIndex]?.subTitle?.map((item, index) => (
                <div className={`${activeSubIndex === index ? 'servicesItemActive servicesItem' : 'servicesItem'}`}>
                  <a
                    className=" focus"
                    href="#javascript void(0)"
                    onClick={() => handleSubItemClick(index)}
                  >
                    {item?.title}
                  </a>
                </div>


              ))
            }

          </div>

          <div className="col-md-8">
            <div>
              <h3 className="text-center textJustify">{data[tabIndex]?.subTitle[subIndex]?.title}</h3>

              <div className="row textJustify">
                <span className='text-dark textJustify'>
                  {firstPortion}
                </span>
                <div className="col-md-4 textJustify">

                  <span className='text-dark w-100 textJustify'>
                    {secondPortion}
                  </span>

                </div>
                <div className="col-md-8">
                  <img width="100%" src={data[tabIndex]?.subTitle[subIndex]?.image} alt="" />
                </div>
                <span className='text-dark textJustify'>
                  {lastPortion}  <a className='text-warning' href={`${data[tabIndex]?.subTitle[subIndex]?.url}`} > More Information...</a>
                </span>
              </div>



              <div>

              </div>

            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default BenitsConpany