import { useEffect, useState } from "react";

export const useTypingEffect = (words: string[], typingSpeed = 110, pause = 1400) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const isComplete = displayText === currentWord;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, displayText.length + 1);
          setDisplayText(nextText);

          if (nextText === currentWord) {
            setIsDeleting(true);
          }
          return;
        }

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        const nextText = currentWord.slice(0, displayText.length - 1);
        setDisplayText(nextText);
      },
      !isDeleting && isComplete ? pause : isDeleting ? typingSpeed / 2 : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
};
