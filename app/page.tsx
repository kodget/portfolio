import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { SelectedWork } from "@/components/SelectedWork";
import { Healthtech } from "@/components/Healthtech";
import { Capabilities } from "@/components/Capabilities";
import { Credentials } from "@/components/Credentials";
import { HumanSide } from "@/components/HumanSide";
import { HowIWork } from "@/components/HowIWork";
import { OtherThings } from "@/components/OtherThings";
import { Mantra } from "@/components/Mantra";
import { NavigationSignal } from "@/components/NavigationSignal";

export default function Home() {
  return (
    <main className="bg-[var(--surface)] flex flex-col selection:bg-[var(--color-brand)] selection:text-[var(--color-off-white)] relative">
      <NavigationSignal />
      <Hero />
      <Philosophy />
      <SelectedWork />
      <Healthtech />
      <Capabilities />
      <Credentials />
      <HumanSide />
      <HowIWork />
      <OtherThings />
      <Mantra />
    </main>
  );
}
