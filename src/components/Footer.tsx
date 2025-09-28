import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted to-muted/80 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src={logo} alt="KICAU Logo" className="w-16 h-16 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-foreground">KICAU</h3>
                <p className="text-sm text-muted-foreground">Kriuk Cau Cihuy</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Menyajikan cake premium dengan 3 rasa istimewa: Coklat, Matcha, dan Taro. 
              Dibuat fresh setiap hari dengan bahan berkualitas tinggi.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/6285721191019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                +62 857-2119-1019
              </a>
              <a 
                href="mailto:akmahaniff07@gmail.com"
                className="flex items-center justify-center md:justify-start text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                akmahaniff07@gmail.com
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-foreground mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-4 h-4 mr-2" />
                <div>
                  <p>Senin - Jumat: 08:00 - 20:00</p>
                  <p>Sabtu - Minggu: 09:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 KICAU Kriuk Cau Cihuy. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Made with ❤️ for cake lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;