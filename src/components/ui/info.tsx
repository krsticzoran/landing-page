"use client";

import { motion } from "framer-motion";


export default function Info() {

    return (
        <motion.div
              initial={{ opacity: 0, y: 50 }}   // start ispod sa transparentnošću 0
              animate={{ opacity: 1, y: 0 }}    // ide na poziciju y=0 i postaje vidljiv
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="flex justify-between absolute bottom-10 w-full font-jost px-4 sm:px-6 lg:px-8"
            >
          <div>
            <h5 className="font-medium text-[11px] sm:text-[13px] leading-[16px] sm:leading-[19px] tracking-[0.1em] uppercase inline-block mb-2 sm:mb-[9px]"
            >Kontakt</h5>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">00381-69-112-0036</p>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">salon.angels021@gmail.com
        
        </p>
          </div>
          <div>
            <h5 className="font-medium text-[11px] sm:text-[13px] leading-[16px] sm:leading-[19px] tracking-[0.1em] uppercase inline-block mb-2 sm:mb-[9px]"
            >Radno vreme</h5>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">Pon - Pet | 9 H -21 H</p>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">Sub 9H - 17:00 H </p>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">NED Dogovor</p>
          </div>
          <div className="hidden sm:block">
            <h5 className="font-medium text-[11px] sm:text-[13px] leading-[16px] sm:leading-[19px] tracking-[0.1em] uppercase inline-block mb-2 sm:mb-[9px]"
            >Lokacija</h5>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">Ilije Ognjanovića 7</p>
            <p className="text-[13px] sm:text-[15px] font-light tracking-[0.02em] leading-[20px] sm:leading-[25px] normal-case">21000 Novi Sad </p>
            <p className="text-[15px] font-light tracking-[0.02em] leading-[25px] normal-case">Srbija</p>
          </div>
        </motion.div>
    )
}