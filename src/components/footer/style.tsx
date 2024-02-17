import styled from "styled-components";
// Constants
import {
  BlueLigth800,
  WhiteColor,
  WhiteColor800,
  AvantGardeSemiBold,
  size,
} from "@/styles/stylesConstants";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 12px;
  background-color: ${BlueLigth800};

  p {
    font-family: ${AvantGardeSemiBold};
    color: ${WhiteColor800};
    margin: 0;
    font-size: 1rem;
    line-height: 28px;
  }

  section {
    margin-bottom: 12px;
  }

  .container-contact {
    display: grid;
    justify-items: center;
  }

  .footer {
    &-redes {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: center;
      padding: 12px 0;
      margin: 0;

      li {
        margin: 0 12px;
      }
    }

    &-icon {
      color: ${WhiteColor800};
      font-size: 32px;
    }

    &-copy {
      color: ${WhiteColor800};
      border-top: 1px solid ${WhiteColor};
      padding: 12px 0;
      margin: 0;
      text-align: center;
    }
  }

  @media screen and (min-width: ${size.tablet.min}) {
    padding: 24px 140px;

    p {
      line-height: 32px;
    }

    .footer {
      &-icon {
        font-size: 40px;
      }
    }
  }

  @media screen and (min-width: ${size.desktop.min}) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      font-size: 1.1rem;
    }

    section {
      margin-bottom: 32px;
    }

    .footer {
      &-icon {
        font-size: 40px;
      }
      &-copy {
        grid-column: 1/3;
      }
    }
  }
`;

export default FooterWrapper;
