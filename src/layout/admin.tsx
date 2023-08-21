import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminLayout({
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
