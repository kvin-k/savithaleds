import React from 'react';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import { graphql, useStaticQuery, Link} from 'gatsby'
import Hero from './Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './index.module.css'
import LocationOn from "@material-ui/icons/LocationOn";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import indexStyles from './index.module.css';
import WhatsApp from './WhatsApp';
import Head from '../components/head'



const HomePage= () => {
  const data = useStaticQuery(graphql`
  query {
    productsLED: allContentfulLedProducts(sort: {fields: title, order: ASC}) {
      edges {
        node {
          title
        }
      }
    }
    productsCovid: allContentfulCovidProducts(sort: {fields: title, order: ASC}) {
      edges {
        node {
          title
        }
      }
    }
    allContentfulHeroImages(sort: {fields: imageTitle___title}) {
      edges {
        node {
          imageTitle {
            title
            fluid(quality: 100){
              src
            }
          }
        }
      }
    }
  }
  
  `)

  return(
  <Layout>
    <Head />
    <div className={indexStyles.imageCarousel}>
      <section >
      <Carousel>
        {data.allContentfulHeroImages.edges.map((edge)=>
          <Carousel.Item>
          <Hero fluid={edge.node.imageTitle.fluid}>
          
          </Hero>
          <Carousel.Caption>
            <h3>{edge.node.imageTitle.title.substr(1).trim()}</h3>
          </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
      </section>
    </div>

    <div className={indexStyles.productsDiv}>
    <section id="products" className="py-10 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Products</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">

          <div className="flex-1 px-1">
            <Card className="mb-8">
              <p className="font-semibold text-xl">LED Lights</p>
              <ul >
                {data.productsLED.edges.map(edge => (
                  <li key={edge.node.title} className="flex-1 ">
                  <Link
                    to={`/${edge.node.title.replace(/\s/g,'')}/`}
                    state={{
                      modal: true,
                    }}
                  >{edge.node.title.substr(1).trim()}</Link>
                  </li>
                ))}
                
              </ul>
            </Card>
          </div>

          <div className="flex-1 px-1">
            <Card className="mb-8">
              <p className="font-semibold text-xl">COVID-19 Protection Gear</p>
              <ul >
                {data.productsCovid.edges.map(edge => (
                  <li key={edge.node.title} className="flex-1 ">
                  <Link
                    to={`/${edge.node.title.replace(/\s/g,'')}/`}
                    state={{
                      modal: true,
                    }}
                  >{edge.node.title.substr(1).trim()}</Link>
                  </li>
                ))}
                
              </ul>
            </Card>
          </div>

        </div>
      </div>
    </section>
    </div>
    
    <section id="about" className="container mx-auto my-10 py-20 bg-gray-200 rounded-lg text-center lg:pt-32">
    <div className="container mx-auto">
      <h3 className="text-5xl font-semibold">About Us</h3>
      <p className="mt-8 text-xl font-light">
      Established in the year 1999, we, Ambika Industries, are engaged in manufacturing and supplying 
      a wide range of LED flood lights, LED bulbs, LED panels and <b>Covid-19 Protective Gear</b>. 
      These products are manufactured using supreme grade polymers and other raw material,
       sourced from trustworthy vendors of the market. We also use latest technology machines in the 
       manufacturing process. These products are acknowledged for their features like low power consumption,
        sturdy construction, easy installation, hassle-free performance, longer service life.
      </p>
      </div>
    </section>

    <section id="contact" className="container mx-auto my-10 py-21 rounded-lg text-center lg:pt-32">
      <h3 className="text-5xl font-semibold">Contact Us</h3>
      <p className="mt-4 text-xl font-light">
        <p className="mt-3">
        <a href="https://goo.gl/maps/2UptdTZT77rE3JZc9" target="_blank" rel="noreferrer">
          <LocationOn className="slick-icons" />AMBIKA INDUSTRIES<br/>#3-5-222/162<br/>Krishna Nagar Colony, Moula-Ali
        <br/>Hyderabad-500 040.<br/>
        
           </a>
      </p>
      <p><a href = "mailto: satyamperla71@gmail.com">
      <MailOutlineIcon/>Send Email</a></p>

      <p><a href = "tel:9391010443">
      <CallIcon/>9391010443</a></p>
      <p><a href = "tel:9246192610">
      <CallIcon/>9246192610</a></p>
      <p><a href = "https://api.whatsapp.com/send?phone=919391010443&text=Message From Website">
      <WhatsAppIcon/>Send Message</a></p>
      </p>
      
    </section>

    <WhatsApp />
  </Layout>
  )
}


export default HomePage;