import { CheckIcon } from '@src/components/svg/CheckIcon';
import { Font } from '@src/styles/typhography/Font';
import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 54px;
  }

  @media (max-width: 768px) {
    & + & {
      margin-top: 54px;
    }
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #666872;
  min-height: 60px;

  @media (max-width: 768px) {
    min-height: 48px;
  }
`;

const FuncSec = styled.div`
  min-width: 211px;

  @media (max-width: 768px) {
    min-width: 110px;
  }
`;

const FuncStyle = styled.p`
  white-space: pre-line;
  word-break: keep-all;
  font-size: 18px;
  line-height: 28px;
  color: #282a31;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const TitleStyle = styled.p`
  font-size: 21px;
  line-height: 28px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
  }
`;

const InfoSec = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileInfoSec = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

const Tag = styled.div`
  padding: 4px 26px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 28px;
`;

const MobileFontStyle = styled(Font).attrs(({ color }) => ({
  size: 12,
  height: 16,
  weight: 'bold',
  color,
}))`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const TagStyle = [
  { border: '1px solid #FFD9B0', background: '#FFF9F0', color: '#C96120' },
  { border: '1px solid #DCD5FF', background: '#F6F3FF', color: '#5F3CFA' },
  { border: '1px solid #B7E1CA', background: '#EFF9F3', color: '#258A5E' },
];

const MobileColorStyle = ['#EF8132', '#5F3CFA', '#39B178'];

interface Props {
  title: string;
  funcs: { title: string; infos: string[] }[];
}

function PaymentTable({ title, funcs }: Props) {
  return (
    <Container>
      <Section>
        <TitleStyle>{title}</TitleStyle>
      </Section>
      {funcs.map((func, i) => (
        <Section key={i} style={{ borderBottom: '1px solid #DDDFE4' }}>
          <FuncSec>
            <FuncStyle>{func.title}</FuncStyle>
          </FuncSec>
          {func.infos.map((info, i) => (
            <InfoSec key={i}>
              {info !== '미지원' ? (
                <Tag style={TagStyle[i]}>{info}</Tag>
              ) : (
                <Font size={18} height={28} weight={400} color="#5B717C">
                  {info}
                </Font>
              )}
            </InfoSec>
          ))}
          {func.infos.map((info, i) => (
            <MobileInfoSec key={i}>
              {info === '미지원' ? (
                <CheckIcon color="#E6EBEE" />
              ) : info === '제공' ? (
                <CheckIcon color={MobileColorStyle[i]} />
              ) : (
                <MobileFontStyle color={MobileColorStyle[i]}>{info}</MobileFontStyle>
              )}
            </MobileInfoSec>
          ))}
        </Section>
      ))}
    </Container>
  );
}

export default memo(PaymentTable);
