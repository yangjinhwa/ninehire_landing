import ModalWrapper from '@src/components/wrapper/ModalWrapper';
import Color from '@src/styles/Color';
import React from 'react';
import styled from 'styled-components';
import Button from '@src/components/dataEntry/button/Button';
import { motion } from 'framer-motion';
import { isIE } from 'react-device-detect';

const Div = styled.div``;

// const EmailIcon = () => {
//   return (
//     <motion.svg
//       width="56"
//       height="40"
//       viewBox="0 0 56 40"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         type: 'spring',
//         duration: 0.5,
//         delay: 0.3,
//         bounce: 0.6,
//       }}
//       style={{ marginBottom: 24 }}
//     >
//       <g clipPath="url(#clip0_1221_40830)">
//         <path
//           d="M52.0687 36.986H3.36865C1.66865 36.986 0.368652 35.686 0.368652 33.986V3.18604C0.368652 1.48604 1.66865 0.186035 3.36865 0.186035H52.0687C53.7687 0.186035 55.0687 1.48604 55.0687 3.18604V33.986C55.0687 35.586 53.7687 36.986 52.0687 36.986Z"
//           fill="#E6E7E8"
//         />
//         <path
//           d="M51.8687 36.9861H3.56865C1.96865 36.9861 0.568652 35.7861 0.368652 34.2861L0.568652 36.8861C0.568652 38.5861 1.86865 39.8861 3.56865 39.8861H51.8687C53.4687 39.8861 54.8687 38.5861 54.8687 36.8861L55.0687 34.2861C54.9687 35.7861 53.4687 36.9861 51.8687 36.9861Z"
//           fill="#B2B5B7"
//         />
//         <path
//           d="M3.36865 36.9861H52.0687C53.7687 36.9861 55.0687 35.6861 55.0687 33.9861V33.8861L27.7687 10.2861L0.368652 33.8861V33.9861C0.368652 35.5861 1.66865 36.9861 3.36865 36.9861Z"
//           fill="#D9DADB"
//         />
//         <path
//           d="M30.9687 25.386L55.0687 4.58604V3.18604C55.0687 1.48604 53.7687 0.186035 52.0687 0.186035H3.36865C1.66865 0.186035 0.368652 1.48604 0.368652 3.18604V4.58604L24.4687 25.486C26.3687 27.086 29.1687 27.086 30.9687 25.386Z"
//           fill="#F2F2F2"
//         />
//         <path
//           d="M47.2685 6.78594C48.4283 6.78594 49.3685 5.84574 49.3685 4.68594C49.3685 3.52614 48.4283 2.58594 47.2685 2.58594C46.1087 2.58594 45.1685 3.52614 45.1685 4.68594C45.1685 5.84574 46.1087 6.78594 47.2685 6.78594Z"
//           fill={Color.PURPLE_6}
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_1221_40830">
//           <rect
//             width="54.7"
//             height="39.7"
//             fill="white"
//             transform="translate(0.368652 0.186035)"
//           />
//         </clipPath>
//       </defs>
//     </motion.svg>
//   );
// };

function SendRegisterEmailModal({ outsideClick, data }) {
  return (
    <ModalWrapper outsideClick={outsideClick}>
      {/* {!isIE && <EmailIcon />} */}
      <h5 style={{ marginBottom: 16, fontWeight: 800 }}>
        {data.email} 로 <br /> 인증 메일이 발송되었습니다.
      </h5>
      <p style={{ marginBottom: 24 }}>계정을 생성하시면, 무료 체험이 시작됩니다.</p>
      <Button block onClick={outsideClick} color="primary">
        확인
      </Button>
    </ModalWrapper>
  );
}

export default SendRegisterEmailModal;
