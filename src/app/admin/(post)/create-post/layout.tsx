import { Metadata } from "next";

export const metadata: Metadata = {
  title: "create post",
  description: "",
};

export default function CreatePostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div>{children}</div>);
}
