import styled from "styled-components";
// Constants
import { size } from "../../styles/stylesConstants";

const ServicesWrapper = styled.section`
  padding: 0 32px;
  margin-bottom: 40px;

  ul {
    padding: 0;
    margin: 0;
    display: grid;
    justify-content: center;
  }

  h2 {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${size.tablet.min}) {
    padding: 0 88px;
    ul {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 70px;
    }
  }

  @media screen and (min-width: ${size.desktop.min}) {
    padding: 100px 100px;
    ul {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 70px;
    }
  }
`;

export default ServicesWrapper;
