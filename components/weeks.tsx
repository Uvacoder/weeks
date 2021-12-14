import Head from "next/head";
import Link from "next/link";
import Dot from "./dot";
import Date from "./date";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import React from "react";
import { Box } from "@mui/system";

export default function Weeks(props) {
  const [birth, setBirth] = React.useState<any>(null);
  return (
    <>
      <Head>
        <title>Weeks</title>
      </Head>
      <>

        <Box m={2} sx={{ display: "grid" }}>
        <Date selected={birth} update={setBirth} />
        
        </Box>
        <Box sx={{ display: "inline-grid" }}>
          <Button variant="contained">Hello World</Button>;{generateCircles(25)}
        </Box>
      </>
    </>
  );
}

function generateCircles(total: number) {
  return Array.from({ length: total }, (x, i) => <Dot>{i.toString()}</Dot>);
}
