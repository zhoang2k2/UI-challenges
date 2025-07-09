import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import type { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="default-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
