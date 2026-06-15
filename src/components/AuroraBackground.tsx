export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-midnight">
      <div
        className="absolute -inset-1/4 animate-aurora-shift opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(155,89,182,0.6), transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(80,220,170,0.45), transparent 55%), radial-gradient(ellipse at 50% 80%, rgba(255,107,157,0.55), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute -inset-1/4 animate-aurora-shift opacity-50"
        style={{
          animationDelay: "-7s",
          background:
            "radial-gradient(ellipse at 80% 60%, rgba(255,215,0,0.35), transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(155,89,182,0.55), transparent 55%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
