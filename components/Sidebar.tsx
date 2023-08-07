"use client";

import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageCircleIcon,
  Music2Icon,
  Settings,
  VideoIcon,
} from "lucide-react";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Talk-A-Tive",
    icon: MessageCircleIcon,
    href: "/talkative",
    color: "text-green-600",
  },
  {
    label: "Imaginate",
    icon: ImageIcon,
    href: "/image",
    color: "text-orange-600",
  },
  {
    label: "Melodymaker",
    icon: Music2Icon,
    href: "/music",
    color: "text-pink-700",
  },
  {
    label: "Codecrafter",
    icon: Code,
    href: "/code",
    color: "text-blue-400",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className=" space-y-4 flex flex-col h-full bg-[#3C3F58] text-white">
      <div className="px-3 py-4 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-14 h-16 flex">
            <Image fill alt="logo" src="/logo-no-background.png" />
          </div>
          <div className=" mx-5">
            <h1 className={cn("font-bold ", roboto.className)}>
              Your Imagination
            </h1>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
