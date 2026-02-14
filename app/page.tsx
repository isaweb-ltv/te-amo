export default function Page() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-black">
      <iframe
        src="/particle.html"
        className="w-full h-full border-0"
        title="Particle Animation"
        allow="autoplay"
        style={{ touchAction: "none" }}
      />
    </main>
  )
}
