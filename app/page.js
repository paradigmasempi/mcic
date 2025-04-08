import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/Homepage/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Homepage />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
