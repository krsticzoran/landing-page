"use client";
import Marquee from "@/components/ui/margue";
import Container from "@/components/layout/container";
import Image from "next/image";

import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import Link from "next/link";
import YoutubeDelayed from "@/components/ui/youtube";
import Info from "@/components/ui/info";

import { motion } from "framer-motion";

export default function Home() {
  const images = [image2, image3, image4];
  return (
    <>
    {/* Background and Hero Section */}
    <div className="relative min-h-[100dvh]  lg:min-h-screen w-full ">
      
  <div
    className="absolute inset-0 bg-black/50 z-0"
    aria-hidden="true"
  />
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
    style={{ backgroundImage: 'url("/bg.jpg")' }}
  />


   {/* Hero Section */}
  <div className="relative z-10 text-white flex flex-col items-center justify-center min-w-screen lg:min-h-screen min-h-[100dvh]">
    <Container as="main" className="relative lg:min-h-screen min-h-[100dvh] flex justify-center items-center flex-col ">
    <motion.div  initial={{ opacity: 0,}}       
    whileInView={{ opacity: 1 }}       
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: "easeOut" }} className="-mt-[20px] lg:mt-0 text-center mb-12 sm:mb-16 lg:mb-[70px] flex flex-col items-center justify-center">
  <h1 className="font-[eb-garamond] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal leading-snug sm:leading-[78px]">
    Kozmetički SALON ANGELS
  </h1>
  <style jsx>{`
    @media (max-width: 400px) {
      h1 {
        font-size: 26px;
      }
        #hero-sub {
        font-size: 16px}
    }
  `}</style>
  <p id="hero-sub" className="font-[eb-garamond] text-lg sm:text-xl md:text-2xl lg:text-[30px] mt-2 sm:mt-4">
    Ekskluzivna nega u srcu Novog Sada
  </p>
</motion.div>
<motion.div  initial={{ opacity: 0,}}       
    whileInView={{ opacity: 1 }}       
    viewport={{ once: true, amount: 0.3 }} className="flex gap-3 sm:gap-4 justify-center ">

  <Link   href="tel:+381691120036" className="bg-white text-black px-3 sm:px-6 py-2 rounded-none border border-transparent  font-jost text-[11px] sm:text-[14px]  font-medium tracking-[0.1em] leading-[20px] text-center uppercase cursor-pointer">
    Pozovite odmah
  </Link>
  <Link   href="/zakazite-1/" className="bg-transparent text-white px-3 sm:px-6 py-2 rounded-none border border-white font-jost text-[11px] sm:text-[14px]  font-medium tracking-[0.1em] leading-[20px] text-center uppercase hover:bg-white hover:text-black duration-300 cursor-pointer">
    Zakazite online
  </Link>
</motion.div>
 {/* work time contact address */}
<Info />
    </Container>
  </div>
