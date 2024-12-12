import Form from "@/components/Form";
import React from "react";

export default function page() {
  return (
    <section
      className="min-h-screen bg-gray-300"
      // style={{
      //   backgroundImage: "url('/ai-contact.web')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-100 rounded-lg  px-8 py-12">
          <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-black text-lg mb-4">
                Görsellerinizi bizimle paylaştığınız için teşekkür ederiz!
              </div>
              <p className="text-muted-foreground text-lg mb-8 font-light max-w-[400px] ">
                Yapay zeka teknolojilerimizle size en iyi çözümleri sunmaktan
                büyük mutluluk duyuyoruz. Daha fazla bilgi almak veya sürecimizi
                daha yakından tanımak isterseniz, iletişim formumuzu
                doldurabilirsiniz. Ekibimiz size en kısa sürede ulaşarak
                ihtiyaçlarınıza özel bir yanıt sağlayacaktır. Sizinle çalışmayı
                dört gözle bekliyoruz!
              </p>
            </div>
            <div className="lg:mt-24">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
