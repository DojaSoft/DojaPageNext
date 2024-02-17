import styled from "styled-components";

// Constants
import { size } from "../../styles/stylesConstants";

const BannerWrapper = styled.section`
  display: grid;
  margin-bottom: 100px;
  padding-top: 32px;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 0 0 16px;
  }

  p {
    text-align: left;
    font-size: 1rem;
    line-height: 28px;
    margin: 0;
  }

  .banner {
    &-container {
      padding: 10% 20px;
    }
    &-img {
      width: 100%;
      height: 250px;
    }
  }

  @media screen and (min-width: ${size.tablet.min}) {
    grid-template-columns: 1fr 1fr;

    h1 {
      font-size: 2.5rem;
      margin: 0 0 28px;
    }

    p {
      font-size: 1.2rem;
    }

    .banner {
      &-container {
        padding: 15% 20px;
      }
      &-img {
        height: 375px;
      }
    }
  }

  @media screen and (min-width: ${size.desktop.min}) {
    padding-top: 100px;
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.4rem;
    }

    .banner {
      &-container {
        padding: 20% 20px;
      }
      &-img {
        height: 475px;
      }
    }
  }
`;

export default BannerWrapper;
