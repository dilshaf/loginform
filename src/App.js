import React from "react"
import Header from "./HeaderSection/Header"
import Section from "./Sectionfolder/Section"
import Footer from "./Footersection/Footer"
import Componen1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"
import Component4 from "./Component4"

// import Headerleft from "./HeaderSection/Headerleft"
// import Headerright from "./HeaderSection/Headerright"


function App(){
  return(
    <div className="appdiv">

  
  
    
    {/* <Header/>
    <Section/>
    <Footer/> */}
   
    {/* <Componen1 title="1" name="dilsha" name1="rinsha" /> */}

    {/* <Component2 name="dilsha" age="20"/> */}

    {/* <Component3
       img ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="sneakers"
       name="Cyxus"
       desc="Non-Slip Fitness Leisure Running Sneakers"
       price="$29"
       class='product'
    
      />
      <Component3
       img ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="sneakers"
       name="Cyxus"
       desc="Non-Slip Fitness Leisure Running Sneakers"
       price="$29"
    
      />
      <Component3
       img ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="sneakers"
       name="Cyxus"
       desc="Non-Slip Fitness Leisure Running Sneakers"
       price="$29"
    
      /> */}
      <div>
      <Component4
      image="https://media.discordapp.net/attachments/1103207862521561162/1126755241371635732/reusable-banners-card-1-bg-1.png?width=1378&height=370"
      
      name="THE SEASONS LATEST"
      
      desc="Get the season all latest design in a flick of your hand"
      button="show more"
      />
      </div>


   


    </div>
  )
}


export default App