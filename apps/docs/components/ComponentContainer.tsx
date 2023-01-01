import { CSSProperties, FC, ReactNode } from "react";

const containerStyles: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #FFAC41",
  padding: "20px 5px",
  borderRadius: "10px",
  marginBottom: "20px",
};

const titleStyles: CSSProperties = {
  fontSize: "1.5em",
  fontWeight: "500",
  color: "#fff",
};

interface Props {
  children: ReactNode;
  title: string;
}

export const ComponentContainer: FC<Props> = ({ children, title }) => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>{title}</h3>
      {children}
    </div>
  );
};
