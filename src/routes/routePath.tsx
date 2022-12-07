import React, { ReactElement } from 'react';
import loadable from '@loadable/component';

const Price = loadable(() => import('@src/pages/Price'));
const Policy = loadable(() => import('@src/pages/Policy'));
const Terms = loadable(() => import('@src/pages/Terms'));
const EmploymentSystem = loadable(() => import('@src/pages/EmploymentSystem'));
const ApplicantManagement = loadable(() => import('@src/pages/ApplicantManagement'));
const ApplicantContact = loadable(() => import('@src/pages/ApplicantContact'));
const Cooperation = loadable(() => import('@src/pages/Cooperation'));
const Dashboard = loadable(() => import('@src/pages/Dashboard'));
const Inquiry = loadable(() => import('@src/pages/Inquiry/Inquiry'));

export enum RootPath {
  Main = '/',
  Price = '/price',
  Policy = '/policy',
  Terms = '/terms',
  Inquiry = '/inquiry',
  Faq = '/faq',

  // 기능 페이지
  EmploymentSystem = '/employment-system',
  ApplicantManagement = '/applicant-management',
  ApplicantContact = '/applicant-contact',
  Cooperation = '/cooperation',
  Dashboard = '/dashboard',

  // 외부링크
  UpdateInfoNotion = 'https://guide.ninehire.com/cf80c052-72c5-492c-8358-2a8e41720cfd',
  FaqNotion = 'https://guide.ninehire.com/4ded6206-5cb6-4591-a6f1-a580b24e5992',
  GuideNotion = 'https://guide.ninehire.com/',
}

interface IRouteList {
  path: string;
  component: ReactElement;
  isProtected?: boolean;
}

export const rootRouteList: IRouteList[] = [
  {
    path: RootPath.Price,
    component: <Price />,
  },
  {
    path: RootPath.Policy,
    component: <Policy />,
  },
  {
    path: RootPath.Inquiry,
    component: <Inquiry />,
  },
  {
    path: RootPath.Terms,
    component: <Terms />,
  },
  {
    path: RootPath.EmploymentSystem,
    component: <EmploymentSystem />,
  },
  {
    path: RootPath.ApplicantManagement,
    component: <ApplicantManagement />,
  },
  {
    path: RootPath.ApplicantContact,
    component: <ApplicantContact />,
  },
  {
    path: RootPath.Cooperation,
    component: <Cooperation />,
  },
  {
    path: RootPath.Dashboard,
    component: <Dashboard />,
  },
];
