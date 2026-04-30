import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  // console.log("PropertyList COMPONENT -_ PAGES ROUTER");
  return (
    <>
      <Container>PROPERTY LIST</Container>
    </>
  );
};

export default withLayoutBasic(PropertyList);
