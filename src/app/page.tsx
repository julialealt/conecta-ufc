"use client";
import { InfoCard } from "./components/ui/info-card";
import { SearchBar } from "./components/ui/search-bar";

export default function Home() {
  return (
    <div className="flex items-center pt-23 flex flex-col  gap-8 p-8">
      <div className="w-[80%] h-full flex flex-col gap-10">
        <SearchBar
          placeholder="Pesquisar alunos, empresas ou oportunidades"
          onFilterClick={() => {}}
        />
        <div className="w-full flex ">
          <div className="w-[60%]">
            <div className="">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Vagas recentes
              </div>
              <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                As últimas oportunidades publicadas na plataforma
              </div>
            </div>
            <div className="mt-5 flex flex-wrap w-full">
              <InfoCard
                title="Vaga desenvolvedor web"
                subtitle="vaga para fazer sites"
                imageUrl=""
                student={false}
                href=""
                className="m-[10px] w-90"
              />
              <InfoCard
                title="Vaga desenvolvedor web"
                subtitle="vaga para fazer sites"
                imageUrl=""
                student={false}
                href=""
                className="m-[10px] w-90"
              />
              <InfoCard
                title="Vaga desenvolvedor web"
                subtitle="vaga para fazer sites"
                imageUrl=""
                student={false}
                href=""
                className="m-[10px] w-90"
              />
              <InfoCard
                title="Vaga desenvolvedor web"
                subtitle="vaga para fazer sites"
                imageUrl=""
                student={false}
                href=""
                className="m-[10px] w-90"
              />
              <InfoCard
                title="Vaga desenvolvedor web"
                subtitle="vaga para fazer sites"
                imageUrl=""
                student={false}
                href=""
                className="m-[10px] w-90"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <div>
                <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                  Alunos destaques
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  Os talentos que se destacam na nossa comunidade
                </div>
              </div>
              <div className="mt-5  flex flex-col w-full">
                <InfoCard
                  title="Julia leal"
                  subtitle="Ciência da Computação"
                  imageUrl=""
                  student={true}
                  href=""
                  className="m-[10px]"
                />
                <InfoCard
                  title="Gabriel Mota"
                  subtitle="Ciência da Computação"
                  imageUrl=""
                  student={true}
                  href=""
                  className="m-[10px]"
                />
                <InfoCard
                  title="Guilherme de menezes"
                  subtitle="Ciência da Computação"
                  imageUrl=""
                  student={true}
                  href=""
                  className="m-[10px]"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                  Contrantes em alta
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  As maiores taxas de contratação no ConectaUFC
                </div>
              </div>
              <div className="mt-5 flex flex-col w-full">
                <InfoCard
                  title="Insight Data Science Lab"
                  subtitle="Laboratório de pesquisa em Ciência de Dados"
                  imageUrl=""
                  student={false}
                  href=""
                  className="m-[10px]"
                />
                <InfoCard
                  title="GREat"
                  subtitle="Grupo de Redes de Computadores, Engen..."
                  imageUrl=""
                  student={false}
                  href=""
                  className="m-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
