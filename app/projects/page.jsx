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
    category: "fatec - API",
    name: "Pro Manager 📊",
    description:
      "Aplicação web de CRM, realizado no 3° semestre de DSM - Fatec.",
    github: "https://github.com/vbuarque/Rocketseat-DevLinks",
    api: "API - Aprendizagem Projetos Integradores",
  },
  {
    image: "/work/Conveccao.png",
    category: "fatec - API",
    name: "Convecção 🌡️",
    description:
      "Aplicação web de CRM, realizado no 4° semestre de DSM - Fatec.",
    github: "https://github.com/Conveccao/conveccao-documentacao",
    api: "API - Aprendizagem Projetos Integradores",
  },
  {
    image: "/work/ForDevs.png",
    category: "fatec - API",
    name: "ForDevs 🤖",
    description:
      "Aplicação web de Classificador de Temas PLN, realizado no 6° semestre de DSM - Fatec.",
    github: "https://github.com/ForDevs-Fatec/Documentation",
    api: "API - Aprendizagem Projetos Integradores",
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
