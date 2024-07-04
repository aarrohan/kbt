import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import TopTextSection from "./TopTextSection";
import BottomTextSection from "./BottomTextSection";
import VirtualTrialRoomSection from "./VirtualTrialRoomSection";
import DiscoverSection from "./DiscoverSection";

export const metadata: Metadata = {
  title: "About - KBT",
};

export default function About() {
  return (
    <>
      <HeroSection />
      <TopTextSection />
      <BottomTextSection />
      <VirtualTrialRoomSection />
      <DiscoverSection />
    </>
  );
}
