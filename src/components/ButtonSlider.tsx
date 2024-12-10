"use client";

const ShimmerSlider = ({ tags }: { tags: string[] }) => {
  return (
    <div className="relative overflow-hidden max-w-3xl h-16">
      {/* Shadow on both sides */}
      <div className="absolute top-0 left-28 sm:left-0 w-44 sm:w-40 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-28 sm:right-0 w-44 sm:w-40 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="scroll-container">
        {[...tags, ...tags].map((tag, index) => (
          <div
            key={index}
            className="inline-flex h-12 w-48 justify-center items-center mx-3"
          >
            <button className="h-full animate-shimmer w-full rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-agrandirTextBold text-slate-400">
              {tag}
            </button>
          </div>
        ))}
      </div>

      {/* CSS for smooth, seamless scrolling */}
      <style jsx>{`
        .scroll-container {
          display: flex;
          width: calc(${tags.length} * 12rem * 2); /* Double the width */
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${tags.length * 12}rem);
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerSlider;
