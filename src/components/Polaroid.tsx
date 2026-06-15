import { motion } from "framer-motion";

export function Polaroid({ index, caption }: { index: number; caption?: string }) {
  const rotate = (index % 2 === 0 ? -1 : 1) * (3 + (index % 4));
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      className="mx-auto w-56 max-w-[80vw] rounded-md bg-pearl p-3 pb-10 shadow-[0_20px_50px_rgba(139,30,74,0.45)]"
    >
      <img
        src={`/photos/photo${index}.jpg`}
        alt={`Niso ${index}`}
        onError={(e) => ((e.target as HTMLImageElement).src = `https://picsum.photos/seed/niso${index}/400/500`)}
        className="aspect-[4/5] w-full object-cover"
      />
      <p className="serif mt-3 text-center text-sm italic text-rose-deep">
        {caption ?? " -- Exaucée Eunice -- "}
      </p>
    </motion.div>
  );
}
