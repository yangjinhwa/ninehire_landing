export enum LayoutTypeEnum {
  TOP = 'topType',
  TAB = 'tabsType',
  LEFT = 'leftType',
  HAMBURGER = 'hamburgerType',
}

interface ILayoutTypes {
  key: LayoutTypeEnum;
  value: string;
}

const layoutTypes: ILayoutTypes[] = [
  {
    key: LayoutTypeEnum.TOP,
    value: 'top 타입',
  },
  {
    key: LayoutTypeEnum.LEFT,
    value: 'left 타입',
  },
  {
    key: LayoutTypeEnum.TAB,
    value: 'tab 타입',
  },
  {
    key: LayoutTypeEnum.HAMBURGER,
    value: 'hamburger 타입',
  },
];
