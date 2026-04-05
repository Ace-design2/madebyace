"use client";

import { useState, useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";

const phrases = [
  { prefix: "Powerful", suffix: " Digital Experiences" },
  { prefix: "Fast, Functional", suffix: " Websites" }
];

export default function TypewriterHeadline() {
  const { isLoading } = useLoading();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    if (isLoading) return;

    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i].prefix + phrases[i].suffix;

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      let nextSpeed = isDeleting ? 30 : 50 + Math.random() * 30;

      if (!isDeleting && text === fullText) {
        nextSpeed = 3000; 
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500; 
      }

      setTypingSpeed(nextSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, isLoading]);

  const i = loopNum % phrases.length;
  const currentPhrase = phrases[i];
  
  const currentPrefix = text.substring(0, currentPhrase.prefix.length);
  const currentSuffix = text.substring(currentPhrase.prefix.length);

  return (
    <div className="w-full flex items-center min-h-[240px] sm:min-h-[180px] md:min-h-[200px] perspective-[1000px]">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-marags font-extrabold leading-tight tracking-tight text-white m-0">
        <span className="sr-only">{text}</span>
        Building <br className="hidden sm:block" />
        <span className="text-red-500">{currentPrefix}</span>
        <span className="text-white">{currentSuffix}</span>
      </h1>
    </div>
  );
}
