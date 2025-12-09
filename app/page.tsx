import { SigCard } from "@/components/SigCard";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      
      {/* 1. HERO SECTION (Placeholder to enable scrolling) */}
      <section id="home" className="h-screen flex items-center justify-center border-b border-white/5">
        <h1 className="text-5xl font-display font-bold text-white">
          Welcome to <span className="text-primary">ISTE NITK</span>
        </h1>
      </section>

      {/* 2. SIGs SECTION (Linked via id="sigs") */}
      <section id="sigs" className="py-24 px-6 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-white mb-4">
            Our <span className="text-primary">SIGs</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Explore our Special Interest Groups designed to foster technical growth.
          </p>
        </div>

        {/* The Grid */}
        {/* Changed to responsive grid (1 col on mobile -> 4 on desktop) */}
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
          <SigCard title="Catalyst" image="/catalyst.jpg" />
          <SigCard title="Charge" image="/charge.jpg" />
          <SigCard title="Chronicle" image="/chronicle.jpg" />
          <SigCard title="Clutch" image="/clutch.jpg" />
          <SigCard title="Concrete" image="/concrete.jpg" />
          <SigCard title="Create" image="/create.jpg" />
          <SigCard title="Credit" image="/credit.jpg" />
          <SigCard title="Crypt" image="/crypt.jpg" />
        </div>
      </section>

      {/* 3. NEXT SECTION (e.g. Events or Footer) */}
      <div className="h-[500px] bg-surface text-foreground flex items-center justify-center">
        Footer / Contact Area
      </div>
    </main>
  );
}