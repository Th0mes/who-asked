import { useEffect, useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("https://reqres.in/api/users", {
        headers: {
          Accept: "application/json",
        },
      });

      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsVisible(true);
    }
  };

  console.log(data);

  const number = 123456789;

  useEffect

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-200 dark:bg-slate-900">
      <button
        onClick={handleClick}
        className="absolute rounded-xl bg-gradient-to-l from-[#007991] to-[#78ffd6] px-6 py-4 text-xl text-white transition-all duration-300 hover:contrast-125 focus:scale-125 dark:from-[#C33764] dark:to-[#1D2671]"
      >
        Who Asked?{" "}
        {/* {isLoading && <Circles color="#00BFFF" height={24} width={24} />} */}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative top-20 text-4xl text-white"
          >
            A total of {new Intl.NumberFormat().format(number)} people don't
            give a fuck!
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
}
