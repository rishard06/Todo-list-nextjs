import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebarr from "./components/Sidebar";
import { Montserrat } from "next/font/google";
import DarkModeBtn from "./components/DarkModeBtn";
import ThemesProvider from "./components/ThemeProvider";
import ReactQueryProvider from "./components/reactQueryProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Todo List",
  description: "Simple todo list project",
  icons: {
    icon: "/to-do-list.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${montserrat.className} antialiased`}>
        <ThemesProvider>
          <SidebarProvider>
            <SidebarTrigger className="my-3 mx-2" />
            <Sidebarr />
            <DarkModeBtn />
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </SidebarProvider>
        </ThemesProvider>
      </body>
    </html>
  );
}
