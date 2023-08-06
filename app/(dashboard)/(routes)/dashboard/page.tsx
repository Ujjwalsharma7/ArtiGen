import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      hellooooo
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
