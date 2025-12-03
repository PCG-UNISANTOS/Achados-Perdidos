import React from "react";
import itemImg from "../Arquitetura/Imagens/item1.jpeg";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ItemDetalhes() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://api-achados.onrender.com/api/listar-itens/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, [id]);

  const statusText = {
    DISPONIVEL: "Disponível",
    INDISPONIVEL: "Indisponível",
    DEVOLUCAO: "Em devolução",
    REIVINDICADO: "Reivindicado",
  };

  const imagens = item
    ? [
        item.imagem?.urlimagem1,
        item.imagem?.urlimagem2,
        item.imagem?.urlimagem3,
      ].filter(Boolean)
    : [];
  return (
    <>
      <Header />
      <section className="detalhes-section">
        <div className="detalhes-section-container">
          <div className="detalhes-section-container__grid">
            <div className="slider-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={10}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                {imagens.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={url}
                      alt={`imagem ${index + 1} do item perdido`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="box-texto">
              <div className="titulo-tag">
                <h2>{item?.nome}</h2>
                <span>{statusText[item?.status]}</span>
              </div>
              <p>{item?.descricao}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>{item.nome}</h1> */}
    </>
  );
}
