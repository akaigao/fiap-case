import {
  Navbar,
  Header,
  Intro,
  WaterTransition,
  Cursos,
  FAQ,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Intro />
        <WaterTransition />
        <Cursos />
        <FAQ />
      </main>
    </>
  );
}
