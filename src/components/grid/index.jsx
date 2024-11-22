import { Grid2, Grid2Props } from "@mui/material";

const GridComponent = ({ children, ...props }) => {
  return <Grid2 {...props}>{children}</Grid2>;
};

export default GridComponent;
