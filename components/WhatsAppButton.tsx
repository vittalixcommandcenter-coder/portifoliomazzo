"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function WhatsAppButton() {
  const { t } = useI18n();
  const msg = encodeURIComponent(t.whatsapp.message);
  const href = `https://wa.me/${config.whatsapp}?text=${msg}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] shadow-lg shadow-emerald-900/30 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-6 w-6 fill-white sm:h-7 sm:w-7"
        aria-hidden
      >
        <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.6-1.73a12.74 12.74 0 0 0 6.2 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06A12.7 12.7 0 0 0 16.003 3.2zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.18-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </motion.a>
  );
}
