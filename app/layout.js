import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebarr from "./components/Sidebar";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Todo List",
  description: "Simple todo list project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      <SidebarProvider>
        <Sidebarr />
        <SidebarTrigger />
        
        {children}
      </SidebarProvider>
      </body>
    </html>
  );
}
