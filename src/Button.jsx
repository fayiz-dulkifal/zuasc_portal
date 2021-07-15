import { motion } from "framer-motion";
import React from "react";

export default function Button(prop) {
  return (
    <div>
      <motion.button {...prop} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
    </div>
  );
}
