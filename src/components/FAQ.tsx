import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Berapa harga cake KICAU?",
    answer: "Semua varian cake KICAU (Coklat, Matcha, dan Taro) dijual dengan harga yang sama yaitu Rp 10.000 per piece. Harga yang sangat terjangkau untuk kualitas premium!"
  },
  {
    question: "Bagaimana cara memesan cake KICAU?",
    answer: "Sangat mudah! Cukup pilih rasa dan jumlah yang diinginkan di website ini, lalu klik tombol 'Pesan via WhatsApp'. Anda akan langsung terhubung dengan admin kami untuk konfirmasi pesanan."
  },
  {
    question: "Apakah cake nya fresh dan aman dikonsumsi?",
    answer: "Tentu saja! Semua cake KICAU dibuat fresh setiap hari dengan bahan-bahan berkualitas tinggi. Kami juga menjaga kebersihan dan keamanan pangan dengan ketat."
  },
  {
    question: "Berapa lama cake KICAU bisa bertahan?",
    answer: "Cake KICAU dapat bertahan hingga 3-4 hari jika disimpan dalam kulkas. Namun kami merekomendasikan untuk dikonsumsi dalam 1-2 hari untuk mendapatkan rasa dan tekstur yang optimal."
  },
  {
    question: "Apakah tersedia pengiriman atau delivery?",
    answer: "Ya! Kami melayani pengiriman untuk area tertentu. Silakan hubungi kami melalui WhatsApp untuk informasi detail mengenai area pengiriman dan biaya ongkos kirim."
  },
  {
    question: "Bisakah pesan dalam jumlah banyak untuk acara?",
    answer: "Tentu bisa! Untuk pesanan dalam jumlah besar (lebih dari 20 pieces), kami sarankan untuk memesan minimal H-1 agar kami bisa mempersiapkan dengan baik. Hubungi kami untuk diskusi lebih lanjut."
  },
  {
    question: "Apa perbedaan antara ketiga rasa tersebut?",
    answer: "Coklat memiliki rasa rich dan creamy, Matcha memberikan cita rasa green tea yang autentik dengan sedikit bitter, sedangkan Taro memiliki rasa yang unique dan manis dengan aroma khas umbi taro."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang cake KICAU
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a 
            href="https://wa.me/6285721191019"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Hubungi Kami di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;