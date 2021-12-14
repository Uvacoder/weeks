import Head from "next/head";
import Link from "next/link";
import Dot from "./dot";
import Button from "@mui/material/Button";

export default function Weeks(props) {
  var arr = [1, 2, 3];
  var renderedOutput = arr.map((item) => <div> {item} </div>);
  console.log(renderedOutput);

  return (
    <>
      <Head>
        <title>Weeks</title>
      </Head>
      <>
        <Button variant="contained">Hello World</Button>;{generateCircles(25)}
      </>
    </>
  );
}

function generateCircles(total: number) {
  return Array.from({ length: total }, (x, i) => <Dot>{i.toString()}</Dot>);
}
