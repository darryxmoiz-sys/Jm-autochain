'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1600); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div key="pre" exit={{ y: '-100%' }} transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-navy">
          <motion.img src="/logo-badge.png" alt="" className="h-32 w-32 rounded-full object-cover" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-ice" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.3, ease: 'easeInOut' }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
