"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const WORD_STAGGER_MS = 120;
const CHAR_STAGGER_MS = 45;
const BASE_DELAY_MS = 150;

export function AnimatedHeroName() {
  const [ready, setReady] = useState(false);
  const words = site.name.split(" ");

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <span className="inline-flex flex-wrap gap-x-[0.28em]">
      {words.map((word, wordIndex) => {
        const wordDelay =
          BASE_DELAY_MS + wordIndex * (word.length * CHAR_STAGGER_MS + WORD_STAGGER_MS);

        return (
          <span key={word} className="inline-flex">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${word}-${charIndex}`}
                className="hero-name-char gradient-text"
                style={{
                  animationDelay: ready
                    ? `${wordDelay + charIndex * CHAR_STAGGER_MS}ms`
                    : undefined,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
