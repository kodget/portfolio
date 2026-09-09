import dynamic from 'next/dynamic';
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { NavigationSignal } from "@/components/NavigationSignal";

const SelectedWork = dynamic(() => import("@/components/SelectedWork").then(mod => mod.SelectedWork));
const Healthtech = dynamic(() => import("@/components/Healthtech").then(mod => mod.Healthtech));
const Capabilities = dynamic(() => import("@/components/Capabilities").then(mod => mod.Capabilities));
const Credentials = dynamic(() => import("@/components/Credentials").then(mod => mod.Credentials));
const HumanSide = dynamic(() => import("@/components/HumanSide").then(mod => mod.HumanSide));
const HowIWork = dynamic(() => import("@/components/HowIWork").then(mod => mod.HowIWork));
const OtherThings = dynamic(() => import("@/components/OtherThings").then(mod => mod.OtherThings));
const Mantra = dynamic(() => import("@/components/Mantra").then(mod => mod.Mantra));

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
