"use client";

import {
  ArrowRight,
  MessageCircleIcon,
  ImageIcon,
  Music2Icon,
  Code,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
const tools = [
  {
    label: "Talk-A-Tive",
    icon: MessageCircleIcon,
    href: "/talkative",
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    label: "Imaginate",
    icon: ImageIcon,
    href: "/image",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
  {
    label: "Melodymaker",
    icon: Music2Icon,
    href: "/music",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Codecrafter",
    icon: Code,
    href: "/code",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    label: "Videofy",
    icon: VideoIcon,
    href: "/video",
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Empower Your Innovations with ARTIGEN
        </h2>
        <p className=" text-muted-foreground font-light text-sm md:text-lg text-center">
          Some random text that I will think of later, hehehe hehehe
        </p>
      </div>
      <div className="px-4 md:px-28 lg:px-44 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className=" font-semibold">{tool.label}</div>
              <div className=" absolute right-10 lg:right-48">
                <ArrowRight className="w-5 h-5 " />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
