"use client";

import Avatar from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { Pen, Plus } from "lucide-react";

export default function StudentProfile() {
  return (
    <div className="w-full self-stretch px-30 pt-12 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16">
      <div className="self-stretch w-full inline-flex justify-start items-start gap-6">
        <Avatar imageUrl={""} name={"Jimin"} variant="person" size="lg" />

        <div className="self-stretch w-full inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-white text-xl font-semibold leading-[150%]">
            Jimin do BTS
          </div>
        </div>

        <Button variant="outline_violet" Icon={Pen} className="p-2.5" />
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-6">
        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Sobre
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            Integrante do BTS
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Formação acadêmica
          </div>
          <div className="w-[80%] flex justify-between text-zinc-300 text-base font-medium leading-[150%]">
            <div className="flex flex-col">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Curso
              </div>
              <div className="w-full justify-start text-white text-base font-normal leading-[150%]">
                Dança
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Semestre de ingresso
              </div>
              <div className="w-full justify-start text-white text-base font-normal leading-[150%]">
                2003.2
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Previsão de termino
              </div>
              <div className="w-full justify-start text-white text-base font-normal leading-[150%]">
                2025.2
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Experiência profissional
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5  " />
          </div>

          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            <div className=" flex justify-start">
              <div className=" justify-start text-violet text-xl font-semibold leading-[150%]">
                Dançarino do BTS
              </div>
              <Button
                variant="icon"
                Icon={Pen}
                className="p-2.5  "
                size="small"
              />
            </div>
            <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
              junho 2013 - atual
            </div>
            <div className="pt-5 w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              Partipava das danças do bts, atualmente estou parado pois estava
              servindo o exército coreano
            </div>
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Habilidades
            </div>
            <Button variant="filled_icon" Icon={Pen} className="p-2.5  " />
          </div>
          <div className="w-full flex flex-wrap justify-start text-zinc-300 text-base font-medium leading-[150%]">
            <div className="mr-[10px] w-fit pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-1 border-solid border-zinc-500 rounded-[8px]">
              Kpop
            </div>
            <div className="mr-[10px] w-fit pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-1 border-solid border-zinc-500 rounded-[8px]">
              Dança de vários estilos
            </div>
            <div className="mr-[10px] w-fit pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-1 border-solid border-zinc-500 rounded-[8px]">
              Canto
            </div>
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Projetos
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5" />
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            <div className=" flex justify-start">
              <div className=" justify-start text-white font-semibold leading-[150%]">
                Composição da música Lie
              </div>
              <Button
                variant="icon"
                Icon={Pen}
                className="p-2.5  "
                size="small"
              />
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              É uma música solo do Jimin no álbum, com uma letra intensa e
              performance marcante. Participei da composição, especialmente nas
              partes relacionadas à entrega vocal e emocional.
            </div>
            <div className=" flex justify-start pt-2">
              <div className=" justify-start text-zinc-100 font-semibold text-xs">
                Projeto pessoal
              </div>
              <div className=" ml-3 justify-start text-violet font-semibold text-xs">
                https://kjaksdjakjsd
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Artigos publicados
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5" />
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              <div className=" flex justify-start">
                <div className=" justify-start text-white font-semibold leading-[150%]">
                  Movimentos de kpop e seu efeito no publico
                </div>
                <Button
                  variant="icon"
                  Icon={Pen}
                  className="p-2.5"
                  size="small"
                />
              </div>
              <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                Esse artigo estuda os movimentos das performances de kpop e qual
                o seu efeito na plateia
              </div>
              <div className=" flex justify-start pt-2">
                <div className=" justify-start text-zinc-100 font-semibold text-xs">
                  Artigo publicado
                </div>
                <div className=" ml-3 justify-start text-violet font-semibold text-xs">
                  https://kjaksdjakjsd
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Certificados
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5" />
          </div>
          <div className="w-full flex justify-start text-zinc-300 text-base font-medium leading-[150%]">
            <Avatar
              imageUrl={""}
              name={"Certificado"}
              variant="organization"
              size="lg"
            />
            <div className="ml-4">
              <div className="flex justify-start">
                <div className=" justify-start text-white font-semibold leading-[150%]">
                  Movimentos de kpop e seu efeito no publico
                </div>
                <Button
                  variant="icon"
                  Icon={Pen}
                  className="p-2.5"
                  size="small"
                />
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <span>Rocketseat</span>
                <span>•</span>
                <span>22/06/2025</span>
              </div>
              <Button variant="text">
                <div className="text-violet font-semibold text-xs">
                  ver certificado
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
