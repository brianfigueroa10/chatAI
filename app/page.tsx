
import AboutUs from "@/components/aboutUs";
import AccordionExpand from "@/components/accordion";
import Accord from "@/components/accordion";
import Caracteristicas from "@/components/caracteriticas";
import Form from "@/components/form";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <div className="mt-20" >
      <Hero />
      <Caracteristicas />
      <AboutUs />
      <AccordionExpand />
      <Form />
    </div>
  
  );
}
