type RawNumber = number;

type Unit = 'px' | 'rem';

type Size = `${RawNumber}${Unit}`;

export type UnderlineProps = {
  w: Size;
  h: Size;
  mt?: Size;
};
