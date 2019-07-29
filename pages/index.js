import React from "react";
import getConfig from "next-server/config";
import Hero from "../components/hero";
import Cta from "../components/cta";
import ThemeContext from "../lib/ThemeContext";

import { Headline, Textline, Container, Section, Image } from "../elements";
import { Shippers, Consignees, Transporters, Financers } from "../icons";

const { publicRuntimeConfig } = getConfig();
const linkPrefix = publicRuntimeConfig.linkPrefix;

export default function Home() {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <Container>
        <div className="bg" />
        <Hero theme={theme} />
        <style jsx>
          {`
            .bg {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0%;
              height: 100%;
              background: url("${linkPrefix}static/img/bg.jpg") center bottom no-repeat;
              background-size: cover;
              z-index: -1;
            }
            `}
        </style>
      </Container>
      <div style={{ backgroundColor: "#FFF" }}>
        <div className="benefit-section">
          <div className="graybg" />
          <Section>
            <Container>
              <Headline centered variant="small">
                All-in-one Logistics and Financing Solution
              </Headline>
              <div className="benefits-container">
                <div className="benefits__item">
                  <div className="content">
                    <div className="left">
                      <Shippers style={{ width: "60px", height: "60px" }} />
                    </div>
                    <div className="right">
                      <h3>Shippers</h3>
                      <p>
                        Increase transparency of price, shipment events, and
                        ownership of the entire shipment process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="benefits__item">
                  <div className="content">
                    <div className="left">
                      <Consignees style={{ width: "60px", height: "60px" }} />
                    </div>
                    <div className="right">
                      <h3>Consignees</h3>
                      <p>
                        test Benefit from reduced documentation and compliance costs
                        while increasing traceability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="benefits__item">
                  <div className="content">
                    <div className="left">
                      <Transporters style={{ width: "60px", height: "60px" }} />
                    </div>
                    <div className="right">
                      <h3>Transporters</h3>
                      <p>
                        Accelerate payments and simplify claims settlement with
                        enterprise-grade software.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="benefits__item">
                  <div className="content">
                    <div className="left">
                      <Financers style={{ width: "60px", height: "60px" }} />
                    </div>
                    <div className="right">
                      <h3>Financers</h3>
                      <p>
                        Get unprecedented visibility to order data and related
                        records to reduce cost and risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
          <style jsx>
            {`
            .benefit-section {
              position: relative;
              margin-top: -100px;
            }

            .graybg {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              display: block;
              content: "";
              z-index: -1;
              background: ${theme.palette.white};
              border-top-left-radius: 4rem;
              border-top-right-radius: 4rem;
            }

            .benefits-container {
              display: flex;
              justify-content: center;
              flex-direction: column;
              margin-top: 3rem;
              flex-wrap: wrap;
            }

            .benefits__item {
              width: 100%;
              margin-bottom: 2rem;
            }

            .benefits__item .content {
              display: flex;
            }

            .benefits__item .content .right {
              padding-left: 1rem;
            }

            .benefits__item .content h3 {
              margin-top: 0;
            }

            .benefits__item > img {
              display: block;
              width: 100%;
            }

            @media (min-width: ${theme.breakpoints.md}) {
              .benefits-container {
                flex-direction: row;
              }

              .benefits__item {
                max-width: 400px;
                width: 48%;
                padding: 1rem;
                margin: 1%;
              }
            }

            // @media (min-width: ${theme.breakpoints.lg}) {
            //   .benefits__item {
            //     width: 31.33%;
            //     margin: 1%;
            //   }
            // }
          `}
          </style>
        </div>
        <div style={{ backgroundColor: "#f1f1f1" }}>
          <Container>
            <Section>
              <div className="image-section">
                <div className="left">
                  <Headline variant="small">
                    Traditional logistics management usually causes goods or
                    services to be paid in{" "}
                    <span style={{ color: "#FF0000" }}>100+ days</span>
                  </Headline>
                  {/* <p>
                    Traditional logistics management usually causes goods or
                    services to be paid in months.
                  </p> */}
                  {/* <div className="cta-button" href="#">
                  <ScrollLink
                    to="section1"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Start Now
                  </ScrollLink>
                  <span>
                    <ChevronRight />
                  </span>
                </div> */}
                </div>
                <div className="right">
                  <div style={{ maxWidth: "500px", marginLeft: "auto" }}>
                    <Image src="/static/img/stress.svg" alt="" />
                  </div>
                </div>
                <style jsx>
                  {`
                    .image-section {
                      display: flex;
                      flex-direction: column;
                    }

                    .cta-button {
                      color: ${theme.palette.primary};
                      letter-spacing: 1px;
                      text-decoration: none;
                      text-transform: uppercase;
                      font-weight: bold;
                      position: relative;
                      display: inline-block;
                      cursor: pointer;
                    }

                    .cta-button span {
                      display: inline-block;
                      width: 18px;
                      height: 18px;
                      position: absolute;
                      top: 50%;
                      right: -1rem;
                      transform: translate(0, -50%);
                      fill: ${theme.palette.primary};
                      transition: all 200ms ease-in-out;
                    }

                    .cta-button:hover span {
                      transform: translate(5px, -50%);
                    }

                    .left {
                      margin-bottom: 2rem;
                      text-align: center;
                    }

                    @media (min-width: ${theme.breakpoints.md}) {
                      .image-section {
                        flex-direction: row;
                        align-items: center;
                      }

                      .left {
                        width: 40%;
                        padding-right: 2rem;
                        text-align: left;
                      }

                      .right {
                        width: 60%;
                      }
                    }
                  `}
                </style>
              </div>
            </Section>
          </Container>
          {/* <Container>
            <Section>
              <Headline centered variant="small">
                Pag Manu-Mano ang Pag-Monitor, Matagal ang Bayaran
              </Headline>
              <Textline>
                Traditional logistics management usually causes goods or
                services to be paid in months.
              </Textline>
              <div
                className="svg-illust"
                style={{ margin: "1rem auto", maxWidth: "1100px" }}
              >
                <div className="web-view">
                  <Image
                    src="/static/img/illust1.svg"
                    alt="Diagram of the problem"
                  />
                </div>
                <div className="mobile-view">
                  <Image
                    src="/static/img/illust1-mobile.svg"
                    alt="Diagram of the problem"
                  />
                </div>
                <style jsx>
                  {`
                    .web-view {
                      display: none;
                    }

                    @media (min-width: 800px) {
                      .web-view {
                        display: block;
                      }
                      .mobile-view {
                        display: none;
                      }
                    }
                  `}
                </style>
              </div>
            </Section>
          </Container> */}
        </div>
        <Container>
          <Section>
            <Headline centered variant="small">
              Sa InsightSCS, Mababayaran ka sa Loob ng 5 - 10 na Araw
            </Headline>
            <Textline>
              Eliminate non-essential costs and speed up payments through
              blockchain-enabled processes
            </Textline>
            <div
              className="svg-illust"
              style={{ margin: "1rem auto", maxWidth: "1100px" }}
            >
              <div className="web-view">
                <Image
                  src="/static/img/illust2.svg"
                  alt="Diagram of the solution"
                />
              </div>
              <div className="mobile-view">
                <Image
                  src="/static/img/illust2-mobile.svg"
                  alt="Diagram of the solution"
                />
              </div>
              <style jsx>
                {`
                  .web-view {
                    display: none;
                  }

                  @media (min-width: 800px) {
                    .web-view {
                      display: block;
                    }
                    .mobile-view {
                      display: none;
                    }
                  }
                `}
              </style>
            </div>
          </Section>
          <Section>
            <Cta />
          </Section>
        </Container>
      </div>
    </>
  );
}
