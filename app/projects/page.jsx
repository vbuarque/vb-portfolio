"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
      "Portifolio para apresentar meus projetos e experiências profissionais.",
    github: "https://github.com/vbuarque/vb-portfolio",
  },
  {
    image: "/work/SecretCristimas.png",
    category: "react js",
    name: "Secret Cristimas 🎅",
    description:
      "Gerenciamento de sorteio de amigo secreto entre amigos e familiares.",
    github: "https://github.com/vbuarque/e-condos-secret-cristimas",
  },
  {
    image: "/work/DevLinks.png",
    category: "html e css",
    name: "Dev Links 🔗",
    description:
      "Agregador de links para usar como cartão de visitas online.",
    github: "https://github.com/vbuarque/Rocketseat-DevLinks",
  },
  {
    image: "/work/Vanguarda.png",
    category: "fatec - API",
    name: "Projeto Vanguarda 📺",
    description:
      "Visualizador de dados de eleitores (Empresa Vanguarda), realizado no 1° semestre de DSM - Fatec.",
    github: "https://github.com/grupo-3dsm/repo_pi",
  },
  {
    image: "/work/Sirius.png",
    category: "fatec - API",
    name: "Projeto Sirius 🛰️",
    description:
      "Visualizador de imagens de satelite (Empresa Visiona), realizado no 2° semestre de DSM - Fatec.",
    github: "https://github.com/grupo-3dsm/Sirius-repoP.I",
  },
  {
    image: "/work/GoodTicket.png",
    category: "fatec - API",
    name: "Good Ticket 🎫",
    description:
      "CRM inteligente (Empresa IACIT), realizado no 3° semestre de DSM - Fatec.",
    github: "https://github.com/Grupo2-DSM/Api-3dsm-2022",
  },
  {
    image: "/work/Conveccao.png",
    category: "fatec - API",
    name: "Convecção 🌎",
    description:
      "Analise ambiental a partir de sensores (Empresa Tecsus), realizado no 4° semestre de DSM - Fatec.",
    github: "https://github.com/Conveccao/conveccao-documentacao",
  },
  {
    image: "/work/ProManager.png",
    category: "fatec - API",
    name: "Pro Manager 📊",
    description:
      "Gestão de negócios (Empresa Oracle), realizado no 5° semestre de DSM - Fatec.",
    github: "https://github.com/ProManage-FatecSJC/pro-manager-documentation",
  },
  {
    image: "/work/ForDevs.png",
    category: "fatec - API",
    name: "ForDevs 🤖",
    description:
      "Classificador de Temas IA/PLN (Empresa Dom Rock), realizado no 6° semestre de DSM - Fatec.",
    github: "https://github.com/ForDevs-Fatec/Documentation",
  },
];

const uniqueCategories = [
  "todos",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("todos");

  const filteredProjects = projectData.filter((project) => {
    return category === "todos" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Meus Projetos
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-6 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {category === "fatec - API" ? (
            <>
              <p className="subtitle mb-8 text-center xl:text-left">
                API - Aprendizagem por Projetos Integradores.
              </p>
            </>
          ) : (
            <></>
          )}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
