import React from 'react';
import {graphql, Link} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
query($slug:String!){
  contentfulCovidProducts( title:{ eq: $slug } ){
        title
        description{json}
  }
}`
const ProductCardLED = (props) => {
  
    const options = {
      renderNode:{
        "embedded-asset-block":(node)=>{
          const alt=node.data.target.fields.title['en-US']
          const url=node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url} />
        }
      }
    }

    return (
      <>
      <div class="flex justify-between" style={{position:"relative",zIndex:100 }}>
        <div className="text-xl font-semibold">{props.data.contentfulCovidProducts.title.substr(1).trim()}</div>
        <div>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            <Link to="/">Close</Link>
          </button></div>
        </div>
      <div className=" m-2">
        {documentToReactComponents(props.data.contentfulCovidProducts.description.json,options)}
      </div>
      </>
    )
}

export default ProductCardLED;
