import styled from "styled-components";
// Constants
import { GrayColor200 } from "../../../styles/stylesConstants";

const CardWrapper = styled.li`
  display: grid;
  margin-bottom: 40px;
  border-radius: 12px;
  box-shadow: 1px 2px 3px ${GrayColor200};

  .card-image {
    width: 100%;
    height: 225px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-bottom: 16px;
  }

  h3 {
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    padding: 0 8px;
    margin-bottom: 16px;
  }
`;

export default CardWrapper;
