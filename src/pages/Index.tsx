import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import Cart from "@/components/Cart";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Import product images
import coklatImage from "@/assets/coklat.jpg";
import matchaImage from "@/assets/matcha.jpg";
import taroImage from "@/assets/taro.jpg";

const products: Product[] = [
  {
    id: "coklat",
    name: "KICAU Coklat",
    price: 10000,
    image: coklatImage,
    flavor: "chocolate",
    description: "Cake coklat premium dengan rasa rich dan creamy yang memanjakan lidah"
  },
  {
    id: "matcha",
    name: "KICAU Matcha",
    price: 10000,
    image: matchaImage,
    flavor: "matcha",
    description: "Cake matcha autentik dengan cita rasa green tea yang segar dan unik"
  },
  {
    id: "taro",
    name: "KICAU Taro",
    price: 10000,
    image: taroImage,
    flavor: "taro",
    description: "Cake taro dengan warna ungu cantik dan rasa manis yang distinctive"
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Ditambahkan ke keranjang!",
      description: `${product.name} telah ditambahkan ke keranjang belanja`,
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter(item => item.id !== productId);
      }
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== productId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const removeItemFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    toast({
      title: "Item dihapus",
      description: "Item telah dihapus dari keranjang belanja",
    });
  };

  const getCartQuantity = (productId: string): number => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Menu Pilihan Rasa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tiga varian rasa istimewa yang siap memanjakan lidah Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getCartQuantity(product.id)}
                onAdd={() => addToCart(product)}
                onRemove={() => removeFromCart(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating Cart */}
      <Cart
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeItemFromCart}
      />
    </div>
  );
};

export default Index;
