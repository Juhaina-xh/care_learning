"use client";

import { usePathname } from "next/navigation";
import HeaderWrapper from "@/components/Header/HeaderWrapper";
import Footer from "@/components/Footer";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideOn = ["/login", "/register"];
  const showLayout = !hideOn.includes(pathname);

  return (
    <>
      {showLayout && <HeaderWrapper />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}
