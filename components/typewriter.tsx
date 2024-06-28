import React, { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  dataText: string[];
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ dataText, className }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 100; // Adjust typing speed here (milliseconds)
  const deletingSpeed = 50; // Adjust deleting speed here (milliseconds)
  const pauseTime = 1000; // Pause time between typing and deleting (milliseconds)

  const textElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentText = dataText[loopNum];
      setText(
        isDeleting
          ? currentText.substring(0, text.length - 1)
          : currentText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentText) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setLoopNum((loopNum + 1) % dataText.length);
        setIsDeleting(false);
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, dataText]);

  return (
    <span className={`border-r-2 ${className}`} ref={textElement}>
      {text}
    </span>
  );
};

export default Typewriter;