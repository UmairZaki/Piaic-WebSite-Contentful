import React from "react"
import Layout from "../components/layout"
import IOT from "../components/IOT.module.scss"


const Piaic = ({ data }) => {
    const {courseName,courseIntro,heading2,heading3,text,quarters,progStructure} = data.allContentfulCourse.edges[2].node;
    
    return (
    <Layout>
    <div className = {IOT.heading}>
<h1>{courseName}</h1>
    {/* <h1>AI Specialist</h1>  */}
<p>{courseIntro.courseIntro}</p>
    {/* <h2>THINGS AND AI</h2> */}
    </div>


    <div className = {IOT.page}>
<h1>{heading2}e</h1>
<p>{text}</p>
    </div>


    <div className= {IOT.flex}>
    <div className= {IOT.box1}>
    <h1>Quarter 1</h1>
    <p>{quarters._1}</p>
    </div>
    <div className= {IOT.box2}>
    <h1>Quarter 2</h1>
    <p>{quarters._2}</p>
    </div>
    <div className= {IOT.box3}>
    <h1>Quarter 3</h1>
    <p>{quarters._3}</p>
    </div>
    <div className= {IOT.box4}>
    <h1>Quarter 4</h1>
    <p>{quarters._4}</p>
    </div>
    </div>
    <div className= {IOT.flex2}>
    <div className= {IOT.box5}>
    <h1>Quarter 5</h1>
    <p>{quarters._5}</p>
    </div>
    <div className= {IOT.box6}>
    <h1>Quarter 6</h1>
    <p>{quarters._6}</p>
    </div>
    </div>


    <div className= {IOT.line}><p></p></div>


<div className= {IOT.h1}><p>{heading3}</p></div>

    
    <div className = {IOT.parent}>
    <div className= {IOT.parent1}>
    <div className= {IOT.child}>
    <h1>{progStructure["_1"][0]}</h1>
    <p>{progStructure["_1"][1]}</p>
    </div>
    <div className= {IOT.child}>
    <h1>{progStructure["_3"][0]}</h1>
    <p>{progStructure["_3"][1]}</p>
    </div>
    <div className= {IOT.child}>
    <h1>{progStructure["_5"][0]}</h1>
    <p>{progStructure["_5"][1]}</p>
    </div>
    <div className= {IOT.child5}>
    <h1>{progStructure["_7"][0]}</h1>
    <p>{progStructure["_7"][1]}</p>
    </div>
    <div className= {IOT.child}>
    <h1>{progStructure["_9"][0]}</h1>
    <p>{progStructure["_9"][1]}</p>
    </div>
    <div className= {IOT.child5}>
    <h1>{progStructure["_11"][0]}</h1>
    <p>{progStructure["_11"][1]}</p>
    </div>
    <div className= {IOT.child}>
    <h1>{progStructure["_13"][0]}</h1>
    <p>{progStructure["_13"][1]}</p>
    </div>
    <div className= {IOT.child5}>
    <h1>{progStructure["_15"][0]}</h1>
    <p>{progStructure["_15"][1]}</p>
    </div>
    </div>
    

    <div className={IOT.parent3}>
    <div className={IOT.circle_container}>
	<div className={IOT.circle_main1}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text}>1A</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine1}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main2}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text}>1B</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine2}></div>
    
    <div className={IOT.circle_container}>
	<div className={IOT.circle_main2}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text}>1C</div>
	</div>
	</div>
    </div>
    
    <div className= {IOT.verticalLine3}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main2}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>1D</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine2}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main2}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>1E</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine3}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main2}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>1F</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine4}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main2}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>1G</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine7}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main3}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>2</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine2}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main4}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>3A</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine3}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main4}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>3B</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine4}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main4}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>3C</div>
	</div>
	</div>
    </div>

    <div className= {IOT.verticalLine7}></div>

    <div className={IOT.circle_container}>
	<div className={IOT.circle_main4}>
	<div className={IOT.circle_text_container}>
	<div className = {IOT.circle_text2}>3D</div>
	</div>
    </div>
    </div>

    <div className= {IOT.verticalLine4}></div>

    <div className={IOT.circle_container}>
    <div className={IOT.circle_main4}>
    <div className={IOT.circle_text_container}>
    <div className = {IOT.circle_text2}>3E</div>
    </div>
    </div>
    </div>

    <div className= {IOT.verticalLine3}></div>

    <div className={IOT.circle_container}>
    <div className={IOT.circle_main4}>
    <div className={IOT.circle_text_container}>
    <div className = {IOT.circle_text2}>3G</div>
    </div>
	</div>
    </div>

    <div className= {IOT.verticalLine2}></div>

    <div className={IOT.circle_container}>
    <div className={IOT.circle_main5}>
    <div className={IOT.circle_text_container}>
    <div className = {IOT.circle_text2}>4</div>
    </div>
	</div>
    </div>

    <div className= {IOT.verticalLine7}></div>

    <div className={IOT.circle_container}>
    <div className={IOT.circle_main6}>
    <div className={IOT.circle_text_container}>
    <div className = {IOT.circle_text2}>5</div>
    </div>
	</div>
    </div>

     <div className= {IOT.verticalLine8}></div>

    <div className={IOT.circle_container}>
    <div className={IOT.circle_main7}>
    <div className={IOT.circle_text_container}>
    <div className = {IOT.circle_text2}>6</div>
    </div>
	</div>
    </div>


    </div>


    <div className= {IOT.parent2}>
    <div className= {IOT.child3}>
    <h1>{progStructure["_2"][0]}</h1>
    <p>{progStructure["_2"][1]}</p>
    </div>
    <div className= {IOT.child6}>
    <h1>{progStructure["_4"][0]}</h1>
    <p>{progStructure["_4"][1]}</p>
    </div>
    <div className= {IOT.child6}>
    <h1>{progStructure["_6"][0]}</h1>
    <p>{progStructure["_6"][1]}</p>
    </div>
    <div className= {IOT.child6}>
    <h1>{progStructure["_8"][0]}</h1>
    <p>{progStructure["_8"][1]}</p>
    </div>
    <div className= {IOT.child4}>
    <h1>{progStructure["_10"][0]}</h1>
    <p>{progStructure["_10"][1]}</p>
    </div>
    <div className= {IOT.child6}>
    <h1>{progStructure["_12"][0]}</h1>
    <p>{progStructure["_12"][1]}</p>
    </div>
    <div className= {IOT.child4}>
    <h1>{progStructure["_14"][0]}</h1>
    <p>{progStructure["_14"][1]}</p>
    </div>
    <div className= {IOT.child6}>
    <h1>{progStructure["_16"][0]}</h1>
    <p>{progStructure["_16"][1]}</p>
    </div>
    </div>
    </div>
    
    
</Layout>
);
};

export default Piaic;
export const pageQuery = graphql`
query iotQuery {
    allContentfulCourse {
        edges {
          node {
            courseName
            courseIntro {
              courseIntro
            }
            heading2
            text
            quarters {
              _1
              _2
              _3
              _4
              _5
              _6
            }
            heading3
            progStructure {
              _1
              _2
              _3
              _4
              _5
              _6
              _7
              _8
              _9
              _10
              _11
              _12
              _13
              _14
              _15
              _16
            }
          }
        }
      }
    }    
`;

