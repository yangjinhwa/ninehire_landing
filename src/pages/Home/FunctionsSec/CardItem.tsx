import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
  width: 100%;
  background: ${Color.WHITE};
  border: 1px solid ${Color.GRAY_3};
  box-sizing: border-box;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 360px;
  }

  @media (max-width: 460px) {
    height: 430px;
  }
`;

const TagSec = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const CardTag = styled.div`
  display: inline-block;
  padding: 6px 12px;
  background-color: ${Color.GRAY_3};
  border-radius: 50px;
  margin-right: 8px;
  font-size: 14px;
  color: ${Color.GRAY_7};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;

const TitleSec = styled.div`
  padding: 30px;
  text-align: left;
  word-break: keep-all;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

const ImgSec = styled.div`
  width: 100%;
  height: 357px;
  background: linear-gradient(221.08deg, #e3e6f0 9.51%, #ced1d9 75.44%);

  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;

function CardItem({ data }) {
  const { tag, title, imgSec } = data;
  return (
    <CardWrap>
      <TitleSec>
        <h5
          style={{ lineHeight: 1.3 }}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <TagSec>
          {data.tag.map((item, i) => {
            return <CardTag key={i}>#{item}</CardTag>;
          })}
        </TagSec>
      </TitleSec>

      <ImgSec>{imgSec}</ImgSec>
    </CardWrap>
  );
}

export default CardItem;
