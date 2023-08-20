import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LandingNavbar } from "@/components/LandingNavbar";
import { LandingHero } from "@/components/LandingHero";

const Landingpage = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
};

export default Landingpage;
