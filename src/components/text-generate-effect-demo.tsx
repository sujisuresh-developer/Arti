"use client";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { cn } from "../lib/utils";

export default function TextGenerateEffectDemo({ words, className }) {
  return (
    <div className={cn(className)}>
      <TextGenerateEffect words={words} />
    </div>
  );
}
