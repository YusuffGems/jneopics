import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/918754542121?text=Hi%20Neopics%2C%20I%20want%20to%20book%20a%20photoshoot";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">

      {/* CALL BUTTON */}
      <motion.a
        href="tel:+918754542121"
        aria-label="Call Now"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.12,
          y: -4,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="relative group"
      >
        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-2xl border border-white/20">
          <Phone size={24} />
        </span>
      </motion.a>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.12,
          y: -4,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="relative group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

        <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl border border-white/20">
          <MessageCircle size={30} />
        </span>
      </motion.a>
    </div>
  );
}