import styled from 'styled-components';

type Align = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end';
type Justify = 'space-between' | 'center';
type Direction = 'row' | 'column' | 'row-reverse';

const FlexBox = styled.div<{ direction?: Direction; align?: Align; justify?: Justify }>`
  display: flex;
  align-items: ${props => props.align || 'center'};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
`;

export default FlexBox;
