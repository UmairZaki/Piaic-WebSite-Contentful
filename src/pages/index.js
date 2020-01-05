import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import indexS from '../components/index.module.scss'
//import pic1 from "../components/president.png"


const Piaic = ({ data }) => {
  
  const {president,title,title2,intro,applications,heading2,courses,heading3,list,heading4,vidtextfields,imageTags,allImages,imageText1,imageText2,imageText3,heading5,heading6,refrences} = data.contentfulHome;
  
  return (
<Layout >

    <div className= {indexS.body} >
      
    <div className = {indexS.title}>
    <div className = {indexS.flex}>
    <div><img width= "386px" height= "auto" src={president["file"]["url"]}/></div>
    <div className={indexS.titleout}>
  <h1>{title}</h1>
  <h2>{title2}</h2>
  
  <p>{intro["intro"]}</p>
  </div>
    </div>
    </div>
    <div className= {indexS.button_padding}>
    <div>
    <a href="https://portal.piaic.org/signup" target="_blank"><p className= {indexS.button}> Apply </p></a>
    </div> 
    <div className= {indexS.line}> </div>
    <ul >
        <li className= {indexS.font_li}>
  {applications}k+ 
        </li>
        <li className= {indexS.font_li2}>
        Applications Recieved
        </li>
    </ul>
    </div>
    <div className= {indexS.heading}>
  <p>{heading2}</p>
    </div>
    </div>
    

    <div className= {indexS.parent1}>
    
    <div className={indexS.parent2}>
    
      <div className= {indexS.child1}>
      <Link to="/artificial_intelligence"><button><p>{courses["name1"]}</p></button></Link>
      <h1>{courses["description1"]}</h1>
      </div>    
      <div className= {indexS.child2}>
      <Link to="/cloud_native"><button><p>{courses["name2"]}</p></button></Link>
      <h1>{courses["description2"]}</h1>
      </div>
      <div className= {indexS.child3}>
      <Link to="/blockchain"><button><p>{courses["name3"]}</p></button></Link>
      <h1>{courses["description3"]}</h1>
      </div>
      <div className= {indexS.child4}>
      <Link to="/internet_of_things"><button><p>{courses["name4"]}</p></button></Link>
      <h1>{courses["description4"]}</h1>
      </div>
      </div>
      </div>
      

      <div >
        <p className= {indexS.line2}></p>
      </div>
    
    <div className= {indexS.heading2}>
  <p>{heading3}</p>
     </div >
  
    <div className = {indexS.parent3}>
    <div className= {indexS.box}>
     <p>{list[0]}</p>
     </div>    
     <div className= {indexS.box}>
     <p>{list[1]}</p>
     </div>
     <div className= {indexS.box}>
     <p>{list[2]}</p>
     </div>
     <div className= {indexS.box}>
     <p>{list[3]}</p>
     </div>
     <div className= {indexS.box}>
     <p>{list[4]}</p>
     </div>
     <div className= {indexS.box}>
     <p>{list[5]}</p>
     </div>
    </div>
    

    <div className={indexS.parent4}>
    <div className={indexS.heading3}>
  <h3 className = {indexS.vidhead}>{heading4}</h3>
      <div className= {indexS.videos}>
      <div>
      <div className={indexS.videobox}>
        <iframe frameborder="0" className={indexS.play} allow="accelerometer; autoplay; encrypted-media; gyroscope;
         picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/_rUQ301EJAo">
      </iframe>
      </div>
      <div className = {indexS.vidlistbox}>
        <div className={indexS.PresidentSaysvideolist}>
          <ul className={indexS.vidllist}>
            <li className={indexS.vidobject} >
              <div className={indexS.PresidentSaysVideoflexbox}>
              <div className={indexS.vidlistimg1} ></div>
                <div className={indexS.vidlistcontent}>
                  <h4>{vidtextfields["output"][0]["title"]}</h4>
                  <p>{vidtextfields["output"][0]["description"]}</p>
                </div>
              </div>
          </li>
          <li className={indexS.vidobject} >
          <div className={indexS.PresidentSaysVideoflexbox}>
          <div className={indexS.vidlistimg2} ></div>
          <div className={indexS.vidlistcontent}>
          <h4 class="">{vidtextfields["output"][1]["title"]}</h4>
          <p>{vidtextfields["output"][1]["description"]}</p>
          </div>
          </div>
          </li>
          <li className={indexS.vidobject} >
          <div className={indexS.PresidentSaysVideoflexbox}>          
          <div className={indexS.vidlistimg3} ></div>

          <div className={indexS.vidlistcontent}>
          <h4 class="">{vidtextfields["output"][2]["title"]}</h4>
          <p>{vidtextfields["output"][2]["description"]}</p>
          </div>
          </div>
          </li>
          <li className={indexS.vidobject} >
          <div className={indexS.PresidentSaysVideoflexbox}>           
          <div className={indexS.vidlistimg4} ></div>

          <div className={indexS.vidlistcontent}>
          <h4 class="">{vidtextfields["output"][3]["title"]}</h4>
          <p>{vidtextfields["output"][3]["description"]}</p>
          </div>
          </div>
          </li>
          <li className={indexS.vidobject} >
          <div className={indexS.PresidentSaysVideoflexbox}>          
          <div className={indexS.vidlistimg5} ></div>

          <div className={indexS.vidlistcontent}>
          <h4 class="">{vidtextfields["output"][4]["title"]}</h4>
          <p>{vidtextfields["output"][4]["description"]}</p>
          </div>
          </div>
          </li>
          <li className={indexS.vidobject} >
          <div className={indexS.PresidentSaysVideoflexbox}>          
          <div className={indexS.vidlistimg6} ></div>

          <div className={indexS.vidlistcontent}>
          <h4 class="">{vidtextfields["output"][5]["title"]}</h4>
          <p>{vidtextfields["output"][5]["description"]}</p>
          </div>
          </div>
          </li>
          <li className={indexS.vidobject} >
          <div className={indexS.PresidentSaysVideoflexbox}>            
          <div className={indexS.vidlistimg7} ></div>

                  <div className={indexS.vidlistcontent}>
                  <h4 class="">{vidtextfields["output"][6]["title"]}</h4>
                  <p>{vidtextfields["output"][6]["description"]}</p>
                </div>
              </div>
            </li>
            <li className={indexS.vidobject} >
            <div className={indexS.PresidentSaysVideoflexbox}>              
            <div className={indexS.vidlistimg8} ></div>

              <div className={indexS.vidlistcontent}>
                <h4 class="">{vidtextfields["output"][7]["title"]}</h4>
                <p>{vidtextfields["output"][7]["description"]}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>

  <div className={indexS.super}>
  <h1>{heading5}</h1>
  <div className={indexS.spotlight2}>
  <div className={indexS.spotlight}>
  <div className={indexS.image}>
  </div>
  <div className={indexS.text}>
  <h2>{imageTags[0]}</h2>
<p>{imageText1['imageText1']}</p>
  </div>
  </div>

  <div className={indexS.spotlight}>
  <div className={indexS.image2}>
  </div>
  <div className={indexS.text}>
<h2>{imageTags[1]}</h2>
<p>{imageText2.imageText2}</p>
  </div>
  </div>
  
  <div className={indexS.spotlight}>
  <div className={indexS.image3}>
  </div>
  <div className={indexS.text2}>
  <h2>{imageTags[2]}</h2>
  <p>{imageText3.imageText3}</p>
  </div>
  </div>
  
  </div>
  </div>

  <div className={indexS.partner}>
<h1>{heading6}</h1>
  <div className={indexS.logos}>
  <div className={indexS.items}>
  <a href="https://www.panacloud.ai/" target = "_blank" ><img src={require("../components/1.svg")} width="130" height="auto"  alt="klnaznc" /></a>
  </div>

  <div className={indexS.items}>
  <a href="https://www.psx.com.pk/" target = "_blank" ><img src={require("../components/2.png")} width="60" height="auto"  alt="klnaznc" /></a>
  </div>

  <div className={indexS.items}>
  <a href="http://www.saylaniwelfare.com/home" target = "_blank" ><img src={require("../components/3.png")} width="200" height="auto"  alt="klnaznc" /></a>
  </div>

  </div>


  </div>

  <div className= {indexS.head}>
  
  <div className= {indexS.address}>
  <h1>Navigation</h1>
  <Link  to="/"><p>Home</p></Link>
  <a href="https://portal.piaic.org/signup" target = "_blank"> <p>Apply</p></a>
  <Link to="/howItsWork"><p>How It Works</p></Link>
  <Link to="/artificial_intelligence"><p>Artificial Intelligence</p></Link>
  <Link to="/cloud_native"><p>Cloud Native and Mobile Web Computing</p></Link>
  <Link to="/blockchain"><p>Blockchain</p></Link>
  <Link to="/internet_of_things"><p>Internet of Things and AI</p></Link>
  <Link to="/about"><p>About The President</p></Link>
  <Link to="/managementComittee"><p>Management Comittee</p></Link>
  <Link to="/wit"><p>Women Inclusion in Technology (WIT)</p></Link>
  </div>

  <div className= {indexS.address2}>
  <h1>Locations</h1>
  <h1>PIAIC Headquarters</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/11.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><a href="https://www.google.com/maps/place/Presidential+Initiative+for+Artificial+Intelligence+and+Computing+(PIAIC)+Headquarters/@24.8613137,67.0711981,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33ff89c73993d:0x91c53ba630675f8!8m2!3d24.8612787!4d67.0733723"><p>Plot 245/2 M, Block 6 PECHS, Karachi, Sindh 75100, Pakistan</p></a></div>
  </div>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/10.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><p>+92-308-2220203 (WhatsApp as well)</p></div>
  </div>
  <h1>PIAIC Helpline</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/10.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><p>+92-308-2220203 (WhatsApp as well)</p></div>
  </div>
  <h1>Connect with us</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><a href= "https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg" target = "_blank"><img src={require("../components/13.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></a></div>
  <div className= {indexS.x}><a href= "https://www.facebook.com/groups/piaic/" target = "_blank"><img src={require("../components/12.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></a></div>
  </div>
  </div>


  <div className= {indexS.address3}>
  <h1>Karachi Field Office</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/11.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><a href="https://www.google.com/maps/place/Saylani+Welfare+Head+Office./@24.8827229,67.0659646,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33eebb56aaaab:0x27ab04809ef5020a!8m2!3d24.8827229!4d67.0681533" target="_blank"><p>A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan</p></a></div>
  </div>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/10.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><p>+92-311-1729526</p></div>
  </div>
  <h1>Rawalpindi Field Office</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/11.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><a href="https://www.google.com/maps/place/33%C2%B037'58.2%22N+73%C2%B004'04.2%22E/@33.6328413,73.0656368,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d33.6328413!4d73.0678255?hl=en" target="_blank"><p>4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300</p></a></div>
  </div>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/10.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><p>051-4940669 / 0336-6660215</p></div>
  </div>
  <h1>Islamabad Field Office</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/11.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><a href="https://www.google.com/maps/place/33%C2%B041'47.0%22N+73%C2%B000'43.7%22E/@33.696386,73.0099453,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d33.696386!4d73.012134" target="_blank"><p>F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory</p></a></div>
  </div>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/10.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><p>051-2223191 (WhatsApp as well)</p></div>
  </div>
  <h1>Faisalabad Field Office</h1>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/11.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><a href="https://www.google.com/maps/place/Saylani+Mass+Training+Faisalabad/@31.411708,73.0865596,17z/data=!3m1!4b1!4m5!3m4!1s0x3922681d444b32e1:0xc3887a0e53e91f7!8m2!3d31.411708!4d73.0887483" target="_blank"><p>Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area, Faisalabad, Punjab</p></a></div>
  </div>
  <div className= {indexS.add}>
  <div className= {indexS.x}><img src={require("../components/10.svg")} width="auto" height="20px" bg="rgb(36, 49, 53)" alt="klnaznc" /></div>
  <div className= {indexS.x}><p>(041) 2417281 / 0337 8659969 (WhatsApp as well)</p></div>
  </div>
  </div>
  
  </div>

</Layout>

);
};

export default Piaic;
export const pageQuery = graphql`
query MyQuery {
  contentfulHome {
    president {
      file {
        url
      }
    }
    title
    title2
    intro {
      intro
    }
    applications
    heading2
    courses {
      name1
      description1
      name2
      description2
      name3
      description3
      name4
      description4
    }
    heading3
    heading4
    vidtextfields{
      output{
        title
        description
      }
    }
    heading5
    list
    imageTags
    imageText1 {
      imageText1
    }
    imageText2 {
      imageText2
    }
    imageText3 {
      imageText3
    }
    allImages {
      file {
        url
      }
    }
    heading6
    allImages {
      
      file {
        url
      }
    }
  }
}
`;

