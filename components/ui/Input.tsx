"use client";
import React from "react";
import { Input } from "@chakra-ui/react";

type InputProps = {
  type: string;
  placeholder: string;
};

const CInput = ({ type, placeholder }: InputProps) => {
  return <Input type={type} placeholder={placeholder} />;
};

export default CInput;
