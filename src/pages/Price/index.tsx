import Footer from '@src/components/navigation/Footer/Footer';
import React from 'react';
import { Helmet } from 'react-helmet';
import PaymentInfo from './Info/PaymentInfo';
import PaymentMain from './Payment/PaymentMain';

function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>나인하이어 :: 가격 정책</title>
        <meta
          property="description"
          content="채용솔루션 나인하이어는 회사의 규모와 필요에 맞는 구독 플랜을 제공합니다"
        />
      </Helmet>
      <PaymentMain />
      <PaymentInfo />
      <Footer />
    </>
  );
}

export default Index;
