import React from "react";

function OfferRe({data}) {
  return (
    <div>
      <div>
        <div className="mb-5">
          <h5
            style={{ backgroundColor: "#12062c" }}
            className="  text-light p-2  mt-4 text-center"
          >
            PHASE IV
          </h5>
        </div>

        <div className="row   text-center col-xs-6">


          {data.map((item, index) => (
             <div key={index} className=" col-md-3 col-sm-6 rounded ">
             <div id="card-container">
               <div className="text-center rounded" id="card3">
                 <div className="front face text-center pt-3">
                   <img
                     src={item.image}
                     width="30%"
                     alt=""
                   />
                   <h5 className=" mt-3 p-2 text-dark">
                    {item.title}
                   </h5>
                 </div>
                 <div className="back face">
                   <p className="artist mt-4">
                   {item.description}
                   </p>
                 </div>
               </div>
             </div>
           </div>


          ))}
 
         
        </div>
      </div>
    </div>
  );
}

export default OfferRe;
