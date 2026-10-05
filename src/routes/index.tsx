import { createFileRoute } from "@tanstack/react-router";
import { Activity, HandHeart, MapPin, Clock, Phone, Star, Sparkles, Zap, Quote, MessageCircle, Navigation } from "lucide-react";
import hero from "@/assets/hero.jpg";

const WA = "https://wa.me/5563992899971?text=" + encodeURIComponent("Olá, Dra. Ivonete! Gostaria de agendar minha avaliação.");
const ADDRESS = "Av. Filadélfia, 2815 - Jardim América, Araguaína - TO, 77805-221";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Dra. Ivonete Ribeiro Fisioterapia " + ADDRESS);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Ivonete Ribeiro | Fisioterapia & Pilates em Araguaína" },
      { name: "description", content: "Fisioterapia, Pilates Clínico, Quiropraxia e Liberação Miofascial em Araguaína-TO. Método IR: trate a causa, não apenas a dor. Nota 4,9 no Google." },
      { property: "og:title", content: "Dra. Ivonete Ribeiro | Fisio & Fitness" },
      { property: "og:description", content: "Transforme a sua dor em liberdade de movimento com o Método IR. Agende sua avaliação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Activity, t: "Pilates Clínico & Reabilitação", d: "Força, postura, controle e mobilidade." },
  { icon: HandHeart, t: "Quiropraxia & Liberação Miofascial", d: "Alívio de dores na coluna, tensões e mobilidade." },
  { icon: Sparkles, t: "Tratamento da Dor & Hérnia de Disco", d: "Foco na causa raiz do sintoma." },
  { icon: Zap, t: "Terapia Invasiva & Laserterapia", d: "Aceleração da recuperação tecidual." },
];

const reviews = [
  { n: "Aislany Oliveira", t: "Excelente profissional! Trata cada caso de forma única, com foco na identificação e resolução da causa raiz de cada situação." },
  { n: "Franciléia Soares", t: "Profissional extremamente dedicada e competente! O trabalho dela tem feito muita diferença na minha vida e na das minhas alunas. Recomendo demais!" },
  { n: "Bruna de Paula", t: "Extremamente dedicada, atenciosa e competente. Demonstra profundo conhecimento técnico aliado a um cuidado genuíno com o paciente. Recomendo com total confiança!" },
];

function WaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 ${className}`}>
      <MessageCircle className="h-5 w-5" /> {children}
    </a>
  );
}

function Stars() {
  return <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>;
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-primary-foreground">
          <a href="#" className="font-display text-xl font-semibold">Ivonete Ribeiro<span className="text-accent">.</span></a>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="#servicos" className="opacity-80 hover:opacity-100">Serviços</a>
            <a href="#metodo" className="opacity-80 hover:opacity-100">Método IR</a>
            <a href="#sobre" className="opacity-80 hover:opacity-100">Sobre</a>
            <a href="#depoimentos" className="opacity-80 hover:opacity-100">Depoimentos</a>
            <a href="#contato" className="opacity-80 hover:opacity-100">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 md:grid-cols-2 md:pt-36">
          <div>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-sm">
              <Star className="h-4 w-4 fill-current text-accent" /> 4,9 no Google · 36 avaliações
            </a>
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Transforme a sua dor em <em className="text-accent">liberdade</em> de movimento
            </h1>
            <p className="mt-6 max-w-lg text-lg opacity-85">
              Tratamentos personalizados para a causa do seu problema, não apenas para a dor. Recupere sua qualidade de vida com o Método IR.
            </p>
            <WaButton className="mt-9 w-full sm:w-auto">Agendar Minha Avaliação no WhatsApp</WaButton>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-accent/30 blur-2xl" />
            <img src={hero} alt="Dra. Ivonete Ribeiro em seu estúdio de Pilates clínico" width={1024} height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>

      {/* Authority bar */}
      <section className="border-b bg-lavender">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-center sm:grid-cols-3">
          {[["CREFITO", "387261"], ["+1.000", "Pacientes atendidos"], ["Método IR", "Criadora · Corpo em Movimento"]].map(([a, b]) => (
            <div key={a}><div className="font-display text-2xl font-semibold text-primary">{a}</div><div className="text-sm text-muted-foreground">{b}</div></div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Especialidades</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold text-primary sm:text-4xl">Cuidado completo para o seu corpo voltar a se mover</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: I, t, d }) => (
            <div key={t} className="group rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-accent group-hover:text-accent-foreground"><I className="h-6 w-6" /></div>
              <h3 className="text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Method */}
      <section id="metodo" className="border-y bg-method text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">O diferencial</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Método IR</h2>
            <p className="mt-6 font-display text-2xl italic opacity-90">“Ondas de cuidado focadas na pessoa inteira, não apenas onde dói.”</p>
          </div>
          <div className="space-y-6">
            {[["Escuta ativa", "Cada sessão começa entendendo sua história, sua rotina e seus objetivos."],
              ["Empatia", "Um ambiente acolhedor, onde você é tratado como pessoa — não como diagnóstico."],
              ["Cuidado personalizado", "Protocolos desenhados para a causa raiz do seu problema e para a sua evolução."]].map(([t, d], i) => (
              <div key={t} className="flex gap-5 border-b border-primary-foreground/15 pb-6">
                <span className="font-display text-3xl text-accent">0{i + 1}</span>
                <div><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 opacity-75">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-5">
        <div className="md:col-span-2">
          <img src={hero} alt="Dra. Ivonete Ribeiro" loading="lazy" width={1024} height={1280} className="aspect-square w-full rounded-[2rem] object-cover object-top" />
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sobre</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">Dra. Ivonete Ribeiro</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Antes de cuidar de centenas de pacientes, ela viveu a dor na pele: uma hérnia de disco que limitava sua rotina.
            Ao superar essa fase através do movimento, encontrou seu propósito — e criou o Método IR para ajudar outras pessoas a viverem sem dor.
          </p>
          <blockquote className="mt-8 rounded-2xl bg-lavender p-7">
            <Quote className="h-7 w-7 text-accent" />
            <p className="mt-3 font-display text-xl italic text-primary">“Eu sei o que é sentir dor. Por isso, cada paciente recebe de mim a escuta, o tempo e o cuidado que eu gostaria de ter recebido.”</p>
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-lavender">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Depoimentos</p>
              <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">Histórias de quem voltou a se mover</h2>
            </div>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-card px-5 py-3 shadow-card">
              <span className="font-display text-3xl font-semibold text-primary">4,9</span>
              <span><Stars /><span className="text-xs text-muted-foreground">36 avaliações no Google</span></span>
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.n} className="flex flex-col rounded-2xl bg-card p-7 shadow-card">
                <Stars />
                <blockquote className="mt-4 flex-1 text-foreground">“{r.t}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">{r.n[0]}</span>
                  <span><span className="block font-semibold text-primary">{r.n}</span><span className="text-xs text-muted-foreground">via Google</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid overflow-hidden rounded-[2rem] border shadow-card md:grid-cols-2">
          <iframe title="Mapa da clínica" className="h-80 w-full md:h-full" loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} />
          <div className="bg-card p-8 sm:p-12">
            <h2 className="text-3xl font-semibold text-primary">Agende sua avaliação</h2>
            <p className="mt-3 text-muted-foreground">Dê o primeiro passo para uma vida com mais movimento.</p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4"><MapPin className="h-5 w-5 shrink-0 text-accent" /><span>{ADDRESS}</span></li>
              <li className="flex gap-4"><Clock className="h-5 w-5 shrink-0 text-accent" /><span>Segunda a sexta, até as 20h</span></li>
              <li className="flex gap-4"><Phone className="h-5 w-5 shrink-0 text-accent" /><a href="tel:+5563992899971" className="hover:text-accent">(63) 99289-9971</a></li>
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WaButton>Agendar no WhatsApp</WaButton>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 font-semibold text-primary hover:bg-secondary">
                <Navigation className="h-5 w-5" /> Como chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dra. Ivonete Ribeiro · Fisio & Fitness · CREFITO 387261
      </footer>

      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition hover:scale-110">
        <MessageCircle className="h-8 w-8" />
      </a>
    </main>
  );
}
