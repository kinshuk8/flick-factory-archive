
import { HeroSection } from '@/components/HeroSection';
import { TrendingMovies } from '@/components/TrendingMovies';
import { Navbar } from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-12">
        <HeroSection />
        <TrendingMovies />
      </main>
    </div>
  );
};

export default Index;
