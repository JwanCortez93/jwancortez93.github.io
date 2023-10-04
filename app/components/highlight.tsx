"use client";

import hljs from "highlight.js";
import "@/assets/highlight/dracula.min.css";
import { useEffect } from "react";

export const Highlight = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <></>;
};
