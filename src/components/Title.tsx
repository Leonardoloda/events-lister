import { FC } from "react";

export interface TitleProps {
  label: string;
}

const Title: FC<TitleProps> = ({ label }) => {
  return <h1 className="text-4xl text-lime-800 font-bold">{label}</h1>;
};

export default Title;
