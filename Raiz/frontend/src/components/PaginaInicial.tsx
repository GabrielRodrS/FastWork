import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Zap,
  SprayCan,
  PaintRoller,
  BrickWall,
  Hammer,
  Waves,
  Ellipsis,
  Star,
  MapPin,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import Header from "./Header";

const servicos: { nome: string; icone: LucideIcon }[] = [
  { nome: "Encanador", icone: Wrench },
  { nome: "Eletricista", icone: Zap },
  { nome: "Diarista", icone: SprayCan },
  { nome: "Pintor", icone: PaintRoller },
  { nome: "Pedreiro", icone: BrickWall },
  { nome: "Montador de móveis", icone: Hammer },
  { nome: "Piscineiro", icone: Waves },
  { nome: "Outros serviços", icone: Ellipsis },
];

const servicosDestaque = [
  {
    nome: "Instalação elétrica",
    descricao: "Tomadas, chuveiros, lustres e quadros de energia.",
    preco: "a partir de R$ 90",
    imagem: "/Eletrica.jpg",
  },
  {
    nome: "Reparo hidráulico",
    descricao: "Vazamentos, torneiras, descargas e entupimentos.",
    preco: "a partir de R$ 80",
    imagem: "/Encanador.jpg",
  },
  {
    nome: "Limpeza residencial",
    descricao: "Diarista para limpeza completa ou pesada.",
    preco: "a partir de R$ 120",
    imagem: "/Limpeza.jpg",
  },
];

const melhorProfissional = {
  nome: "Carlos Mendes",
  profissao: "Eletricista",
  regiao: "Terra Boa, PR",
  nota: 4.9,
  avaliacoes: 187,
  servicosConcluidos: 320,
  descricao:
    "Mais de 12 anos de experiência em instalações residenciais, com atendimento rápido, orçamento claro e garantia no serviço.",
};

export default function PaginaInicial() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      {/* Navegação de serviços */}
      <nav aria-label="Serviços" className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-start gap-x-3 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6">
          {servicos.map(({ nome, icone: Icone }) => (
            <Link
              key={nome}
              href={`/prestadores?busca=${encodeURIComponent(nome)}`}
              className="group flex w-24 shrink-0 flex-col items-center gap-2 rounded-xl px-2 py-2 text-center transition-colors hover:bg-orange-50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#1E3A5F] transition-all group-hover:border-orange-500 group-hover:bg-orange-50 group-hover:text-orange-600">
                <Icone className="h-6 w-6" aria-hidden="true" />
              </span>

              <span className="text-xs font-semibold leading-tight text-zinc-700 transition-colors group-hover:text-orange-600">
                {nome}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-1">
        {/* Banner principal */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white px-4 py-16 sm:py-24">
          {/* Detalhes decorativos */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1E3A5F]/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#1E3A5F]/15 bg-[#1E3A5F]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E3A5F]">
              Serviços para sua casa
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Aqui você encontra o profissional correto para seu problema!
            </h1>

            <p className="mt-4 text-lg text-zinc-600">
              Peça orçamentos grátis e contrate com rapidez e segurança.
            </p>

            <form
              action="/prestadores"
              method="get"
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg shadow-[#1E3A5F]/5 sm:flex-row sm:rounded-full"
            >
              <input
                type="text"
                name="busca"
                placeholder="Que serviço você precisa?"
                className="h-12 min-w-0 flex-1 rounded-full bg-transparent px-5 text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#1E3A5F]/20"
              />

              <button
                type="submit"
                className="h-12 rounded-full bg-orange-500 px-8 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Buscar
              </button>
            </form>

            <p className="mt-5 text-sm text-zinc-500">
              <span className="font-semibold text-[#1E3A5F]">
                Encontre profissionais
              </span>{" "}
              qualificados perto de você.
            </p>
          </div>
        </section>

        {/* Serviços em destaque */}
        <section className="px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-[#1E3A5F]" />

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
                  Serviços em destaque
                </h2>

                <p className="mt-1 text-zinc-600">
                  Os mais contratados pelos nossos clientes.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicosDestaque.map(({ nome, descricao, preco, imagem }) => (
                <Link
                  key={nome}
                  href={`/prestadores?busca=${encodeURIComponent(nome)}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-[#1E3A5F] hover:shadow-xl hover:shadow-[#1E3A5F]/10"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={imagem}
                      alt={nome}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-[#1E3A5F] px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                      Serviço residencial
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col border-t-2 border-[#1E3A5F] p-5">
                    <h3 className="text-lg font-bold text-[#1E3A5F] transition-colors group-hover:text-orange-600">
                      {nome}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                      {descricao}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm font-bold text-orange-600">
                        {preco}
                      </p>

                      <span className="text-sm font-semibold text-[#1E3A5F] transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Melhor profissional */}
        <section className="bg-[#1E3A5F]/5 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-orange-500" />

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1E3A5F] sm:text-3xl">
                  Profissional em destaque
                </h2>

                <p className="mt-1 text-zinc-600">
                  O melhor avaliado da plataforma neste mês.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-[#1E3A5F]/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-[#1E3A5F]/10 bg-[#1E3A5F] text-3xl font-extrabold text-white">
                {melhorProfissional.nome
                  .split(" ")
                  .map((parte) => parte[0])
                  .join("")}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-[#1E3A5F]">
                    {melhorProfissional.nome}
                  </h3>

                  <BadgeCheck
                    className="h-5 w-5 text-[#1E3A5F]"
                    aria-label="Profissional verificado"
                  />
                </div>

                <p className="text-sm font-medium text-zinc-600">
                  {melhorProfissional.profissao}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
                  <span className="flex items-center gap-1 font-semibold text-zinc-900">
                    <Star
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                      aria-hidden="true"
                    />

                    {melhorProfissional.nota.toFixed(1)}

                    <span className="font-normal text-zinc-500">
                      ({melhorProfissional.avaliacoes} avaliações)
                    </span>
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin
                      className="h-4 w-4 text-[#1E3A5F]"
                      aria-hidden="true"
                    />
                    {melhorProfissional.regiao}
                  </span>

                  <span>
                    {melhorProfissional.servicosConcluidos} serviços concluídos
                  </span>
                </div>

                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">
                  {melhorProfissional.descricao}
                </p>
              </div>

              <Link
                href="/prestadores"
                className="rounded-full bg-[#1E3A5F] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#152C49]"
              >
                Ver perfil
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
