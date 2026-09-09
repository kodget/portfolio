import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { SelectedWork } from "@/components/SelectedWork";
import { Healthtech } from "@/components/Healthtech";
import { Capabilities } from "@/components/Capabilities";
import { Credentials } from "@/components/Credentials";
import { HumanSide } from "@/components/HumanSide";
import { OtherThings } from "@/components/OtherThings";
import { Mantra } from "@/components/Mantra";
import { NavigationSignal } from "@/components/NavigationSignal";

export default function Home() {
  return (
    <main className="bg-[var(--surface)] min-h-screen selection:bg-[var(--color-brand)] selection:text-[var(--color-off-white)]">
      <NavigationSignal />
      <Hero />
      <Philosophy />
      <SelectedWork />
      <Healthtech />
      <Capabilities />
      <Credentials />
      <HumanSide />
      <OtherThings />
      <Mantra />
    </main>
  );
}
