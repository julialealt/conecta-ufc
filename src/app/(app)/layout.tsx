import { Header } from "../components/ui/Header";
import AppProvider from "@/context/appContext";

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
