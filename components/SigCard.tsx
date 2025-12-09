"use client";

import Image from "next/image";

export function SigCard({ title, image }: { title: string; image: string }) {
  // Ensure path is correct
  const imagePath = image.startsWith('/') ? image : `/${image}`;

  return (
    <div className="group relative w-full h-72 rounded-3xl bg-[#0c0c14] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
      
      {/* 1. THE IMAGE CONTAINER */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-contain scale-90 transition-transform duration-700 group-hover:scale-100"
          />
        </div>
      </div>

      {/* 2. THE VIGNETTE FIX (The Magic Layer) 
          This is a radial gradient that sits ON TOP of the image.
          It is transparent in the center (seeing the logo) 
          but turns to the card background color (#0c0c14) at the edges.
          This physically HIDES the square borders of the JPG.
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, card 70%)'
        }}
      />

      {/* 3. OPTIONAL: Extra Bottom Fade for Text Readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0c14] via-[#0c0c14]/80 to-transparent" />

      {/* 4. TEXT CONTENT 
          Minimalist, slides up slightly on hover.
      */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        
        {/* The Title */}
        <h2 className="text-xl font-bold font-display text-white tracking-wider uppercase drop-shadow-md group-hover:text-primary transition-colors">
          {title}
        </h2>
        
        {/* A small decorative bar that expands on hover */}
        <div className="w-8 h-1 bg-primary rounded-full mt-3 opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />
      </div>
    </div>
  );
}