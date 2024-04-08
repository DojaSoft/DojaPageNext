import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import Chat from "@material-ui/icons/Chat";
import InfoArea from "../components/InfoArea/InfoArea";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Info from "../components/Typography/Info";
import Success from "../components/Typography/Success";
import CustomTabs from "../components/CustomTabs/CustomTabs";
import Face from "@material-ui/icons/Face";
import Build from "@material-ui/icons/Build";

const useStyles = makeStyles(styles);

export default function Inicio(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
      <div>
          <div id="inicio">
              <Header
                  brand="DojaSoft"
                  rightLinks={<HeaderLinks/>}
                  fixed
                  color="transparent"
                  changeColorOnScroll={{
                      height: 400,
                      color: "white"
                  }}
                  {...rest}
              />
          </div>

          <Parallax image="/img/fondo-principal.jpg">
              <div className={classes.container}>
                  <GridContainer>
                      <GridItem>
                          <div className={classes.brand}>
                              <h1 className={classes.title}>DojaSoft</h1>
                              <h3 className={classes.subtitle}>
                                  Diseñamos y realizamos soluciones tecnológicas para agilizar los procesos en tu
                                  negocio.
                              </h3>
                          </div>
                      </GridItem>
                  </GridContainer>
              </div>
          </Parallax>

          <div className={classNames(classes.main, classes.mainRaised)}>

              <div id="quienes-somos">
                  <div className="logo-center">
                      <img
                          src="/img/Logo-DOJA.png"
                          alt="logo dojasoft"
                      />
                  </div>
                  <Info><h1 color={classes.secundary}
                            className={classes.title}>¿Quienes somos?</h1>
                  </Info>
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <InfoArea
                              title="Dojasoft"
                              description="Somos una empresa colombiana, que comercializa y desarrolla soluciones informáticas y tecnológicas.
                              Los productos de DOJA SOFT han sido creados con recursos de última generación. Nuestras soluciones están
                              totalmente integradas, proporcionándole el control de: procesos operativos, administrativos y financieros. Contamos con
                              soluciones de negocio orientadas a incrementar la eficiencia de los procesos y operaciones de nuestros clientes en
                              distintas áreas."
                              icon={Fingerprint}
                              iconColor="danger"
                              vertical
                          />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                          <p>
                              <InfoArea
                                  title="Visión"
                                  description="Para el año 2030 ser el mejor aliado estratégico en soluciones tecnológicas, mediante innovación,
                              mejoramiento continuo y la aplicación de estándares de calidad, para ser reconocida como una empresa sólida
                              con valores y principios institucionales a nivel nacional."
                                  icon={Chat}
                                  iconColor="info"
                                  vertical
                              />
                          </p>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                          <InfoArea
                              title="Misión"
                              description="En Doja nos enfocamos en brindar soluciones a las necesidades de nuestros clientes, mediante el desarrollo
                              de software, contando con un equipo humano comprometido y altamente calificado."
                              icon={VerifiedUser}
                              iconColor="success"
                              vertical
                          />
                      </GridItem>
                  </GridContainer>
              </div>
              <div id="a-la-medida">
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <Info><h1 color={classes.secundary}
                                    className={classes.title}>¿Como desarrollamos Software?</h1>
                          </Info>

                          <CustomTabs
                              headerColor="primary"
                              tabs={[
                                  {
                                      tabName: "Profile",
                                      tabIcon: Face,
                                      tabContent: (
                                          <p className={classes.textCenter}>
                                              I think that’s a responsibility that I have, to push
                                              possibilities, to show people, this is the level that
                                              things could be at. So when you get something that has
                                              the name Kanye West on it, it’s supposed to be pushing
                                              the furthest possibilities. I will be the leader of a
                                              company that ends up being worth billions of dollars,
                                              because I got the answers. I understand culture. I am
                                              the nucleus.
                                          </p>
                                      )
                                  },
                                  {
                                      tabName: "Messages",
                                      tabIcon: Chat,
                                      tabContent: (
                                          <p className={classes.textCenter}>
                                              I think that’s a responsibility that I have, to push
                                              possibilities, to show people, this is the level that
                                              things could be at. I will be the leader of a company
                                              that ends up being worth billions of dollars, because I
                                              got the answers. I understand culture. I am the nucleus.
                                              I think that’s a responsibility that I have, to push
                                              possibilities, to show people, this is the level that
                                              things could be at.
                                          </p>
                                      )
                                  },
                                  {
                                      tabName: "Settings",
                                      tabIcon: Build,
                                      tabContent: (
                                          <p className={classes.textCenter}>
                                              think that’s a responsibility that I have, to push
                                              possibilities, to show people, this is the level that
                                              things could be at. So when you get something that has
                                              the name Kanye West on it, it’s supposed to be pushing
                                              the furthest possibilities. I will be the leader of a
                                              company that ends up being worth billions of dollars,
                                              because I got the answers. I understand culture. I am
                                              the nucleus.
                                          </p>
                                      )
                                  }
                              ]}
                          />
                      </GridItem>
                  </GridContainer>
              </div>
              <div id="contactenos">
                  <SectionBasics/>
                  <SectionCarousel/>
                  <SectionTabs/>
                  <SectionPills/>
                  <SectionNotifications/>
                  <SectionTypography/>
                  <SectionJavascript/>
                  <SectionCompletedExamples/>
                  <SectionLogin/>
                  <GridItem md={12} className={classes.textCenter}>
                      <Link href="/login">
                          <a className={classes.link}>
                              <Button color="primary" size="lg" simple>
                                  View Login Page
                              </Button>
                          </a>
                      </Link>
                  </GridItem>
                  <SectionExamples/>
                  <SectionDownload/>
              </div>

          </div>
          <Footer/>
      </div>
  );
}
