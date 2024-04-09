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
import {AcUnitRounded, AddToHomeScreenRounded, Memory, SupervisedUserCircle} from "@material-ui/icons";
import Camera from "@material-ui/icons/Camera";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(styles);

export default function Inicio(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [classicModal, setClassicModal] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
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

          <Parallax image="/img/profile-bg.jpg">
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
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <div className="logo-center">
                              <img
                                  src="/img/Logo-DOJA.png"
                                  alt="logo dojasoft"
                              />
                          </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                          <h3 className={classes.title}>¿Quienes somos?</h3>
                      </GridItem>
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

                              <InfoArea
                                  title="Visión"
                                  description="Para el año 2030 ser el mejor aliado estratégico en soluciones tecnológicas, mediante innovación,
                              mejoramiento continuo y la aplicación de estándares de calidad, para ser reconocida como una empresa sólida
                              con valores y principios institucionales a nivel nacional."
                                  icon={Chat}
                                  iconColor="info"
                                  vertical
                              />

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
                          <h3 className="tittle-top">¿Como desarrollamos Software?</h3>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                          <div>
                              <CustomTabs
                                  headerColor="warning"
                                  tabs={[
                                      {
                                          tabName: "Cliente",
                                          tabIcon: Face,
                                          tabContent: (
                                              <div className={classes.textCenter + " middle-separate"}>
                                                  <InfoArea
                                                      title="Conocer al Cliente"
                                                      description="En Doja nos enfocamos en conocer a nuestros clientes, ya que interiorizar
                                                      los procesos de nuestros clientes hace conocer lo que debemos comenzar a desarrollar según
                                                      las necesidades de nuestros clientes"
                                                      icon={SupervisedUserCircle}
                                                      iconColor="danger"
                                                      vertical
                                                  />
                                              </div>
                                          )
                                      },
                                      {
                                          tabName: "Agiles",
                                          tabIcon: Memory,
                                          tabContent: (
                                              <img
                                                  src="/img/scrum-guia.png"
                                                  alt="scrum"
                                                  className="slick-image"
                                              />
                                          )
                                      },
                                      {
                                          tabName: "Gestión",
                                          tabIcon: Build,
                                          tabContent: (
                                              <div className={classes.textCenter}>
                                                  <GridContainer>
                                                      <GridItem xs={12} sm={12} md={4}>
                                                          <InfoArea
                                                              title="¿ Como se debe gerenciar un proyecto ?"
                                                              description="Siempre debemos ver cual es la mejor manera de dirigir un proyecto desde
                                                      el presupuesto y las tecnologias a implementar como los tiempos de respuesta a
                                                      nuestros clientes con el fin de siempre cumplir nuestros objetivos propuestos como equipo"
                                                              icon={Camera}
                                                              iconColor="success"
                                                              vertical
                                                          />
                                                      </GridItem>
                                                      <GridItem xs={12} sm={12} md={4}>
                                                          <InfoArea
                                                              title="Planificar"
                                                              description="Se debe planificar con la realidad, es decir, conociendo los tiempos finales del proyecto
                                                              y con la capacidad de tomar decisiones en medio del proceso en los sprint programados"
                                                              icon={AcUnitRounded}
                                                              iconColor="primary"
                                                              vertical
                                                          />
                                                      </GridItem>
                                                      <GridItem xs={12} sm={12} md={4}>
                                                          <InfoArea
                                                              title="Comunicación"
                                                              description="Al final los proyectos no se lográn por la falta de comunicación o porque
                                                              en ocaciones hay supuestos falsos, por eso tener una clara comunicación es fundamental
                                                              para desarrollar buenos proyectos"
                                                              icon={AddToHomeScreenRounded}
                                                              iconColor="danger"
                                                              vertical
                                                          />
                                                      </GridItem>
                                                  </GridContainer>
                                              </div>
                                          )
                                      }
                                  ]}
                              />
                          </div>
                      </GridItem>
                  </GridContainer>
              </div>
              <div id="trabajos">
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                          <h3 className={classes.title}>Marco Polo</h3>
                          <div className="separator-center">
                              <video width="100%" controls preload="none">
                                  <source src="../MarcoPolo.mp4" type="video/mp4"/>
                                  <track
                                      src="/path/to/captions.vtt"
                                      kind="subtitles"
                                      srcLang="en"
                                      label="English"
                                  />
                                  Su navegador no soporta el video
                              </video>
                          </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                          <h3 className={classes.title}>A & J</h3>
                          <div className="separator-center">
                              <video width="100%" controls preload="none">
                                  <source src="../A&J.mp4" type="video/mp4"/>
                                  <track
                                      src="/path/to/captions.vtt"
                                      kind="subtitles"
                                      srcLang="en"
                                      label="English"
                                  />
                                  Su navegador no soporta el video
                              </video>
                          </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                          <h3 className={classes.title}>BPA Electric</h3>
                          <div className="separator-center">
                              <video width="50%" controls preload="none">
                                  <source src="../bpa.mp4" type="video/mp4"/>
                                  <track
                                      src="/path/to/captions.vtt"
                                      kind="subtitles"
                                      srcLang="en"
                                      label="English"
                                  />
                                  Su navegador no soporta el video
                              </video>
                          </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                          <div className="sparador-center"></div>
                      </GridItem>
                  </GridContainer>
              </div>
              <div id="contactenos">
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <h3 className={classes.title}>Contactenos</h3>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                      </GridItem>
                  </GridContainer>
              </div>

          </div>
          <Footer/>
      </div>
  );
}
