import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Home1 />
      <Home2 />
    </main>
  )
}
