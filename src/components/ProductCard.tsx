import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  flavor: 'chocolate' | 'matcha' | 'taro';
  description: string;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const flavorColors = {
  chocolate: 'bg-brand-chocolate text-white',
  matcha: 'bg-brand-matcha text-white', 
  taro: 'bg-brand-taro text-white'
};

const ProductCard = ({ product, quantity, onAdd, onRemove }: ProductCardProps) => {
  return (
    <Card className="card-product group overflow-hidden">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className={`absolute top-3 right-3 ${flavorColors[product.flavor]}`}>
          {product.flavor.charAt(0).toUpperCase() + product.flavor.slice(1)}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
        </div>

        {quantity === 0 ? (
          <Button 
            onClick={onAdd}
            className="btn-primary w-full group"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Tambah ke Keranjang
          </Button>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 bg-muted rounded-lg p-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={onRemove}
                className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-semibold text-lg min-w-8 text-center">{quantity}</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={onAdd}
                className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Total: Rp {(product.price * quantity).toLocaleString('id-ID')}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;