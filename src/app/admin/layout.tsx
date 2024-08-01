'use client';
import { Header } from "@/components/admin/header";
import { Navbar } from "@/components/admin/navbar";
import { ThemeProvider } from "@/components/admin/providers/theme-provider";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex relative">
        <Navbar />
        <div className="w-full">
          <Header />
          <div className="p-3"> {children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
