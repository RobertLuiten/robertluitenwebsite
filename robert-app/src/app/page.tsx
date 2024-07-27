"use client"

import { Sitebar, SitebarProps } from "@/components/sitebar"
import React from "react";

/**
 * Creates the homepage of the website!
 * @returns The homepage of the website!
 */
export default function Home() {

  //The props for the sitebar
  const sitebarprops : SitebarProps = {pageName : "Home"};

  return (
    <main>
      <p>Test</p>
      <p>Another line</p>
      <a href="/dashboard">Hey wassup</a>
    </main>
  );
}
