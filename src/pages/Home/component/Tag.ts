import styled from "styled-components";
import Color from "@src/styles/Color";

const Tag = styled.div<{
  color?: string;
}>`
  color: ${({ color }) => (color ? color : Color.BLUE_8)};
  font-weight: 700;
  display: inline-block;
  font-size: 18px;
  margin-bottom: 32px;

  @media (max-width: 460px) {
    font-size: 15px;
  }
`;

export default Tag;
