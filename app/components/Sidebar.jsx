import React from "react";
import { SidebarFooter } from "@/components/ui/sidebar";
import {
  Calendar,
  Home,
  ListCheck,
  Search,
  LogIn,
  StickyNote,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import MainPage from "./MainPage";
import { auth } from "@/lib/auth";
import AuthButton from "./AuthButton";

const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Today",
    url: "#",
    icon: ListCheck,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Sticky Notes",
    url: "#",
    icon: StickyNote,
  },
];

async function Sidebarr() {
  const session = await auth();

  return (
    <>
      <Sidebar variant="sidebar | floating | inset" className="shadow-lg">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-lg flex justify-between">
              <span>Task</span>
              <SidebarTrigger />
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <AuthButton />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default Sidebarr;
