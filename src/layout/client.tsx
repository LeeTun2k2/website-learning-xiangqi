import React from "react";
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      <Header />
        {children}
      <Footer />
    </React.Fragment>
  )
}
