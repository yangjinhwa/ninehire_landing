import React from 'react';

import Footer from '@src/components/navigation/Footer/Footer';
import EvaluationNoteSec from './EvaluationNoteSec/EvaluationNoteSec';
import GoogleCalendarSec from './GoogleCalendarSec/GoogleCalendarSec';
import InvitationSec from './InvitationSec/InvitationSec';
import MainSec from './MainSec/MainSec';
import MentionSec from './MentionSec/MentionSec';
import NextFuncSec from './NextFuncSec/NextFuncSec';
import SlackSec from './SlackSec/SlackSec';
import TeamCommentSec from './TeamCommentSec/TeamCommentSec';
import { Helmet } from 'react-helmet';

function Cooperation() {
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
        <title>나인하이어 :: 평가자 협업</title>
      </Helmet>
      <MainSec />
      <TeamCommentSec />
      <InvitationSec />
      <MentionSec />
      {/* <EvaluationNoteSec /> */}
      <SlackSec />
      <GoogleCalendarSec />
      <NextFuncSec />
      <Footer flat />
    </>
  );
}

export default Cooperation;
