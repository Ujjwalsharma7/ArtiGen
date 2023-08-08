"use client";

import { ArrowRight, MessageCircleIcon } from "lucide-react";
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
];

const DashboardPage = () => {
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
