import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const content = ({ data }) => {
  //const { president, title, intro,applications,heading2,courses,heading3,list,heading4,videoUrl,heading5,heading6,theme } = data.contentfulHome.edges.node;
  return (
    <Layout>
      <SEO title={title} />
      <div className="">
        <img alt={title} src={image.file.url} />
        <div className="tags">
          
        </div>
        
      </div>
    </Layout>
  );
};
export default content;
// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulHome  (slug: { eq: $slug }) {
//       president{
//         file{
//           url
//         }
//       }
//       title
//       intro{
//         body
//       }
//       applications
//       heading2
//       courses{
//         json
//       }
//       heading3
//       list
//       heading4
//       videoUrl{
//         file{
//           url
//         }
//       }
//       heading5
      
//       heading6
      
//       theme{
//         json
//       }
//     }
//   }
// `;