import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import DashboardSec from './Dashboard/ReportSec';
import CopySec from './CopySec/CopySec';
import MainSec from './MainSec/MainSec';
import RegisterSec from './RegisterSec/RegisterSec';
import KanbanSec from './KanbanSec/KanbanSec';
import CollaborationSec from './CollaborationSec/CollaborationSec';
import CommunicationSec from './CommunicationSec/CommunicationSec';
import FunctionsSec from './FunctionsSec/FunctionsSec';
import Footer from '@src/components/navigation/Footer/Footer';
import PartnersSec from './PartnersSec/PartnersSec';
import { MetaData } from '@src/typings/metaData';
import Awards from './Awards/Awards';

function Home() {
  // const [openModal, setOpenModal] = useState(isIE);
  // const closeModal = useCallback(() => setOpenModal(false), []);

  return (
    <>
      <Helmet>
        <title>{MetaData.main.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={MetaData.main.description} />
      </Helmet>
      {/* <Test /> */}
      <MainSec />
      <CopySec />
      <RegisterSec />
      <KanbanSec />
      <CollaborationSec />
      <CommunicationSec />
      <DashboardSec />
      <FunctionsSec />
      <PartnersSec />
      {/* <Awards /> */}
      <Footer flat />
      {/* {openModal && (
        <BrowserAlertModal
          open={openModal}
          close={closeModal}
          browserName={browserName}
        />
      )} */}
    </>
  );
}

export default Home;
