import { HeaderComp } from "@/components/client/shared/HeaderComp";
import { Metadata } from "next";
import LayoutStyle from './layout.module.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={LayoutStyle.container}>
      <HeaderComp />
      {children}
    </div>
  );
}
