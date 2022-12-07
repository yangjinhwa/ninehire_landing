import React from 'react';
import Image from 'react-image-webp';
import Func1Webp from '@assets/images/Home/functions/1.webp';
import Func1Png from '@assets/images/Home/functions/1.png';
import Func2Webp from '@assets/images/Home/functions/2.webp';
import Func2Png from '@assets/images/Home/functions/2.png';
import Func3Webp from '@assets/images/Home/functions/3.webp';
import Func3Png from '@assets/images/Home/functions/3.png';
import Func4Webp from '@assets/images/Home/functions/4.webp';
import Func4Png from '@assets/images/Home/functions/4.png';
import Func5Webp from '@assets/images/Home/functions/5.webp';
import Func5Png from '@assets/images/Home/functions/5.png';
import Func6Webp from '@assets/images/Home/functions/6.webp';
import Func6Png from '@assets/images/Home/functions/6.png';
import Func7Webp from '@assets/images/Home/functions/7.webp';
import Func7Png from '@assets/images/Home/functions/7.png';
import Func8Webp from '@assets/images/Home/functions/8.webp';
import Func8Png from '@assets/images/Home/functions/8.png';
import Func9Webp from '@assets/images/Home/functions/9.webp';
import Func9Png from '@assets/images/Home/functions/9.png';

const functions = [
  {
    tag: ['지원자 연락', '안내 템플릿'],
    title: '채팅으로 진행하는 <br /> 깔끔한 지원자 연락',
    imgSec: <Image src={Func1Png} webp={Func1Webp} />,
  },
  {
    tag: ['지원서편집', '지원서 템플릿'],
    title: '지원자가 더 궁금할 땐 <br />지원서 양식 편집',
    imgSec: <Image src={Func2Png} webp={Func2Webp} />,
  },
  {
    tag: ['비공개 채용'],
    title: '민감한 개인정보를 다루니까 <br />열람 권한 설정 하기',
    imgSec: <Image src={Func3Png} webp={Func3Webp} />,
  },
  {
    tag: ['일정관리', '구글캘린더 연동'],
    title: '채용 일정이 표시된 <br /> 캘린더 & 구글 캘린더 연동',
    imgSec: <Image src={Func4Png} webp={Func4Webp} />,
  },
  {
    tag: ['평가자 협업'],
    title: '@멘션 한 번으로 <br /> 팀원에게 지원자 공유',
    imgSec: <Image src={Func5Png} webp={Func5Webp} />,
  },
  {
    tag: ['지원자 연락', '일정조율'],
    title: '복잡했던 일정 조율도 <br />쉽게 해결하기',
    imgSec: <Image src={Func6Png} webp={Func6Webp} />,
  },
  {
    tag: ['실시간 알림', '알림톡'],
    title: '지원자에게도 실시간 알림',
    imgSec: <Image src={Func7Png} webp={Func7Webp} />,
  },
  {
    tag: ['채용 대시보드', '리포트'],
    title: '데이터로 확인하는 채용 통계',
    imgSec: <Image src={Func8Png} webp={Func8Webp} />,
  },
  {
    tag: ['인재풀', '중복지원확인'],
    title: '지원했던 인재를 모두 모아둔<br />인재풀 기능',
    imgSec: <Image src={Func9Png} webp={Func9Webp} />,
  },
];

export default functions;
