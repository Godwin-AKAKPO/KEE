import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 60, startDelay = 0) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);
  return out;
}
