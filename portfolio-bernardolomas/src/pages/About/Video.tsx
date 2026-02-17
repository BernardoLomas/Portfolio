export default function Video() {
  return (
    <div className="flex justify-center">
      <div
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-2xl
          border-2
          border-emerald-400/30
        "
      >
        <video
          src=""
          autoPlay
          loop
          muted
          playsInline
          className="h-56 w-full object-cover sm:h-64"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
}
