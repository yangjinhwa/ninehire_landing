import React from 'react';
import MainSec from '@src/pages/ApplicantManagement/MainSec/MainSec';
import CopySec from './CopySec/CopySec';
import KanbanSec from './KanbanSec/KanbanSec';
import ApplicantManagementSec from './ApplicantManagementSec/ApplicantManagementSec';
import TalentPoolSec from './TalentPoolSec/TalentPoolSec';
import DupApplicantSec from './DupApplicantSec/DupApplicantSec';
import NextFuncSec from './ApplicantManagementSec/NextFuncSec/NextFuncSec';
import Footer from '@src/components/navigation/Footer/Footer';
import { Helmet } from 'react-helmet';

function ApplicantManagement() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="기능" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ninehire.com" />
        <meta
          property="og:description"
          content="번거로운 채용은 그만, 채용담당자를 위한 쉽지만 강력한 기능을 만나보세요."
        />
        <meta
          property="og:image"
          content="https://cdn.ninehire.com/dev/og_tag_800_400.png"
        />
        <title>나인하이어 :: 지원자 관리</title>
      </Helmet>
      <MainSec />
      <CopySec />
      <KanbanSec />
      <ApplicantManagementSec />
      <TalentPoolSec />
      <DupApplicantSec />
      <NextFuncSec />
      <Footer flat />
    </>
  );
}

export default ApplicantManagement;
