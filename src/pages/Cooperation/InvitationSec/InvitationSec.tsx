import React from 'react';
import styled from 'styled-components';

import Color from '@src/styles/Color';
import Body from '@src/styles/typhography/Body';
import Icon from '@src/components/icon/Icon';
import OnviewAniWrapper from '@src/components/wrapper/onview/OnviewAniWrapper';
import VerticalTab from '@src/components/dataDisplay/tab/VerticalTab/VerticalTab';

import Image from 'react-image-webp';
import InvitePeoplePng from '@assets/images/cooperation/invitePeople.png';
import InvitePeopleWebp from '@assets/images/cooperation/invitePeople.webp';
import EditViewPng from '@assets/images/cooperation/EditView.png';
import EditViewWebp from '@assets/images/cooperation/EditView.webp';
import ExportApplicantPng from '@assets/images/cooperation/ExportApplicant.png';
import ExportApplicantWebp from '@assets/images/cooperation/ExportApplicant.webp';
import LimitViewPng from '@assets/images/cooperation/LimitView.png';
import LimitViewWebp from '@assets/images/cooperation/LimitView.webp';

const Container = styled.div`
  width: 100%;
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(110.13deg, #11070d 1.18%, #56235a 59.63%, #6d12d1 100%);

  @media (max-width: 768px) {
    padding: 100px 16px;
  }

  @media (max-width: 460px) {
    padding: 80px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;

  > * + * {
    margin-left: 48px;
  }

  @media (max-width: 768px) {
    > * + * {
      margin-left: 0;
    }
  }

  @media (max-width: 460px) {
    > * + * {
      margin-bottom: 48px;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  color: ${Color.WHITE};

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const Description = styled(Body).attrs({ size: 17 })`
  word-break: keep-all;
  margin-top: 40px;
  color: ${Color.WHITE};

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 160%;
    text-align: center;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    line-height: 143%;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    img {
      position: relative;
      height: auto !important;
      top: 0 !important;
    }
  }
`;

const DesktopWrapper = styled.div`
  width: 100%;
  @media (max-width: 460px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  color: ${Color.WHITE};
  width: 100%;

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .subTitle {
    padding: 6px 0 12px;
    border-bottom: 1px solid rgba(225, 225, 225, 0.2);
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }
`;

const InvitationSecList = [
  {
    value: '채용 실무자 초대',
    subValue: '각 채용마다 필요한 실무자는 다르니까요',
    contents: (
      <ImageWrapper>
        <Image src={InvitePeoplePng} webp={InvitePeopleWebp} style={{ height: 388 }} />
      </ImageWrapper>
    ),
  },
  {
    value: '지원자 열람 제한',
    subValue: '권한을 가진 사람만 지원자를 열람해요',
    contents: (
      <ImageWrapper>
        <Image
          src={LimitViewPng}
          webp={LimitViewWebp}
          style={{ top: -40, height: 410 }}
        />
      </ImageWrapper>
    ),
  },
  {
    value: '이력서 민감정보 가리기',
    subValue: 'pdf 편집으로 민감정보를 직접 가려요',
    contents: (
      <ImageWrapper>
        <Image src={EditViewPng} webp={EditViewWebp} style={{ top: -60, height: 520 }} />
      </ImageWrapper>
    ),
  },
  {
    value: '지원자 리스트 내보내기',
    subValue: '관리자만 지원자 정보를 다운받아요',
    contents: (
      <ImageWrapper>
        <Image
          src={ExportApplicantPng}
          webp={ExportApplicantWebp}
          style={{ top: -40, height: 388 }}
        />
      </ImageWrapper>
    ),
  },
];

const InvitationSec = () => {
  return (
    <Container>
      <Wrapper>
        <OnviewAniWrapper block direction="slideUp" flex={1}>
          <TextWrapper>
            <Icon name="Lock40" style={{ marginBottom: 40 }} />
            <h4>
              민감한 개인정보를 다루니까 <br />꼭 필요한 참여자만 선택하기
            </h4>
            <Description>
              지원자의 개인정보는 매우 민감하고 소중합니다. <br />
              채용에 직접 참여하는 실무자들에게만 열람 권한을 부여할 수 있어요.
            </Description>
          </TextWrapper>
        </OnviewAniWrapper>
        <OnviewAniWrapper block direction="slideUp" delay={0.2} flex={1.5}>
          <DesktopWrapper>
            <VerticalTab tabList={InvitationSecList} tabBtnWidth={280} />
          </DesktopWrapper>
        </OnviewAniWrapper>
        {InvitationSecList.map((list, i) => {
          const { value, subValue, contents } = list;
          return (
            <MobileWrapper key={i}>
              <div className="title">{value}</div>
              <div className="subTitle">{subValue}</div>
              <OnviewAniWrapper block direction="slideUp">
                {contents}
              </OnviewAniWrapper>
            </MobileWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default InvitationSec;
