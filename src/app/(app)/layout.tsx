import AppProvider from "@/context/appContext";
import { Header } from "../components/ui/Header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppProvider>
        <Header />
        <main className="pt-16">{children}</main>
      </AppProvider>
    </>
  );
}