</div>

  <div >
    <section>
       {/* ScrollingText */}
    <Marquee />

     {/* 3 images in a row - show the ambience of the salon */}
    <ul className="w-full flex flex-col sm:flex-row">
      {images.map((img, index) => (
        <motion.li initial={{ opacity: 0}}       
        whileInView={{ opacity: 1 }}       
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }} key={index} className="w-full h-[300px] relative">
          <Image
            src={img}
            alt={`Image ${index + 2}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </motion.li>
      ))}
    </ul>
    </section>


    {/* about us section */}
    <section className="bg-[#F6EBE7] min-h-full">
    <Container  className=" min-h-full">
    <div className="flex flex-col lg:flex-row items-start gap-8 py-25">
  <motion.div
  initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="flex-1 relative w-full min-h-[500px] flex justify-center items-center p-10" >
    <Image
      src={image7}
      alt="Opis slike"
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </motion.div>

  <motion.div initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }} className="flex-1 text-black flex flex-col justify-center h-full lg:min-h-[500px]">
    <h3 className="  mb-4 text-[24px] xl:text-[36px] 2xl:text-[42px] font-medium leading-[55px] font-[eb-garamond] text-center" >“VAŠA LEPOTA KREIRA SVET”</h3>
    <p className="text-base leading-relaxed font-yost mb-2">
    Odvojićemo adekvatno vreme za Vas, obraćamo se vašoj ličnosti, vašim željama i potrebama. Za nas postojite samo Vi, spremni smo da Vam damo najbolje sugestije, savete za negu lica i tela kako bi vas stil života bio drugačiji i bolji.
    </p>
    <p className="text-base leading-relaxed font-yost mb-4">
    Naš način rada se prepoznaje po kreativnosti, fokusiranosti i smirenosti, jer nam je cilj da naša pažnja bude usmerena samo na Vas. 
    </p>
    <p className="text-base leading-relaxed font-yost text-left ">
    Radujemo se vašoj poseti! 
    </p>
    <p className="text-base leading-relaxed font-yost text-left ">
    Vaš ANGELS Team
    </p>   

  </motion.div>
</div>
 </Container>
 </section>
   </div>


    {/* skin care section */}
   <Container  as="section" className=" min-h-full">
    <div className="flex flex-col lg:flex-row items-start gap-8 pt-25 pb-16">
  <motion.div initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }} className="flex-1 text-black flex flex-col justify-center h-full lg:min-h-[500px]">
    <h3 className="  mb-4 text-[24px] xl:text-[36px] 2xl:text-[42px] font-medium leading-[55px] font-[eb-garamond] text-center" >“NEGA ZA SVE TIPOVE KOŽE”</h3>
    <p className="text-base leading-relaxed font-yost mb-2">
    Naši tretmani za lice su individualno prilagođeni vašem tipu kože kako bi se postigli optimalni rezultati. Otkrijte naš izbor visokokvalitetnih proizvoda i priuštite svojoj koži negu koju zaslužuje.
    </p>
    <Link
  href="tel:+381691120036"
  className="mt-6 inline-block bg-white text-black px-4 sm:px-6 py-2 rounded-none border border-black font-jost text-[12px] sm:text-[14px] font-medium tracking-[0.1em] leading-[20px] text-center uppercase cursor-pointer"
>
  Pozovite odmah
</Link>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }} className="flex-1 relative w-full min-h-[500px] flex justify-center items-center p-10" >
    <Image
      src={image5}
      alt="Opis slike"
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      sizes="(max-width: 1024px) 100vw, 50vw"
      
    />
  </motion.div>
</div>
 </Container>


 {/* hand and foot care section */}
    <Container as="section" className=" min-h-full">
    <div className="flex flex-col lg:flex-row items-start gap-8 pt-8 pb-25">
  <motion.div initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }} className="flex-1 relative w-full min-h-[500px] flex justify-center items-center p-10" >
    <Image
      src={image6}
      alt="Opis slike"
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      sizes="(max-width: 1024px) 100vw, 50vw"
    
    />
  </motion.div>
  <motion.div initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }} className="flex-1 text-black flex flex-col justify-center h-full lg:min-h-[500px]">
    <h3 className="  mb-4 text-[24px] xl:text-[36px] 2xl:text-[42px] font-medium leading-[55px] font-[eb-garamond] text-center" >“NEGA RUKU I STOPALA”</h3>
    <p className="text-base leading-relaxed font-yost mb-2">
    U našem salonu lepote vaše ruke i stopala su u fokusu. Uživajte u opuštajućem manikiru i pedikiru koji će učiniti da vaši nokti zablistaju. Priuštite sebi ovo maženje i osećajte se potpuno udobno.
    </p>
    <Link
  href="/zakazite-1/"
  className="mt-6 inline-block bg-white text-black px-4 sm:px-6 py-2 rounded-none border border-black font-jost text-[12px] sm:text-[14px] font-medium tracking-[0.1em] leading-[20px] text-center uppercase cursor-pointer"
>
  Zakažite online
</Link>
  </motion.div>
</div>
    </Container>


    {/* youtube section */}
    <section className="relative">
  <div className="absolute top-0 left-0 w-full h-1/2 bg-[#F6EBE7] z-0" />
  <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 py-25">
    <Container className="min-h-full">
    <motion.div initial={{ opacity: 0, y: -50 }}       
  whileInView={{ opacity: 1, y: 0 }}       
  viewport={{ once: true, amount: 0.3 }}   
  transition={{ duration: 0.7, ease: "easeOut" }} className="text-left">
  <p className="text-xs tracking-widest uppercase text-black font-jost">
    Za samo 74 sekunde
  </p>
  <h4 className=" text-black mb-4 lg:mb-8 text-[24px] xl:text-[36px] 2xl:text-[42px] font-medium lg:leading-[50px] font-[eb-garamond]">
    Upoznajte nas
  </h4>
</motion.div>
      <YoutubeDelayed />
    </Container>
  </div>
</section>
  </>
  );
}
