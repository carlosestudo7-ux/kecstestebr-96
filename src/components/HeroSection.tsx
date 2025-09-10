import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10"></div>
      <img 
        src={heroImage} 
        alt="Ofertas especiais Kecinforstore" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ofertas que você
            <span className="block text-white">não pode perder!</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Descubra milhares de produtos com os melhores preços e entrega rápida para todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-elegant"
              onClick={() => navigate('/produtos')}
            >
              Ver Ofertas
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://wa.me/558534833373?text=Olá!%20Gostaria%20de%20baixar%20o%20app%20da%20KECINFORSTORE', '_blank')}
            >
              Baixar App
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-10"></div>
    </section>
  );
};

export default HeroSection;
