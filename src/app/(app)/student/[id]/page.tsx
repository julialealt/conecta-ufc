"use client";

import Avatar from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { Pen, Pencil, Plus } from "lucide-react";

export default function StudentProfile() {
  return (
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16">
      <div className="self-stretch w-full inline-flex justify-start items-start gap-6">
        <Avatar imageUrl={""} name={"Gabriel Bruno Mota"} variant="person" size="lg" />

        <div className="self-stretch w-full inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-white text-xl font-semibold leading-[150%]">
            Gabriel Bruno Mota
          </div>

          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            Software Developer | React | React Native | TypeScript | JavaScript
          </div>

          <div className="justify-start text-violet-500 text-xs font-medium leading-[150%]">
            Informações de contato
          </div>
        </div>

        <Button variant="outline_violet" Icon={Pen} size="icon" />
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-12">

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">Sobre</div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Sou Desenvolvedor de Software. Já trabalhei com diversas tecnologias como React, React Native, Flutter, JavaScript, TypeScript, entre outros. Além disso, sou uma entusiasta em tecnologias de desenvolvimento front-end e também em UI/UX design. Algumas das minhas soft skills são proatividade, capacidade de rápida aprendizagem e facilidade de trabalhar em equipe. Assim como, tenho um sólido conhecimento do software de design Figma e UI/UX skills. Atualmente, estou interessada em melhorar minhas habilidades em desenvolvimento front-end e em me especializar em React.</div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">Formação acadêmica</div>
          <div className="w-full inline-flex justify-start items-start gap-8">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">Curso</div>
              <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">Ciência da Computação</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">Semestre de ingresso</div>
              <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">2021.1</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">Previsão de término</div>
              <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">2025.2</div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">Experiência profissional</div>
            <Button variant="primary" Icon={Plus} size="icon" />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-violet-500 text-lg font-semibold leading-[150%]">UI/UX Designer - IBM</div>
              <Button variant="icon" Icon={Pencil} size="icon" />
            </div>
            <div className="w-full justify-start text-white text-base font-semibold leading-[150%] italic">maio de 2024 - atual</div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-violet-500 text-lg font-semibold leading-[150%]">UI/UX Designer - GoTest</div>
              <Button variant="icon" Icon={Pencil} size="icon" />
            </div>
            <div className="w-full justify-start text-white text-base font-semibold leading-[150%] italic">novembro de 2023 - maio de 2024</div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-violet-500 text-lg font-semibold leading-[150%]">Bolsista Voluntária de Inovação Tecnológica - Laboratório Alan Turing</div>
              <Button variant="icon" Icon={Pencil} size="icon" />
            </div>
            <div className="w-full justify-start text-white text-base font-semibold leading-[150%] italic">abril de 2023 - novembro de 2023</div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>
        </div>

        <div className="w-full self-stretch pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-9">Habilidades</div>
            <Button variant="primary" Icon={Pencil} size="icon" />
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start">
            <Button variant="ghost">React</Button>
            <Button variant="ghost">React Native</Button>
            <Button variant="ghost">JavaScript</Button>
            <Button variant="ghost">TypeScript</Button>
            <Button variant="ghost">Figma</Button>
            <Button variant="ghost">Python</Button>
            <Button variant="ghost">Salesforce</Button>
            <Button variant="ghost">Inglês fluente</Button>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">Projetos</div>
            <Button variant="primary" Icon={Plus} size="icon" />
          </div>

          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-white text-lg font-semibold leading-[150%]">Pizza Shop</div>
              <Button variant="icon" Icon={Pencil} size="icon" />
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Pizza Shop is a modern web app to help restaurant owners manage orders, track sales, and run daily operations smoothly. Built with React, TypeScript, Tailwind CSS, Shadcn UI, TanStack React Query, Zod, Recharts and more!</div>
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="justify-start text-zinc-500 text-sm font-medium leading-[150%]">Projeto pessoal</div>
              <div className="justify-start text-violet-500 text-sm font-medium leading-[150%]">https://github.com/julialealt/pizza-shop</div>
            </div>
          </div>

          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-white text-lg font-semibold leading-[150%]">Receite.me</div>
              <Button variant="icon" Icon={Pencil} size="icon" />
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">O app Receite.me foi desenvolvido na disciplina de Engenharia de Software e é um aplicativo de receitas inteligente!</div>
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="justify-start text-zinc-500 text-sm font-medium leading-[150%]">Projeto desenvolvido na faculdade</div>
              <div className="justify-start text-violet-500 text-sm font-medium leading-[150%]">https://github.com/julialealt/receite-me-pps</div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">Artigos publicados</div>
            <Button variant="primary" Icon={Plus} size="icon" />
          </div>

          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="justify-start text-white text-lg font-semibold leading-[150%]">Impacto da Inteligência Artificial no Mercado de Trabalho</div>
              <Button variant="icon" Icon={Pencil} size="icon" />
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Breve resumo do artigo. Descrição sobre ele, autores, co-autores, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="justify-start text-zinc-500 text-sm font-medium leading-[150%]">Artigo publicado</div>
              <div className="justify-start text-violet-500 text-sm font-medium leading-[150%]">https://link-do-artigo.com</div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">Certificados</div>
            <Button variant="primary" Icon={Plus} size="icon" />
          </div>

          <div className="self-stretch inline-flex justify-start items-start gap-4">
            <Avatar variant="organization" name="Rocketseat" size="md" />
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              <div className="self-stretch inline-flex justify-start items-center gap-1">
                <div className="justify-start text-white text-lg font-semibold leading-[150%]">Formação React</div>
                <Button variant="icon" Icon={Pencil} size="icon" />
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">Rocketseat</div>
                <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">•</div>
                <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">22/06/2025</div>
              </div>
              <div className="justify-start text-violet-600 text-xs font-medium leading-[150%]">Ver certificado</div>
            </div>
          </div>

          <div className="self-stretch inline-flex justify-start items-start gap-4">
            <Avatar variant="organization" name="Rocketseat" size="md" />
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              <div className="self-stretch inline-flex justify-start items-center gap-1">
                <div className="justify-start text-white text-lg font-semibold leading-[150%]">Formação React</div>
                <Button variant="icon" Icon={Pencil} size="icon" />
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">Rocketseat</div>
                <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">•</div>
                <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">22/06/2025</div>
              </div>
              <div className="justify-start text-violet-600 text-xs font-medium leading-[150%]">Ver certificado</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
