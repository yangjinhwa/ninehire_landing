import React, { FunctionComponent } from "react";

export interface TabProps {
  id: string | number;
  order: number;
  value: string;
  component: any;
  isCount: boolean;
  moveToLeft: number;
  underlineWidth: number;
  count?: number;
  linkto?: string;
}

function Comp1() {
  return <div>썸띵</div>;
}

function Comp2() {
  return <div>썸띵2</div>;
}

function Comp3() {
  return <div>썸띵3</div>;
}

const TabsList: TabProps[] = [
  {
    id: 0,
    order: 0,
    value: "123",
    component: <Comp1 />,
    isCount: false,
    moveToLeft: 0,
    underlineWidth: 0,
    linkto: "/main/home/price",
  },
  {
    id: 1,
    order: 1,
    value: "으음",
    component: <Comp2 />,
    isCount: true,
    count: 6,
    moveToLeft: 0,
    underlineWidth: 0,
    linkto: "/main/home/support",
  },
  {
    id: 3,
    order: 2,
    value: "다른탭이용",
    component: <Comp3 />,
    isCount: false,
    moveToLeft: 0,
    underlineWidth: 0,
    linkto: "/main/home/login",
  },
];

export default TabsList;
