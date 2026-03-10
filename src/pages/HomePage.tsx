import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { WorkflowSection } from '../components/WorkflowSection';
import { WorkspaceIntelligenceSection } from '../components/WorkspaceIntelligenceSection';
import { LittleThingsSection } from '../components/LittleThingsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { RoadmapSection } from '../components/RoadmapSection';

export const HomePage = () => {
  return (
    <main className="pt-[12vh]">
      <Hero />
      <Marquee />
      <FeatureShowcase />
      <WorkflowSection />
      <WorkspaceIntelligenceSection />
      <LittleThingsSection />
      {/* <TestimonialsSection /> TODO: Re-enable Loved by power users section when needed */}
      <RoadmapSection />
    </main>
  );
}
