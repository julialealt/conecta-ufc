"use client";

import JobCard from "@/app/components/ui/job-card";
import { SearchBar } from "@/app/components/ui/search-bar";
import UserCard from "@/app/components/ui/user-card";
import { useMemo, useState } from "react";

const mockOpportunities = [
  {
    id: 'opp-1',
    type: 'opportunity' as const,
    logoUrl: '',
    companyName: 'Insight Lab',
    jobTitle: 'Desenvolvedor Frontend (React)',
    description: 'Estamos buscando um desenvolvedor React talentoso para se juntar à nossa equipe inovadora. Você trabalhará em projetos desafiadores, criando interfaces de usuário modernas e responsivas.',
    location: 'Remoto',
    salary: 'R$ 4.500,00',
    workload: '40h semanais',
    buttonText: 'Ver detalhes da vaga'
  },
  {
    id: 'opp-2',
    type: 'opportunity' as const,
    logoUrl: '',
    companyName: 'GREat',
    jobTitle: 'Engenheiro de Software (Estágio)',
    description: 'Oportunidade de estágio para estudantes de computação e áreas afins para atuar em projetos de pesquisa e desenvolvimento de software, com foco em redes e sistemas distribuídos.',
    location: 'Híbrido - Fortaleza, CE',
    salary: 'R$ 1.500,00',
    workload: '20h semanais',
    buttonText: 'Ver detalhes da vaga'
  }
];

const mockStudents = [
  {
    id: 'student-1',
    type: 'person' as const,
    name: 'Ana Clara',
    profileUrl: '/profile/anaclara',
    bio: 'Estudante de Ciência da Computação na UFC, apaixonada por desenvolvimento web e design de interfaces.',
    about: 'Atualmente no 6º semestre, com experiência em projetos acadêmicos usando React, TypeScript e Figma. Buscando oportunidades de estágio para aplicar e expandir meus conhecimentos.',
    imageUrl: ''
  },
  {
    id: 'student-2',
    type: 'person' as const,
    name: 'Lucas Mendes',
    profileUrl: '/profile/lucasmendes',
    bio: 'Futuro Engenheiro de Software com foco em backend e sistemas escaláveis.',
    about: 'Conhecimentos em Node.js, Python, Docker e bancos de dados SQL e NoSQL. Participei da maratona de programação e desenvolvi projetos pessoais de automação.',
    imageUrl: ''
  }
];

const mockOrganizations = [
  {
    id: 'org-1',
    type: 'organization' as const,
    name: 'Hub de Inovação UFC',
    profileUrl: '/company/hub-ufc',
    bio: 'Conectando a universidade ao mercado, fomentando o empreendedorismo e a inovação tecnológica.',
    about: 'O Hub de Inovação da Universidade Federal do Ceará é um ecossistema que apoia startups, promove a transferência de tecnologia e cria pontes entre estudantes, pesquisadores e empresas.',
    imageUrl: ''
  }
];

// Junta todos os mocks em um único array para a busca geral
const allMockResults = [...mockOpportunities, ...mockStudents, ...mockOrganizations];

export default function ResultsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterActive, setFilterActive] = useState<'opportunities' | 'students' | null>(null);

  const [regime, setRegime] = useState<string | null>(null);
  const [salary, setSalary] = useState<string | null>(null);
  const [workload, setWorkload] = useState<string | null>(null);
  const [course, setCourse] = useState<string | null>(null);
  const [entrySemester, setEntrySemester] = useState<string | null>(null);

  const results = useMemo(() => {
    if (filterActive === 'opportunities') {
      return mockOpportunities;
    }
    if (filterActive === 'students') {
      // Retorna tanto estudantes quanto organizações
      return [...mockStudents, ...mockOrganizations];
    }
    // Se nenhum filtro está ativo (null), mostra tudo
    return allMockResults;
  }, [filterActive]);

  // tem q compartilhar na home e nessa tela, os dados da SearchBar por um context

  return (
    <main className="w-full bg-zinc-950 flex flex-col items-center pt-6 pb-16 overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col items-center gap-12">
        <SearchBar
          placeholder="Pesquisar alunos, empresas ou oportunidades"
          containerClassName="w-full self-stretch"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          filterActive={null}
          regime={regime || ""}
          setRegime={setRegime}
          salary={salary || ""}
          setSalary={setSalary}
          workload={workload || ""}
          setWorkload={setWorkload}
          onFilterOpportunities={() => { }}
          onClearOpportunities={() => { }}
          course={course || ""}
          setCourse={setCourse}
          entrySemester={entrySemester || ""}
          setEntrySemester={setEntrySemester}
          onFilterStudents={() => { }}
          onClearStudents={() => { }}
        />

        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-zinc-300 text-xl font-semibold leading-[150%]">
            {filterActive === null ? "Resultados da pesquisa" : filterActive === 'opportunities' ? "Vagas" : "Alunos"}
          </div>

          <div className="self-stretch inline-flex flex-col justify-start items-start gap-6">
            {/* AQUI O CARD DEPENDE DE QUAL TIPO É O RESULTADO: QUALQUER COISA (VAGAS/USUÁRIOS, ACONTECE QUANDO NENHUM FILTRO ESTÁ ATIVO E O USUÁRIO PESQUISOU SOMENTE PELA SEARCHQUERY) OU SÓ VAGA OU SÓ USUÁRIO (USUÁRIO PODENDO SER STUDENT OU COMPANY) */}
            {results.length > 0 && (
              results.map((result) => {
                if (result.type === 'opportunity') {
                  return (
                    <JobCard
                      key={result.id}
                      opportunityId={result.id}
                      logoUrl={result.logoUrl}
                      companyName={result.companyName}
                      jobTitle={result.jobTitle}
                      description={result.description}
                      location={result.location}
                      salary={result.salary}
                      workload={result.workload}
                      buttonText="Ver candidatos" // texto aqui vai depender qual usuário está vendo essa tela (estudante ou empresa), se for estudante, o texto é "Aplicar" ou se já tiver aplicado "Em análise", se for empresa, depende, se for a que publicou a vaga o texto é "Ver candidatos", se for outra empresa não deve ter botão
                    />
                  )
                } else {
                  return (
                    <UserCard
                      key={result.id}
                      variant={result.type}
                      name={result.name}
                      profileUrl={result.profileUrl}
                      bio={result.bio}
                      about={result.about}
                    />
                  )
                }
              })
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
