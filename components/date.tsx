import Head from "next/head";
import Link from "next/link";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import React from "react";

interface DateProp {
  selected: any;
  update: (value: any) => any;
}

export default function Date(prop: DateProp): JSX.Element {
  return (
    <DatePicker
      label="Basic example"
      value={prop.selected}
      onChange={(newValue) => {
        prop.update(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
