import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import { BYOBSection } from "./components/BYOBSection";
import { MenuHighlights } from "./components/MenuHighlights";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    {/* <Hero /> */}
    {/* <Features /> */}
    {/* <Reviews /> */}

    <Hero />
    <Features />
    <Gallery />
    <BYOBSection />
    <MenuHighlights />
    <Events />
    <Reviews />
    {/* <Footer /> */}
    </>
  );
}
