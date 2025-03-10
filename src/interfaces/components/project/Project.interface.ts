export interface Project {
  id: number;
  title: string;
  type: string;
  exp: string;
  function: string[];
  character: string[];
  troubleShooting: {
    trouble: string;
    shooting: string;
    result: string;
  };
  comment: string;
}
