import { motion } from "framer-motion";

export default function BienvenidaAnimada() {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-4xl font-bold">🎵 Bienvenido a Profesor de Ritmo</h1>
      <p className="text-lg text-gray-600 mt-4">
        Una IA generativa musical que enseña, escucha y crea contigo.
      </p>
    </motion.div>
  );
}
