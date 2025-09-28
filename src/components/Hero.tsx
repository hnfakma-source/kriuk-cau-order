import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-orange rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-yellow rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-orange rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in">
          {/* Logo */}
          <div className="mb-8 floating-animation">
            <img 
              src={logo}
              alt="KICAU Kriuk Cau Cihuy Logo"
              className="w-48 h-48 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 slide-in-up">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              KICAU
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Kriuk Cau Cihuy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-in-up">
            Nikmati kelezatan cake premium dengan 3 rasa istimewa:
            <br />
            <span className="font-semibold text-brand-chocolate">Coklat</span>, 
            <span className="font-semibold text-brand-matcha"> Matcha</span>, dan 
            <span className="font-semibold text-brand-taro"> Taro</span>
          </p>

          {/* Price highlight */}
          <div className="mb-8 slide-in-up">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                Hanya Rp 10.000
              </span>
              <span className="block text-sm text-muted-foreground">
                per piece
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToProducts}
            className="btn-primary text-lg px-8 py-4 mb-12 slide-in-up"
          >
            Lihat Menu
            <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
          </Button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1">
              <div className="w-1 h-3 bg-foreground/30 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;