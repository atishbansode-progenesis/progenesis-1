"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[300px]  csLg:h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full aspect-[9/16] csLg:object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home/Video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
