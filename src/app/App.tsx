import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GlobalStyle from '@src/styles/GlobalStyle';
import RootRoute from '../routes/RootRoute';
import styled, { css } from 'styled-components';
import NavWrapper from '@src/components/wrapper/NavWrapper';

const ContentsTypeMap = {
  topType: css`
    height: 100%;
    padding-top: 100px;

    @media (max-width: 768px) {
      height: 100%;
      padding-top: 12px;
    }
  `,
  leftType: css`
    float: right;
    width: 100%;
    height: 100%;
    padding-left: 240px;
    margin-top: 40px;

    @media (max-width: 768px) {
      padding-left: 0;
      margin-top: 30px;
    }
  `,
  tabType: css`
    margin-top: 40px;
    height: 100%;

    @media (max-width: 768px) {
      margin-top: 30px;
    }
  `,
  hamburgerType: css`
    height: 100%;
    padding-top: 100px;
  `,
};

const Layout = styled.div`
  width: 100%;
  position: relative;
`;

interface ILocation {
  from: {
    pathname: string;
  };
  background: any;
}

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.ninehire.com/sitelogo/favicon.png"
        />
      </Helmet>
      <GlobalStyle mode="white" />
      <Layout>
        <NavWrapper />
        <div>
          <RootRoute />
        </div>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
