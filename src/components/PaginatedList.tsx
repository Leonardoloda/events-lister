import { FC, ReactNode } from "react";

export interface PaginatedListProps {
  children: ReactNode;
}

const PaginatedListProps: FC<PaginatedListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default PaginatedListProps;
