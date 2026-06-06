import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getItemById } from "../services/itemService";
import Loading from "../components/Loading";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const carregarItem = async () => {
      try {
        setLoading(true);
        const data = await getItemById(id);
        setItem(data);
      } catch (error) {
        console.error("Erro ao buscar item:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarItem();
  }, [id]);

  const statusText = {
    DISPONIVEL: "Disponível",
    INDISPONÍVEL: "Indisponível",
    DEVOLUÇÃO: "Em devolução",
    REIVINDICADO: "Reivindicado",
    EM_ANÁLISE: "Em análise",
  };

  return (
    <>
      {loading && <Loading />}
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
              {item?.imagensUrl?.map((imagemUrl, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imagemUrl}
                    alt={`Imagem ${index + 1} do item perdido`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="box-texto">
            <div className="titulo-tag">
              <h2>{item?.nome}</h2>
              <span className={item?.status}>{statusText[item?.status]}</span>
            </div>

            <p>{item?.categoriaNome}</p>

            <div className="box-detalhes">
              <div className="box-detalhes__local">
                <HiOutlineLocationMarker />
                <div className="titulo">
                  <h4>Local</h4>
                  <span>{item?.localNome}</span>
                </div>
              </div>

              <div className="box-detalhes__data">
                <HiOutlineCalendar />
                <div className="titulo">
                  <h4>Data</h4>
                  <time>
                    {new Date(item?.dataAchado).toLocaleDateString("pt-BR")}
                  </time>
                </div>
              </div>

              <div className="box-detalhes__infos">
                <HiPaperClip />
                <div className="titulo">
                  <h4>Informações adicionais</h4>
                  <p>{item?.descricao}</p>
                </div>
              </div>
            </div>

            {item?.statusNome === "DISPONIVEL" ? (
              <Link
                to={`/item/${id}/reivindicar/`}
                className={`redirect-form ${item?.statusNome}`}
                title="Reivindicar item"
              >
                Reivindicar item
              </Link>
            ) : (
              <div className={`redirect-form ${item?.statusNome}`}>
                {statusText[item?.statusNome]}
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
