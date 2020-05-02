import React from 'react'
import {useStaticQuery, Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import amazon from '../assets/img/amazon.jpg'
import best from '../assets/img/best.png'
import nm from '../assets/img/nm.png'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '~/components/seo'

export default props => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(acf: {}, wordpress_id: {eq: 265}) {
            acf {
                banner_title
                map_grid1_title
                grid1_address_line1
                grid1_address_line2
                grid1_address_line3
                grid1_address_line4
                grid1_hours_line1
                grid1_hours_line2
                grid1_hours_line3
                map1_contact
                map_grid2_title
                grid2_address_line1
                grid2_address_line2
                grid2_address_line3
                grid2_address_line4
                grid2_hours_line1
                grid2_hours_line2
                grid2_hours_line3
                map2_contact
                map_grid3_title
                grid3_address_line1
                grid3_address_line2
                grid3_address_line3
                grid3_address_line4
                grid3_hours_line1
                grid3_hours_line2
                grid3_hours_line3
                map3_contact
                franchise1_link
                franchise2_link
                franchise3_link
              }
          }
      }
    `
    )
  return (
    <>
      <SEO
        title={wordpressPage.title}
        description={wordpressPage.acf.banner_title}
      />
      <Header />
      <section className="blue-bg">
        <ScrollAnimation animateIn="fadeInUp">
          <Jumbotron className="mb-0 text-center text-white bg-transparent space-1">
            <h1 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-3 pt-lg-5 pt-xl-5 space-2 px-sm-5">
              {wordpressPage.acf.banner_title}
            </h1>
          </Jumbotron>
        </ScrollAnimation>
      </section>

      <section
        className="mb-0 pt-5 pb-3 position-relative"
        id="locations-inner"
      >
        <Container className="our-focus pt-5">
          <Row className="mb-2 mb-sm-5 pb-0 pb-sm-5">
            <Col
              sm="4"
              className="text-center px-0 px-sm-4 mb-5 mb-sm-4 mb-lg-0 mb-xl-0"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="text-uppercase color-primary erbaum-bold pb-4 location-title">
                  {wordpressPage.acf.map_grid1_title}
                </h4>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary">
                {wordpressPage.acf.grid1_address_line1}
                <br />
                {wordpressPage.acf.grid1_address_line2}
                <br />
                {wordpressPage.acf.grid1_address_line3}
                <br />
                {wordpressPage.acf.grid1_address_line4}
              </p>
              <p className="filson-pro-reg color-secondary">
                Hours:
                <br />
                {wordpressPage.acf.grid1_hours_line1}
                <br />
                {wordpressPage.acf.grid1_hours_line2}
                <br />
                {wordpressPage.acf.grid1_hours_line3}
                <br />
                <br />
                Contact: {wordpressPage.acf.map1_contact}
              </p>
              <div className="g-map pt-2 pt-sm-4 px-3 px-sm-3 px-lg-0 px-xl-0">
                <iframe
                  title="Markham"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=7701+Woodbine+Avenue"
                  width="100%"
                  height="300px"
                  frameborder="0"
                  style={{ border: '0' }}
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col
              sm="4"
              className="text-center px-0 px-sm-4 mb-5 mb-sm-4 mb-lg-0 mb-xl-0"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="text-uppercase color-primary erbaum-bold pb-4 location-title">
                  {wordpressPage.acf.map_grid2_title}
                </h4>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary">
                {wordpressPage.acf.grid2_address_line1}
                <br />
                {wordpressPage.acf.grid2_address_line2}
                <br />
                {wordpressPage.acf.grid2_address_line3}
                <br />
                {wordpressPage.acf.grid2_address_line4}
              </p>
              <p className="filson-pro-reg color-secondary">
                Hours:
                <br />
                {wordpressPage.acf.grid2_hours_line1}
                <br />
                {wordpressPage.acf.grid2_hours_line2}
                <br />
                {wordpressPage.acf.grid2_hours_line3}
                <br /> <br />
                Contact: {wordpressPage.acf.map2_contact}
              </p>
              <div className="g-map pt-2 pt-sm-4 px-3 px-sm-3 px-lg-0 px-xl-0">
                <iframe
                  title="Mississauga"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=1550+Meyerside+Drive"
                  width="100%"
                  height="300px"
                  frameborder="0"
                  style={{ border: '0' }}
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col
              sm="4"
              className="text-center px-0 px-sm-4 mb-5 mb-sm-4 mb-lg-0 mb-xl-0"
            >
              <ScrollAnimation animateIn="fadeInUp">
                <h4 className="text-uppercase color-primary erbaum-bold pb-4 location-title">
                  {wordpressPage.acf.map_grid3_title}
                </h4>
              </ScrollAnimation>
              <p className="filson-pro-reg color-secondary">
                {wordpressPage.acf.grid3_address_line1}
                <br />
                {wordpressPage.acf.grid3_address_line2}
                <br />
                {wordpressPage.acf.grid3_address_line3}
                <br />
                {wordpressPage.acf.grid3_address_line4}
              </p>
              <p className="filson-pro-reg color-secondary">
                Hours:
                <br />
                {wordpressPage.acf.grid3_hours_line1}
                <br />
                {wordpressPage.acf.grid3_hours_line2}
                <br />
                {wordpressPage.acf.grid3_hours_line3}
                <br />
                <br />
                Contact: {wordpressPage.acf.map3_contact}
              </p>
              <div className="g-map pt-2 pt-sm-4 px-3 px-sm-3 px-lg-0 px-xl-0">
                <iframe
                  title="Milton/Georgetown"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=15+Brownridge+Road"
                  width="100%"
                  height="300px"
                  frameborder="0"
                  style={{ border: '0' }}
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section>
          <Container>
            <p
              className="text-center w-100 filson-pro-reg color-secondary"
              style={{ fontSize: '16px' }}
            >
              Also available at:
            </p>
            <Row>
              <Col sm="4" className="col-4 text-center">
                <a href={wordpressPage.acf.franchise1_link} target="_blank" rel="noopener noreferrer">
                  <img src={amazon} alt="Amazon" width="90%" />
                </a>
              </Col>
              <Col sm="4" className="col-4 text-center">
                <a href={wordpressPage.acf.franchise2_link} target="_blank" rel="noopener noreferrer">
                  <img src={best} alt="Best Buy" width="90%" />
                </a>
              </Col>
              <Col sm="4" className="col-4 text-center">
                <Link to={wordpressPage.acf.franchise3_link} target="_blank" rel="noopener noreferrer">
                  <img src={nm} alt="National Mattress" width="90%" />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <section>
        <Container>
          <Row className="py-3 py-sm-5 mb-0 mb-sm-5">
            <div className="m-auto text-center d-sm-flex">
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to="/take-test/"
                    className="btn-cta color-primary erbaum-bold space-1"
                  >
                    TAKE THE TEST
                  </Link>
                </p>
                See if Chirofoam™ is right for you.
              </Col>
              <Col
                sm="6"
                className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5"
              >
                <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                  <Link
                    to="/shop-chirofoam/"
                    className="btn-cta color-primary erbaum-bold space-1 mr-3"
                  >
                    BUY NOW
                  </Link>
                </p>
                Start your journey to a better sleep!
              </Col>
            </div>
          </Row>
        </Container>
      </section>
      <ScrollAnimation animateIn="fadeInUp">
        <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
          <Container className="pb-0 pb-sm-5">
            <Row>
              <p className="text-center w-100 star">
                <i className="fa fa-star star-small"></i>
                <i className="fa fa-star star-medium ml-2"></i>
                <i className="fa fa-star star-large mx-2"></i>
                <i className="fa fa-star star-medium mr-2"></i>
                <i className="fa fa-star star-small"></i>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{ fontSize: '20px' }}
              >
                “A great quality mattress I enjoy waking up on every day…”{' '}
                <br /> -Mark F. from Toronto, Ontario
              </p>
              <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
                <Link
                  to="/reviews/"
                  className="btn-cta color-primary erbaum-bold space-1"
                >
                  SEE REVIEWS
                </Link>
              </p>
              <p
                className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1"
                style={{ fontSize: '20px' }}
              >
                Chirofoam™ Memory Foam Mattresses are proudly developed and
                manufactured in Toronto, ON, Canada.
              </p>
            </Row>
          </Container>
        </section>
      </ScrollAnimation>
      <Footer />
    </>
  )
}
