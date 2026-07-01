import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSolution } from "@/components/site/ProblemSolution";
import { Growth } from "@/components/site/Growth";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhoFor } from "@/components/site/WhoFor";
import { Pricing } from "@/components/site/Pricing";
import { SocialProof } from "@/components/site/SocialProof";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { DemoForm } from "@/components/site/DemoForm";
import { Footer } from "@/components/site/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Growth />
        <Features />
        <HowItWorks />
        <WhoFor />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}
