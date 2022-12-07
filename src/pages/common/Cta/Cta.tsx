import React, { useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Color from '@src/styles/Color';
import OnviewAniStagger from '@src/components/wrapper/onview/OnviewAniStagger';
import EmailInput from '@src/pages/common/EmailInput';
import Theme from '@src/styles/Theme';
import { LogoSymbol } from '@src/components/dataEntry/MockAlertCard/MockAlertCard';
import Button from '@src/components/dataEntry/button/Button';
import RegisterModal from '@src/pages/Home/MainSec/RegisterModal';
import { Link } from 'react-router-dom';
import { RootPath } from '@src/routes/routePath';
import { CtaBtnIdMap } from '@src/typings/idMap';

const flatStyle = css`
  background: transparent;
  h3 {
    background: ${Color.PurpleGradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Wrap = styled.div<{
  flat?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  word-break: keep-all;
  padding: 80px 0;
  border-radius: 30px;
  background: linear-gradient(175.98deg, #fff5f5 4.29%, #f4f0ff 58.94%, #f0f2ff 95.88%);
  color: ${Color.GRAY_8};

  ${({ flat }) => flat && flatStyle}

  h3 {
    font-weight: 800;
    text-align: center;
    line-height: 1.4;
    margin-bottom: 32px;
  }

  a {
    display: flex;
    justify-content: center;
  }

  p {
    margin-bottom: 32px;
    text-align: center;
    font-size: 20px;
  }

  .br {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 60px 12px;
    .br {
      display: block;
    }

    p {
      font-size: 14px;
    }
  }
`;

const Container = styled.section`
  /* position: relative; */
  padding: 70px 60px;
  width: 100%;
  max-width: ${Theme.landingGrid};
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 12px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
`;

const AppIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background-color: white;
  border: 1px solid ${Color.GRAY_3};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  svg {
    width: 40px;
    height: 40px;
  }
`;
interface Props {
  flat?: boolean;
}
function Cta({ flat }: Props) {
  const [cardShow, setCardShow] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  function openRegisterModal() {
    setRegisterModalVisible(true);
  }

  function closeRegisterModal() {
    setRegisterModalVisible(false);
  }
  const closeCard = useCallback(() => {
    setCardShow(false);
  }, []);

  return (
    <>
      <Container>
        {/* {!flat && (
          <OnviewAniWrapper direction="slideUp" delay={0.5}>
            {cardShow && <MockAlertCard inputRef={inputRef} closeCard={closeCard} />}
          </OnviewAniWrapper>
        )} */}

        <Wrap flat={flat}>
          {flat && (
            <AppIcon>
              <LogoSymbol />
            </AppIcon>
          )}
          <OnviewAniStagger>
            <h3>바로 이용해 보실 수 있습니다!</h3>
            <p>
              <strong style={{ color: Color.PURPLE_7 }}>가상의 지원자</strong>가 여러분을
              기다립니다. <br />
              지금 바로 새로운 채용을 경험해보세요.
            </p>
            <BtnWrap>
              <Link
                id={CtaBtnIdMap.ASK}
                to={RootPath.Inquiry}
                style={{ marginRight: 12 }}
              >
                <Button size="lg" color="default">
                  도입문의
                </Button>
              </Link>
              <Button
                id={CtaBtnIdMap.LOGIN}
                size="lg"
                color="primary"
                onClick={openRegisterModal}
              >
                무료로 체험하기
              </Button>
            </BtnWrap>
          </OnviewAniStagger>
        </Wrap>
      </Container>
      {registerModalVisible && <RegisterModal onClose={closeRegisterModal} />}
    </>
  );
}

export default Cta;
