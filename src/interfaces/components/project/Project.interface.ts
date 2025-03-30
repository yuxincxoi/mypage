export interface Project {
  id: number;
  title: string;
  subTitle: string;
  type: string;
  stack: string[];
  exp: string;
  img: string[];
  function: string[][];
  character: string[];
  troubleShooting: {
    trouble: string;
    shooting: string;
    result: string;
  };
  comment: string;
}
