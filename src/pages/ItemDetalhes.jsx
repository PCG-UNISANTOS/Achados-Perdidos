import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiPaperClip,
} from "react-icons/hi";

import { itemMock } from "./../Arquitetura/JavaScript/mockDetalhe";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ItemDetalhes() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  // useEffect(() => {
  //   fetch(`https://api-achados.onrender.com/api/listar-itens/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setItem(data))
  //     .catch((err) => console.log(err));
  // }, [id]);

  const statusText = {
    DISPONIVEL: "Disponível",
    INDISPONIVEL: "Indisponível",
    DEVOLUCAO: "Em devolução",
    REIVINDICADO: "Reivindicado",
    EM_ANALISE: "Em análise",
  };

  return (
    <>
      <section className="item-detalhes-section">
        <SideBar />
        <main className="item-detalhes-conteudo">
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
              {itemMock.imagem.urlimagem1 && (
                <SwiperSlide>
                  <img
                    src={itemMock.imagem.urlimagem1}
                    alt="imagem 1 do item perdido"
                  />
                </SwiperSlide>
              )}
              {itemMock.imagem.urlimagem2 && (
                <SwiperSlide>
                  <img
                    src={itemMock.imagem.urlimagem2}
                    alt="imagem 2 do item perdido"
                  />
                </SwiperSlide>
              )}
              {itemMock.imagem.urlimagem3 && (
                <SwiperSlide>
                  <img
                    src={itemMock.imagem.urlimagem3}
                    alt="imagem 3 do item perdido"
                  />
                </SwiperSlide>
              )}
            </Swiper>
          </div>

          <div className="box-texto">
            <div className="titulo-tag">
              <h2>{itemMock?.nome}</h2>
              <span className={itemMock?.status}>
                {statusText[itemMock?.status]}
              </span>
            </div>

            <p>{itemMock?.descricao}</p>

            <div className="box-detalhes">
              <div className="box-detalhes__local">
                <HiOutlineLocationMarker />
                <div className="titulo">
                  <h4>Local</h4>
                  <span>{itemMock?.local.nome}</span>
                </div>
              </div>

              <div className="box-detalhes__data">
                <HiOutlineCalendar />
                <div className="titulo">
                  <h4>Data</h4>
                  <time>
                    {new Date(itemMock?.dataachado).toLocaleDateString("pt-BR")}
                  </time>
                </div>
              </div>

              <div className="box-detalhes__infos">
                <HiPaperClip />
                <div className="titulo">
                  <h4>Informações adicionais</h4>
                  <p>{itemMock?.local.descricao}</p>
                </div>
              </div>
            </div>

            {itemMock.status === "DISPONIVEL" ? (
              <Link
                to={`/item/${id}/reivindicar/`}
                className={`redirect-form ${itemMock.status}`}
                title="Reivindicar item"
              >
                Reivindicar item
              </Link>
            ) : (
              <div className={`redirect-form ${itemMock.status}`}>
                {statusText[itemMock.status]}
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
