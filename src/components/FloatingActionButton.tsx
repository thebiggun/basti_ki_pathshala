import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const FloatingActionButton = () => {
  const navigate = useNavigate();
  return (
    <motion.button
      className="fab group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/volunteer')}
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Heart className="h-6 w-6 group-hover:fill-current transition-all duration-300" />
      </motion.div>
      <span className="ml-2 hidden sm:inline">Volunteer Now</span>
    </motion.button>
  );
};

export default FloatingActionButton;