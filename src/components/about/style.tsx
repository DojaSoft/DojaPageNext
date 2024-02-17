import styled from "styled-components";
// Const
import { BlueLigth400, size } from "@/styles/stylesConstants";

const AboutWrapper = styled.section`
  padding: 60px 20px 70px;
  background-color: ${BlueLigth400};
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  margin-bottom: 100px;

  h2 {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 12px;
  }

  p {
    line-height: 28px;
  }

  @media screen and (min-width: ${size.tablet.min}) {
    padding: 32px 20% 70px;
    h2 {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${size.desktop.min}) {
    padding: 100px 25%;
    h2 {
      margin-bottom: 32px;
    }
  }
`;

export default AboutWrapper;
