"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/RocketHelp.png",
    category: "react native",
    name: "Rocket Help 🚀",
    description:
      "Aplicativo para dispositivos móveis com o objetivo de gerenciar aberturas de chamados.",
    github: "https://github.com/vbuarque/ignitelab-rockethelp",
  },
  {
    image: "/work/MiauCafe.png",
    category: "react native",
    name: "Miau Café 🐱",
    description:
      "Aplicativo para dispositivos móveis para gerenciar um cardápio online para uma cafeteria.",
    github: "https://github.com/vbuarque/fatec-app-cafe",
  },
  {
    image: "/work/MeuPortifolio.png",
    category: "next js",
    name: "Meu portifólio pessoal 👨🏻‍💻",
    description:
      "Aplicação web para apresentar meus projetos e experiências profissionais.",
    github: "https://github.com/vbuarque/vb-portfolio",
  },
  {
    image: "/work/SecretCristimas.png",
    category: "react js",
    name: "Secret Cristimas 🎅",
    description:
      "Aplicação web para gerenciar o sorteio de amigo secreto entre amigos e familiares.",
    github: "https://github.com/vbuarque/e-condos-secret-cristimas",
  },
  {
    image: "/work/DevLinks.png",
    category: "html e css",
    name: "Dev Links 🔗",
    description:
      "Aplicação web para agregar links para usar como cartão de visitas online.",
    github: "https://github.com/vbuarque/Rocketseat-DevLinks",
  },
  {
    image: "/work/ProManager.png",
    category: "fatec",
    name: "Pro Manager 📊",
    description:
      "Aplicação web de CRM, realizado no 3° semestre de DSM - Fatec.",
    github: "https://github.com/vbuarque/Rocketseat-DevLinks",
  },
  {
    image: "/work/Conveccao.png",
    category: "fatec",
    name: "Convecção 🌡️",
    description:
      "Aplicação web de CRM, realizado no 4° semestre de DSM - Fatec.",
    github: "https://github.com/Conveccao/conveccao-documentacao",
  },
  {
    image: "/work/ForDevs.png",
    category: "fatec",
    name: "ForDevs 🤖",
    description:
      "Aplicação web de Classificador de Temas PLN, realizado no 6° semestre de DSM - Fatec.",
    github: "https://github.com/ForDevs-Fatec/Documentation",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Projetos mais recentes</h2>
          <p className="subtitle mb-8">
          Alguns dos meus projetos mais recentes que trabalhei.
          </p>
          <Link href="/projects">
            <Button>Todos os projetos</Button>
          </Link>
        </div>

        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPreview={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.map((project, index) => {
              // slice(0, 4)
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
