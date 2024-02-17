import styled from "styled-components";
// Constants
import {
  WhiteColor,
  GrayColor200,
  size,
  AvantGarde,
  BlueDark,
} from "../../styles/stylesConstants";

export const MenuWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  justify-content: center;
  background: ${WhiteColor};
  padding: 8px 0px;
  z-index: 1000;
  width: 100%;
  box-shadow: 0px 2px 4px ${GrayColor200};

  header {
    position: relative;
  }

  .MuiDrawer-paperAnchorLeft {
    width: 40vw;
  }

  .menu {
    &-button {
      position: absolute;
      top: 8px;
      right: 12px;
      background: none;
      border: none;
    }
    &-logo {
      height: 42px;
      width: 130px;
    }
    &-icon {
      height: 42px;
    }
  }

  @media screen and (min-width: ${size.tablet.max}) {
    .container-menu {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0 32px;
      a {
        font-size: 1.1rem;
      }
    }

    .menu {
      &-list {
        gap: 32px;
        display: flex;
        justify-content: space-between;
        list-style: none;
        a {
          color: ${BlueDark};
          font-size: 1rem;
          text-decoration: none;
        }
      }
      &-logo {
        margin-top: 8px;
      }
    }
  }
`;

export const OverlayWrapper = styled.figure`
  position: fixed;
  top: 66px;
  margin: 0;
  z-index: 99;
  right: 0px;
  background-color: ${WhiteColor};
  box-shadow: 1px 2px 4px ${GrayColor200};

  .overlay-list {
    list-style: none;
    padding: 0 8px;
    a {
      color: ${BlueDark};
      font-size: 1rem;
      font-family: ${AvantGarde};
    }
  }
`;
