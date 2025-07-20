"use client";
import Image from "next/image";
import SocialIcons from "@/components/ui/social-icons";

import logo from "@/assets/logo.png"
import Subscription from "../ui/subscription";

import FooterLinks from "./footer-links";

import { discoverData, companyData } from "@/data/footer-data";

import { motion } from "framer-motion";

import { getCurrentYear } from "@/utils/utils"; 

export default function Footer() {
  return (
    <motion.div initial={{ opacity: 0,}}       
    whileInView={{ opacity: 1 }}       
    viewport={{ once: true, amount: 0.3 }}   
    transition={{ duration: 1.2, ease: "easeOut" }} className="bg-[#F6EBE7] pt-20 font-urbanist text-black font-jost lg:pt-28">
      <div className="mx-auto px-5 xl:max-w-[1280px] xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {/*first column*/}
          <div className="flex justify-center md:justify-start">
            <FooterLinks
              title={companyData.title}
              data={companyData.links.filter((link): link is [string, string] => link.length === 2)}
              addMargin={true}
            />
            <FooterLinks
              title={discoverData.title}
              data={discoverData.links.map(link => [link[0], link[1]] as [string, string])}
              addMargin={false}
            />
          </div>
          {/*second column*/}
          <div className="mt-14 flex flex-col items-center md:mt-0">
            <Image src={logo} width={120} height={121} alt="Company Logo" />
            <p className="mt-10 text-center text-black/80">
            VI KREIRATE SVET, VAŠOM LEPOTOM
            </p>
          </div>
          {/*third column*/}
          <div className="mt-14 lg:ml-10 lg:mt-0 xl:ml-20">
            <h3 className="text-center font-bold uppercase  md:text-start text-black/80">
            Prijavite se i uštedite
            </h3>
            <p className="mt-6 text-center md:text-start lg:mt-10 text-black/60">
            Pretplatite se kako biste prvi saznali za posebne ponude, poklone i jedinstvene popuste!
            </p>
            {/*subscription*/}
            <Subscription />
            {/*social icons*/}
            <ul className="mt-4 flex justify-center md:justify-start lg:mt-8">
             <SocialIcons/>
            </ul>
          </div>
        </div>
        {/*Copyright column*/}
        <div className="mt-12 flex justify-center border-t-[0.5px] border-black font-medium lg:mt-20">
          <p className="py-5 text-center text-black">{`Copyright © ${getCurrentYear()} ANGELS NS`}</p>
        </div>
      </div>
    </motion.div>
  );
}