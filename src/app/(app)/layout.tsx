import { Header } from "../components/ui/Header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
    </>
  );
}
