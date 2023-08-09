import React from "react";

import Heading from "@/components/Heading";

import { MessageCircleIcon } from "lucide-react";

const Talkative = () => {
  return (
    <div>
      <Heading
        title="Talk-A-Tive"
        description="Talk to the smartest AI"
        icon={MessageCircleIcon}
        iconColor="text-green-600"
        bgColor="bg-green-600/10"
      />
    </div>
  );
};

export default Talkative;
