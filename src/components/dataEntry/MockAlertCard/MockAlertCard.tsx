import Color from '@src/styles/Color';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
import { isIE } from 'react-device-detect';

const IEContainer = styled.div`
  position: absolute;
  top: -80px;
  right: -60px;

  padding: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${Color.GRAY_3};
  background-color: ${Color.WHITE};
  display: grid;
  grid-template-columns: 40px 1fr;
  transition: border 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid ${Color.PURPLE_6};

    .xBtn {
      display: block;
    }
  }

  @media (max-width: 768px) {
    right: 20px;
    top: -100px;
  }

  @media (max-width: 460px) {
  }
`;

// const Container = styled(motion.div)`
//   /* position: fixed;
//   top: 20px;
//   right: 20px; */
//   position: absolute;
//   top: -80px;
//   right: -60px;

//   padding: 18px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
//   box-sizing: border-box;
//   border-radius: 8px;
//   border: 1px solid ${Color.GRAY_3};
//   background-color: ${Color.WHITE};
//   display: grid;
//   grid-template-columns: 40px 1fr;
//   transition: border 0.3s;

//   &:hover {
//     cursor: pointer;
//     border: 1px solid ${Color.PURPLE_6};

//     .xBtn {
//       display: block;
//     }
//   }

//   @media (max-width: 768px) {
//     right: 20px;
//     top: -100px;
//   }

//   @media (max-width: 460px) {
//   }
// `;

const LogoSec = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Color.GRAY_3};

  img {
    object-fit: cover;
  }
`;

const SideSec = styled.div`
  padding: 0 12px;
`;

const Corporation = styled.div`
  font-size: 13px;
  color: ${Color.GRAY_6};
  margin-bottom: 6px;
`;

const MessageTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 12px;

  @media (max-width: 420px) {
    font-size: 15px;
  }
`;

const MessageContent = styled.div`
  background-color: ${Color.GRAY_2};
  color: ${Color.GRAY_7};
  border-radius: 8px;
  padding: 12px;
  font-size: 13px;
`;

const XBtnWrap = styled.svg`
  position: absolute;
  top: -16px;
  left: -16px;
  width: 30px;
  height: 30px;
  display: none;
  z-index: 1;
`;

const XBtn = ({ onClick }) => {
  return (
    <XBtnWrap onClick={onClick} viewBox="0 0 31 30" className="xBtn">
      <circle cx="15.6797" cy="15.1645" r="14.1938" fill="#ECEDEF" stroke="#DDDFE4" />
      <g clipPath="url(#clip0_1956_82372)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.6136 10.6466C22.0041 10.256 22.0041 9.62287 21.6136 9.23235C21.223 8.84182 20.5899 8.84182 20.1994 9.23235L15.6798 13.7519L11.1602 9.23235C10.7697 8.84182 10.1365 8.84182 9.74602 9.23235C9.35549 9.62287 9.35549 10.256 9.74602 10.6466L14.2656 15.1661L9.74602 19.6857C9.35549 20.0762 9.35549 20.7094 9.74602 21.0999C10.1365 21.4904 10.7697 21.4904 11.1602 21.0999L15.6798 16.5803L20.1994 21.0999C20.5899 21.4904 21.223 21.4904 21.6136 21.0999C22.0041 20.7094 22.0041 20.0762 21.6136 19.6857L17.094 15.1661L21.6136 10.6466Z"
          fill="#666872"
        />
      </g>
      <defs>
        <clipPath id="clip0_1956_82372">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(8.67969 8.16602)"
          />
        </clipPath>
      </defs>
    </XBtnWrap>
  );
};

export const LogoSymbol = () => {
  return (
    <svg width="23" height="24" viewBox="0 0 23 24">
      <path
        d="M11.7114 0.146484C17.5346 0.146484 22.3179 4.5928 22.8725 10.2896C22.8725 10.7065 22.9418 11.0538 22.9418 11.4707C22.9418 11.8875 22.9418 12.2349 22.8725 12.6517C22.3179 18.8349 17.1186 23.6981 10.7408 23.6981C10.3249 23.6981 9.90897 23.6981 9.49302 23.6286H9.4237C9.28505 23.5591 9.1464 23.4202 9.1464 23.2812C9.1464 23.2117 9.1464 23.1423 9.21573 23.0728C9.21573 23.0033 9.28505 23.0033 9.28505 23.0033L9.63167 22.656L11.5034 20.7802C10.9488 20.9191 10.3942 20.9191 9.77032 20.9191C4.84834 20.9191 0.896887 17.1675 0.411621 12.3738C0.411621 12.2349 0.411621 12.096 0.411621 11.957C0.411621 11.8181 0.411621 11.6096 0.411621 11.4707C0.411621 11.3317 0.411621 11.1233 0.411621 10.9844C0.411621 10.8454 0.411621 10.7065 0.411621 10.5675C0.411621 10.4286 0.411621 10.2896 0.480945 10.1507C0.480945 10.0812 0.480945 10.0812 0.480945 10.0117C0.480945 9.8728 0.550268 9.66438 0.550268 9.52543C0.550268 9.38648 0.619592 9.24753 0.619592 9.10859C0.758239 8.90017 0.758239 8.69174 0.827563 8.48332C0.966211 7.99701 1.10486 7.51069 1.31283 7.02438C1.38215 6.88543 1.45148 6.74648 1.5208 6.60753C1.5208 6.53806 1.5208 6.53806 1.59012 6.46859C1.65945 6.32964 1.72877 6.26017 1.79809 6.12122C1.86742 5.9128 2.00607 5.70438 2.14471 5.49596C2.21404 5.35701 2.28336 5.21806 2.35268 5.07911C2.49133 4.87069 2.62998 4.73175 2.76863 4.52333C2.90727 4.38438 3.04592 4.17596 3.18457 4.03701C3.32322 3.89806 3.39254 3.75911 3.53119 3.68964C3.60051 3.55069 3.73916 3.48122 3.8778 3.34227C5.3336 1.88333 7.27467 0.841221 9.35438 0.424379C9.49302 0.354905 9.63167 0.354905 9.83964 0.354905C10.1863 0.285432 10.5329 0.285432 10.8795 0.215958C11.0181 0.215958 11.0875 0.215958 11.2261 0.215958C11.2954 0.146484 11.5034 0.146484 11.7114 0.146484ZM13.9991 11.4012C13.9991 10.0812 12.9592 9.03911 11.6421 9.03911C10.3249 9.03911 9.28505 10.0812 9.28505 11.4012C9.28505 12.7212 10.3249 13.7633 11.6421 13.7633C12.9592 13.7633 13.9991 12.7212 13.9991 11.4012Z"
        fill="url(#paint0_linear_1489_44558)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1489_44558"
          x1="0.411621"
          y1="7.56176"
          x2="22.9598"
          y2="17.2017"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5F3CFA" />
          <stop offset="1" stopColor="#5436da" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const variants = {
  enter: { opacity: 0, x: 120 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 120 },
};

interface Props {
  inputRef: React.MutableRefObject<HTMLInputElement>;
  closeCard: () => void;
}

function MockAlertCard({ closeCard, inputRef }: Props) {
  const handleClick = useCallback((e) => {
    inputRef.current.focus();
    closeCard();
  }, []);

  return <div></div>
}

export default MockAlertCard;
