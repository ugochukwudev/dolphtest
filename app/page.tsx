import Image from "next/image";

import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20 px-4 lg:px-20 py-10">
        <Container />
      </div>
    </>
  );
}
