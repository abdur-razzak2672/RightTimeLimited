import React,{useEffect} from 'react'

function CarrerPath({career}) {
    console.log("dfdfdf=================",career)
         useEffect(() => {
            if(career){
                console.log('Fetching career pathway data...');
 

            }
 
           
            // Simulate data fetch on component mount
            // Fetch data logic here
        }, [career]); // Empty dependency array to run only on mount
    

    return (
        <div>
            <div class='clear'></div>
            <div id='con' class="container wrapper">
                <br />
                {/* <div class="pure-g">
        <div class="pure-u-1-1 buttons" style={{ margin: "0, auto", textAlign: "center" }}>
          <a href="/pathway" class="pure-button">Roles</a>
          <a href="/training" class="pure-button pure-button-primary ml-1">Skills and Certifications</a>
        </div>
      </div>
      <br /> */}

                <div class="pure-g">
                    <div class="pure-u-1-1" style={{ margin: "0, auto", textAlign: "center" }}>
                        <div class="intro">
                            <p>Select a certification, job title or skill to see how they relate to each other. <button class="pure-button" id="gotit">Got it</button></p>
                        </div>
                    </div>
                </div>

                <div s id="map-key-1" class="pure-menu pure-menu-horizontal">
                    <ul class="pure-menu-list">
                        <li class="pure-menu-item">
                            <div class="circle" style={{ backgroundColor: "#408AE1" }}></div> Entry level
                        </li>
                        <li class="pure-menu-item">
                            <div class="circle" style={{ backgroundColor: "#B871AD" }}></div> Mid-level
                        </li>
                        <li class="pure-menu-item">
                            <div class="circle" style={{ backgroundColor: "#7FE2C6" }}></div> Advanced
                        </li>
                    </ul>
                </div>
                <br />
                <div style={{ border: "2px solid #012e78", borderRadius: "10px", padding: "10px", width: "102%" }}>
                    <div style={{ fontSize: "30px" }} id="sankey"></div>
                    <div style={{ fontSize: "30px" }} class='clear'></div>

                </div>
                <br /><br />
            </div>

            <div style={{ fontSize: "30px" }} class='scrollUpWrapper'>
                <div style={{ fontSize: "30px" }} class='scrollUp'></div>
            </div>

            <div style={{ fontSize: "30px" }} class='clear'></div>



        </div>

 
    )
}

export default CarrerPath