/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {Apps, CloudDownload, CompareSharp, ContactPhone, HowToReg, WhatsApp} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Servicios"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/desarrollo-web">
              <a className={classes.dropdownLink}>Desarrollo Web</a>
            </Link>,
            <Link href="/desarrollo-movil">
              <a className={classes.dropdownLink}>Desarrollo Movil </a>
            </Link>,
            /*<a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>*/
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#quienes-somos"
          color="transparent"
          className={classes.navLink}
        >
            <HowToReg className={classes.icons} /> Quienes Somos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#contactenos"
          color="transparent"
          className={classes.navLink}
        >
          <ContactPhone className={classes.icons} /> Contactenos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-whatsap"
          title="Follow us on Whatsap"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://wa.me/3002311878"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
              <WhatsApp className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/profile.php?id=100070205302287"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
