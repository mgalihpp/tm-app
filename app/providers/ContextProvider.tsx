"use client";

import React, { useEffect, useState } from "react";
import { GlobalProvider } from "../context/globalProvider";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
