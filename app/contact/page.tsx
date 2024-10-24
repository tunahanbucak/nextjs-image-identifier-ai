import Form from "@/components/Form";
import React from "react";

export default function page() {
  return (
    <section className="min-h-screen bg-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-100 rounded-lg  px-8 py-12">
          <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-black text-lg mb-4">
                <span className="w-[80px] h-[2px] bg-black"></span>
                Merhaba
              </div>
              <p className="text-muted-foreground text-lg mb-8 font-light max-w-[400px] ">
                Size fotoğraflamamızı düşündüğünüz için çok teşekkür ederiz,
                bizim için gerçekten büyük bir onur. Daha fazla öğrenmekle
                ilgileniyor ya da bilgi almak istiyorsanız lütfen iletişim
                formunu doldurun, sizinle bir an önce iletişime geçelim. Sizden
                haber almak için sabırsızlanıyoruz..
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
