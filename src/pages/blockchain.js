import React from "react"
import Layout from "../components/layout"
import BC from "../components/BC.module.scss"

const Piaic = ({ data }) => {
  
    const {courseName,courseIntro,heading2,heading3,text,quarters,progStructure} = data.allContentfulCourse.edges[1].node;
    
    return (
    <Layout> 
    <div className = {BC.heading}>
<h1>{courseName}</h1> 
<p>{courseIntro.courseIntro}</p>
    {/* <h2>FINTECH AND SMART CONTRACTS</h2> */}
    </div>


    <div className = {BC.page}>
<h1>{heading2}</h1>
<p>{text}</p>
    </div>


    <div className= {BC.flex}>
    <div className= {BC.box1}>
    <h1>Quarter 1</h1>
    <p>{quarters._1}</p>
    </div>
    <div className= {BC.box2}>
    <h1>Quarter 2</h1>
    <p>{quarters._2}</p>
    </div>
    <div className= {BC.box3}>
    <h1>Quarter 3</h1>
    <p>{quarters._3}</p>
    </div>
    <div className= {BC.box4}>
    <h1>Quarter 4</h1>
    <p>{quarters._4}</p>
    </div>
    </div>


    <div className= {BC.line}><p></p></div>


<div className= {BC.h1}><p>{heading3}</p></div>

    
    <div className = {BC.parent}>
    <div className= {BC.parent1}>
    <div className= {BC.child}>
    <h1>{progStructure["_1"][0]}</h1>
    <p>{progStructure["_1"][1]}</p>
    </div>
    <div className= {BC.child}>
    <h1>{progStructure["_3"][0]}</h1>
    <p>{progStructure["_3"][1]}</p>
    </div>
    <div className= {BC.child}>
    <h1>{progStructure["_5"][0]}</h1>
    <p>{progStructure["_5"][1]}</p>
    </div>
    <div className= {BC.child5}>
    <h1>{progStructure["_7"][0]}</h1>
    <p>{progStructure["_7"][1]}</p>
    </div>
    <div className= {BC.child}>
    <h1>{progStructure["_9"][0]}</h1>
    <p>{progStructure["_9"][1]}</p>
    </div>
    <div className= {BC.child5}>
    <h1>{progStructure["_11"][0]}</h1>
    <p>{progStructure["_11"][1]}</p>
    </div>
    <div className= {BC.child2}>
    <h1>{progStructure["_13"][0]}</h1>
    <p>{progStructure["_13"][1]}</p>
    </div>
    </div>
    

    <div className={BC.parent3}>
    <div className={BC.circle_container}>
	<div className={BC.circle_main1}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text}>1A</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine1}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main2}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text}>1B</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine4}></div>
    
    <div className={BC.circle_container}>
	<div className={BC.circle_main2}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text}>1C</div>
	</div>
	</div>
    </div>
    
    <div className= {BC.verticalLine3}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main2}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>1D</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine4}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main2}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>1E</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine2}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main2}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>1F</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine7}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main3}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>2A</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine3}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main3}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>2B</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine7}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main4}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>3A</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine6}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main4}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>3B</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine7}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main4}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>3C</div>
	</div>
	</div>
    </div>

    <div className= {BC.verticalLine6}></div>

    <div className={BC.circle_container}>
	<div className={BC.circle_main4}>
	<div className={BC.circle_text_container}>
	<div className = {BC.circle_text2}>3D</div>
	</div>
    </div>
    </div>

    <div className= {BC.verticalLine7}></div>

    <div className={BC.circle_container}>
    <div className={BC.circle_main5}>
    <div className={BC.circle_text_container}>
    <div className = {BC.circle_text2}>4A</div>
    </div>
    </div>
    </div>

    <div className= {BC.verticalLine6}></div>

    <div className={BC.circle_container}>
    <div className={BC.circle_main5}>
    <div className={BC.circle_text_container}>
    <div className = {BC.circle_text2}>4B</div>
    </div>
	</div>
    </div>

    </div>


    <div className= {BC.parent2}>
    <div className= {BC.child3}>
    <h1>{progStructure["_2"][0]}</h1>
    <p>{progStructure["_2"][1]}</p>
    </div>
    <div className= {BC.child4}>
    <h1>{progStructure["_4"][0]}</h1>
    <p>{progStructure["_4"][1]}</p>
    </div>
    <div className= {BC.child3}>
    <h1>{progStructure["_6"][0]}</h1>
    <p>{progStructure["_6"][1]}</p>
    </div>
    <div className= {BC.child4}>
    <h1>{progStructure["_8"][0]}</h1>
    <p>{progStructure["_8"][1]}</p>
    </div>
    <div className= {BC.child4}>
    <h1>{progStructure["_10"][0]}</h1>
    <p>{progStructure["_10"][1]}</p>
    </div>
    <div className= {BC.child4}>
    <h1>{progStructure["_12"][0]}</h1>
    <p>{progStructure["_12"][1]}</p>
    </div>
    <div className= {BC.child3}>
    <h1>{progStructure["_14"][0]}</h1>
    <p>{progStructure["_14"][1]}</p>
    </div>
    </div>
    </div>
    
</Layout>
);
};

export default Piaic;
export const pageQuery = graphql`
query useQuery {
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

