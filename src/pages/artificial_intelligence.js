import React from "react"
import Layout from "../components/layout"
import AI from "../components/AI.module.scss"

const Piaic = ({ data }) => {
  
    const {courseName,courseIntro,heading2,heading3,text,quarters,progStructure} = data.allContentfulCourse.edges[3].node;
    
    return (
    <Layout>
    
    
    <div className = {AI.heading}>
<h1>{courseName}</h1> 
<h2>{courseIntro.courseIntro}</h2>
    {/* <h2>GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</h2> */}
    </div>


    <div className = {AI.page}>
    <h1>{heading2}</h1>
    <p>{text}</p>
    {/* <h2>and Deep Learning.</h2> */}
    </div>


    <div className= {AI.flex}>
    <div className= {AI.box1}>
    <h1>Quarter 1</h1>
    <p>{quarters._1}</p>
    </div>
    <div className= {AI.box2}>
    <h1>Quarter 2</h1>
    <p>{quarters._2}</p>
    </div>
    <div className= {AI.box3}>
    <h1>Quarter 3</h1>
    <p>{quarters._3}</p>
    </div>
    <div className= {AI.box4}>
    <h1>Quarter 4</h1>
    <p>{quarters._4}</p>
    </div>
    </div>

    <div className= {AI.line}><p></p></div>


    <div className= {AI.h1}><p>Detailed Program Structure</p></div>

    
    <div className = {AI.parent}>
    <div className= {AI.parent1}>
    <div className= {AI.child}>
    <h1>{progStructure["_1"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img}></div>
    <p>{progStructure["_1"][1]}</p>
    </div>
    </div>

    <div className= {AI.child}>
    <h1>{progStructure["_3"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img10}></div>
    <p>{progStructure["_3"][1]}</p>
    </div>
    </div>
    <div className= {AI.child}>
    <h1>{progStructure["_5"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img3}></div>
    <p>{progStructure["_5"][1]}</p>
    </div>
    </div>
    <div className= {AI.child}>
    <h1>{progStructure["_7"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img9}></div>
    <p>{progStructure["_7"][1]}</p>
    </div>
    </div>
    <div className= {AI.child}>
    <h1>{progStructure["_9"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img8}></div>
    <p>{progStructure["_9"][1]}</p>
    </div>
    </div>
    <div className= {AI.child2}>
    <h1>{progStructure["_11"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img7}></div>
    <p>{progStructure["_11"][1]}</p>
    </div>
    </div>
    </div>
    

    <div className={AI.parent3}>
    <div className={AI.circle_container}>
	<div className={AI.circle_main1}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text}>1A</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine1}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main2}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text}>1B</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine2}></div>
    
    <div className={AI.circle_container}>
	<div className={AI.circle_main2}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text}>1C</div>
	</div>
	</div>
    </div>
    
    <div className= {AI.verticalLine3}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main3}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>2A</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine4}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main3}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>2B</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine4}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main3}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>2C</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine4}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main4}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>3A</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine4}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main4}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>3B</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine4}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main4}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>3C</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine3}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main4}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>3D</div>
	</div>
	</div>
    </div>

    <div className= {AI.verticalLine3}></div>

    <div className={AI.circle_container}>
	<div className={AI.circle_main5}>
	<div className={AI.circle_text_container}>
	<div className = {AI.circle_text2}>4</div>
	</div>
	</div>
    </div>

    </div>


    <div className= {AI.parent2}>
    <div className= {AI.child3}>
    <h1>{progStructure["_2"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img2}></div>
    <p>{progStructure["_2"][1]}</p>
    </div>
    </div>
    <div className= {AI.child4}>
    <h1>{progStructure["_4"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img4}></div>
    <p>{progStructure["_4"][1]}</p>
    </div>
    </div>
    <div className= {AI.child3}>
    <h1>{progStructure["_6"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img5}></div>
    <p>{progStructure["_6"][1]}</p>
    </div>
    </div>
    <div className= {AI.child4}>
    <h1>{progStructure["_8"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img6}></div>
    <p>{progStructure["_8"][1]}</p>
    </div>
    </div>
    <div className= {AI.child4}>
    <h1>{progStructure["_10"][0]}</h1>
    <div className= {AI.flex2}>
    <div className= {AI.img8}></div>
    <p>{progStructure["_10"][1]}</p>
    </div>
    </div>
    </div>
    </div>
    
</Layout>

);
};

export default Piaic;
export const pageQuery = graphql`
query useStaticQuery {
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

