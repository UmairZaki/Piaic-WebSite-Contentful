import React from "react"
import Layout from "../components/layout"
import CN from "../components/CN.module.scss"



const Piaic = ({ data }) => {
  
    const {courseName,courseIntro,heading2,heading3,text,quarters,progStructure} = data.allContentfulCourse.edges[0].node;
    
    return (
    <Layout> 
    <div className = {CN.heading}>
<h1>{courseName}</h1> 
<p>{courseIntro.courseIntro}</p>
    {/* <h2>GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.</h2> */}
    </div>


    <div className = {CN.page}>
<h1>{heading2}</h1>
<p>{text}</p>
    </div>


    <div className= {CN.flex}>
    <div className= {CN.box1}>
    <h1>Quarter 1</h1>
    <p>{quarters._1}</p>
    </div>
    <div className= {CN.box2}>
    <h1>Quarter 2</h1>
    <p>{quarters._2}</p>
    </div>
    <div className= {CN.box3}>
    <h1>Quarter 3</h1>
    <p>{quarters._3}</p>
    </div>
    <div className= {CN.box4}>
    <h1>Quarter 4</h1>
    <p>{quarters._4}</p>
    </div>
    </div>


    <div className= {CN.line}><p></p></div>


<div className= {CN.h1}><p>{heading3}</p></div>

    
    <div className = {CN.parent}>
    <div className= {CN.parent1}>
    <div className= {CN.child}>
    <h1>{progStructure["_1"][0]}</h1>
    <p>{progStructure["_1"][1]}</p>
    </div>
    <div className= {CN.child}>
    <h1>{progStructure["_3"][0]}</h1>
    <p>{progStructure["_3"][1]}</p>
    </div>
    <div className= {CN.child4}>
    <h1>{progStructure["_5"][0]}</h1>
    <p>{progStructure["_5"][1]}</p>
    </div>
    <div className= {CN.child}>
    <h1>{progStructure["_7"][0]}</h1>
    <p>{progStructure["_7"][1]}</p>
    </div>
    <div className= {CN.child2}>
    <h1>{progStructure["_9"][0]}</h1>
    <p>{progStructure["_9"][1]}</p>
    </div>
    </div>
    

    <div className={CN.parent3}>
    <div className={CN.circle_container}>
	<div className={CN.circle_main1}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text}>1A</div>
	</div>
	</div>
    </div>

    <div className= {CN.verticalLine1}></div>

    <div className={CN.circle_container}>
	<div className={CN.circle_main2}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text}>1B</div>
	</div>
	</div>
    </div>

    <div className= {CN.verticalLine2}></div>
    
    <div className={CN.circle_container}>
	<div className={CN.circle_main2}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text}>1C</div>
	</div>
	</div>
    </div>
    
    <div className= {CN.verticalLine3}></div>

    <div className={CN.circle_container}>
	<div className={CN.circle_main3}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text2}>2A</div>
	</div>
	</div>
    </div>

    <div className= {CN.verticalLine3}></div>

    <div className={CN.circle_container}>
	<div className={CN.circle_main3}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text2}>2B</div>
	</div>
	</div>
    </div>

    <div className= {CN.verticalLine3}></div>

    <div className={CN.circle_container}>
	<div className={CN.circle_main3}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text2}>2C</div>
	</div>
	</div>
    </div>

    <div className= {CN.verticalLine3}></div>

    <div className={CN.circle_container}>
	<div className={CN.circle_main4}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text2}>3</div>
	</div>
	</div>
    </div>

    <div className= {CN.verticalLine4}></div>

    <div className={CN.circle_container}>
	<div className={CN.circle_main5}>
	<div className={CN.circle_text_container}>
	<div className = {CN.circle_text2}>4</div>
	</div>
	</div>
    </div>

    </div>


    <div className= {CN.parent2}>
    <div className= {CN.child3}>
    <h1>{progStructure["_2"][0]}</h1>
    <p>{progStructure["_2"][1]}</p>
    </div>
    <div className= {CN.child4}>
    <h1>{progStructure["_4"][0]}</h1>
    <p>{progStructure["_4"][1]}</p>
    </div>
    <div className= {CN.child3}>
    <h1>{progStructure["_6"][0]}</h1>
    <p>{progStructure["_6"][1]}</p>
    </div>
    <div className= {CN.child4}>
    <h1>{progStructure["_8"][0]}</h1>
    <p>{progStructure["_8"][1]}</p>
    </div>
    </div>
    </div>
    
</Layout>
);
};

export default Piaic;
export const pageQuery = graphql`
query staticQuery {
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
            }
          }
        }
      }
    }    
`;

