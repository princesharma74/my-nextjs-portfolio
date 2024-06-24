'use client'
import { useEffect, useRef } from 'react';

interface TypewriterProps {
  dataText: string[];
  className?: string;
}

class TxtType {
  toRotate: string[];
  el: HTMLSpanElement;
  loopNum: number;
  period: number;
  txt: string;
  isDeleting: boolean;

  constructor(el: HTMLSpanElement, toRotate: string[], period: number) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period.toString(), 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var delta = 100; // Adjust the value to control the speed of the animation

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      this.tick();
    }, delta);
  }
}

const Typewriter: React.FC<TypewriterProps> = ({ dataText, className }) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      setTimeout(() => {
        new TxtType(el.current!, dataText, 2000);
      }, 0);
    }
  }, [dataText]);

  return (
    <span className={`border-r-2 ${className}`} ref={el}></span>
  );
};

export default Typewriter;
