import Icon from '@src/components/icon/Icon';
import React, { ReactElement } from 'react';

import { RootPath } from '@src/routes/routePath';
import { FooterIdMap, NavIdMap } from '@src/typings/idMap';

export enum NavMenuList {
  FEATURE = 'feature-menu',
  SOLUTION = 'solution-menu',
  PRICE = 'price-menu',
  INQUIRY = 'inquiry-menu',
  SUPPORT = 'support-menu',
}

export enum MenuType {
  DROPDOWN = 'dropdown-menu-type',
  LINK = 'link-menu-type',
}

export enum FunctionMenuType {
  RECEPTION = 'Reception-System',
  MANAGE_BOARD = 'Applicant-management-board',
  COMMUNICATION = 'Applicant communication',
  COLLABORATION = 'Evaluator Collaboration',
  DASHBAORD = 'dashboard',
  FUNCTIONS = 'functions',
}

export interface ISubMenu {
  title: string;
  description?: string;
  value: string;
  icon?: ReactElement | string;
  linkto?: string;
  outLinkto?: string;
  scrollTop?: number | undefined;
  isNew?: boolean;
  navId?: string;
  footerId?: string;
}

interface INavMenuList {
  type: string;
  title: string;
  value: string;
  linkto?: string;
  subMenu?: ISubMenu[];
  isNew?: boolean;
  navId?: string;
  footerId?: string;
}

export const navMenuList: INavMenuList[] = [
  {
    type: MenuType.DROPDOWN,
    value: NavMenuList.FEATURE,
    title: '기능',
    isNew: true,
    subMenu: [
      {
        title: '접수 시스템',
        description: '채용을 막 시작하신다면',
        icon: <Icon name="DocumentImg32" />,
        value: '1',
        linkto: RootPath.EmploymentSystem,
        navId: NavIdMap.RECEPTION,
        footerId: FooterIdMap.RECEPTION,
      },
      {
        title: '지원자 관리',
        description: '지원서를 자동으로 정리해요',
        icon: <Icon name="EvaluatingImg32" />,
        value: '2',
        linkto: RootPath.ApplicantManagement,
        navId: NavIdMap.MANAGEMENT,
        footerId: FooterIdMap.MANAGEMENT,
      },
      {
        title: '지원자 연락',
        description: '전화, 이메일 말고 채팅으로',
        icon: <Icon name="TalkImg32" />,
        value: '3',
        linkto: RootPath.ApplicantContact,
        navId: NavIdMap.COMMUNICATION,
        footerId: FooterIdMap.COMMUNICATION,
      },
      {
        title: '평가자끼리 협업',
        description: '지원자를 평가할 때',
        icon: <Icon name="PeopleImg32" />,
        value: '4',
        linkto: RootPath.Cooperation,
        navId: NavIdMap.COOPERATION,
        footerId: FooterIdMap.COOPERATION,
      },
      {
        title: '대시보드 / 리포트',
        description: '채용을 데이터로 확인하세요',
        icon: <Icon name="DashboardImg32" />,
        value: '5',
        linkto: RootPath.Dashboard,
        navId: NavIdMap.DASHBOARD,
        footerId: FooterIdMap.DASHBOARD,
      },
    ],
  },
  {
    type: MenuType.LINK,
    linkto: RootPath.Price,
    value: NavMenuList.PRICE,
    title: '가격 정책',
    navId: NavIdMap.PRICE,
    footerId: FooterIdMap.PRICE,
  },

  {
    type: MenuType.DROPDOWN,
    value: NavMenuList.SOLUTION,
    title: '리소스',
    subMenu: [
      {
        title: '업데이트 소식',
        icon: <Icon name="BellO24" />,
        value: '1',
        outLinkto: RootPath.UpdateInfoNotion,
        navId: NavIdMap.UPDATE,
        footerId: FooterIdMap.UPDATE,
      },
      {
        title: 'FAQ',
        icon: <Icon name="HelpO24" />,
        value: '2',
        outLinkto: RootPath.FaqNotion,
        navId: NavIdMap.FAQ,
        footerId: FooterIdMap.FAQ,
      },
      {
        title: '사용 가이드',
        icon: <Icon name="QuestionO24" />,
        value: '2',
        outLinkto: RootPath.GuideNotion,
        navId: NavIdMap.GUIDE,
        footerId: FooterIdMap.GUIDE,
      },
      {
        title: '서비스 소개서',
        icon: <Icon name="Download24" />,
        value: '2',
        outLinkto: 'https://cdn.ninehire.com/document/service-introduction.pdf',
        navId: NavIdMap.LEAFLET,
        footerId: FooterIdMap.LEAFLET,
      },
    ],
  },
  {
    type: MenuType.LINK,
    linkto: RootPath.Inquiry,
    value: NavMenuList.INQUIRY,
    title: '도입 문의',
    navId: NavIdMap.ASK,
    footerId: FooterIdMap.ASK,
  },
];
