import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sari Wulandari",
    rating: 5,
    comment: "Cake nya enak banget! Rasa coklat nya rich dan tidak terlalu manis. Pasti balik lagi!",
    flavor: "Coklat"
  },
  {
    id: 2,
    name: "Budi Santoso", 
    rating: 5,
    comment: "Matcha cake nya autentik banget rasanya. Tekstur nya lembut dan creamy. Recommended!",
    flavor: "Matcha"
  },
  {
    id: 3,
    name: "Maya Indira",
    rating: 5,
    comment: "Taro cake nya unik dan enak! Warna ungu nya cantik, rasa nya juga balance. Top deh!",
    flavor: "Taro"
  },
  {
    id: 4,
    name: "Andi Pratama",
    rating: 5,
    comment: "Harga 10rb untuk kualitas segini worth it banget! Semua rasa nya enak semua.",
    flavor: "Semua Rasa"
  },
  {
    id: 5,
    name: "Lisa Permata",
    rating: 5,
    comment: "Packaging nya rapi, cake nya fresh. Delivery nya juga cepat. Pelayanan excellent!",
    flavor: "Coklat"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari pelanggan setia KICAU yang sudah merasakan kelezatan cake kami
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white p-8 text-center shadow-card border-0 max-w-2xl mx-auto">
                    <div className="mb-4 flex justify-center">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.comment}"
                    </blockquote>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Membeli rasa: {testimonial.flavor}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;