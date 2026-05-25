"use client"

import { useState } from "react"

async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault()

  const form = e.currentTarget
  const data = new FormData(form)

  const response = await fetch(
    "https://formspree.io/f/mykowkzj",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }
  )

  if (response.ok) {
    window.location.href = "/participar/enviado"
  }
}
export default function ParticiparPage() {

  const [copiado, setCopiado] = useState("")

  async function copiarMensagem(texto: string, id: string) {

  await navigator.clipboard.writeText(texto)

  setCopiado(id)

  setTimeout(() => {
    setCopiado("")
  }, 2000)
}
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">

        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
          Participar
        </div>

        <h1 className="text-4xl md:text-5xl leading-tight font-semibold mb-10">
          Participar
        </h1>

        <p className="text-lg leading-relaxed text-zinc-700 mb-12">
          Este espaço reúne formas de acompanhar, compartilhar e participar
do projeto.
        </p>

        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 mt-16">
  Reflexões
        </div>

       <form
         onSubmit={handleSubmit}
         className="space-y-6"
        >

      <input
  type="hidden"
  name="_next"
  value="http://localhost:3000/participar/enviado"
/>
          <input
            type="text"
            name="nome"
            placeholder="Nome (opcional)"
            className="w-full border border-zinc-300 rounded-2xl px-5 py-4 text-base outline-none focus:border-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email (opcional)"
            className="w-full border border-zinc-300 rounded-2xl px-5 py-4 text-base outline-none focus:border-black"
          />

          <textarea
            name="mensagem"
            placeholder="O que você pensa sobre essa discussão?"
            rows={8}
            className="w-full border border-zinc-300 rounded-2xl px-5 py-4 text-base outline-none focus:border-black resize-none"
          />

          <button
            type="submit"
            className="w-full bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
          >
            Enviar reflexão
          </button>

        </form>

        {/* ACOMPANHAR */}

<section className="py-16 md:py-20 border-t border-zinc-200 mt-20">

  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
    Acompanhar
  </div>

  <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-10">
    Novos temas continuarão sendo observados pelo projeto.
  </h2>

  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">

    <p>
      O Terceiro Nível continua observando estruturas que impactam diretamente
      a vida da população.
    </p>

    <p>
      Quem desejar pode acompanhar novos conteúdos, temas e reflexões que forem
      adicionados ao projeto.
    </p>

  </div>

  <form
    action="https://formspree.io/f/mykowkzj"
    method="POST"
    className="space-y-6"
  >

    <input
      type="email"
      name="email"
      placeholder="Seu email"
      required
      className="w-full border border-zinc-300 rounded-2xl px-5 py-4 text-base outline-none focus:border-black"
    />

    <div className="space-y-4">

  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
    Canais
  </div>

  <div className="flex flex-wrap gap-3">

    
    <div className="border border-zinc-300 bg-white rounded-2xl px-4 py-3 text-sm">
      WhatsApp
    </div>

    <div className="border border-zinc-300 bg-white rounded-2xl px-4 py-3 text-sm">
      Instagram
    </div>

    <div className="border border-zinc-300 bg-white rounded-2xl px-4 py-3 text-sm">
      Telegram
    </div>

  </div>

</div>


    <button
      type="submit"
      className="w-full bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
    >
      Acompanhar novos conteúdos
    </button>

  </form>

</section>

{/* COMPARTILHAR */}

<section className="py-16 md:py-20 border-t border-zinc-200 mt-20">

  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
    Compartilhar
  </div>

  <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-10">
    Algumas perguntas continuam circulando depois da leitura.
  </h2>

  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">

    <p>
      Certas perguntas permanecem na cabeça porque tocam experiências
      cotidianas que milhões de pessoas sentem, mas raramente conseguem
      visualizar estruturalmente.
    </p>

    <p>
      O Terceiro Nível acredita que reflexões importantes também podem circular
      entre pessoas comuns, fora da linguagem técnica e distante dos espaços
      institucionais.
    </p>

  </div>

  <div className="space-y-6">

    <div className="bg-white border border-zinc-200 rounded-[32px] p-8">

      <p className="text-lg leading-relaxed text-zinc-700 mb-6">
        "O terceiro nível é a camada da sociedade que sustenta tudo e mantém o
        país funcionando, mas não tem tempo para entender o Sistema."
      </p>

     <button
  onClick={() =>
    copiarMensagem(
      "O terceiro nível é a camada da sociedade que sustenta tudo e mantém o país funcionando, mas não tem tempo para entender o Sistema.",
      "mensagem1"
    )
  }
  className="w-full sm:w-auto bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
>
  {copiado === "mensagem1" ? "Copiado" : "Copiar mensagem"}
</button>

    </div>

    <div className="bg-white border border-zinc-200 rounded-[32px] p-8">

      <p className="text-lg leading-relaxed text-zinc-700 mb-6">
        "Se o Brasil arrecada trilhões, por que falta dinheiro?"
      </p>

      <button
  onClick={() =>
    copiarMensagem(
      "Se o Brasil arrecada trilhões, por que falta dinheiro?",
      "mensagem2"
    )
  }
  className="w-full sm:w-auto bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
>
  {copiado === "mensagem2" ? "Copiado" : "Copiar mensagem"}
</button>

    </div>

  </div>

</section>

{/* SUGERIR NOVOS TEMAS */}

<section className="py-16 md:py-20 border-t border-zinc-200 mt-20">

  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
    Novos temas
  </div>

  <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-10">
    Algumas reflexões importantes ainda não chegaram ao debate público.
  </h2>

  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">

    <p>
      O Terceiro Nível continua observando estruturas que impactam diretamente
      a vida da população.
    </p>

    <p>
      Sugestões de temas, perguntas e percepções também podem ajudar a ampliar
      o alcance das discussões do projeto.
    </p>

  </div>

  <form
    action="https://formspree.io/f/mykowkzj"
    method="POST"
    className="space-y-6"
  >

    <input
      type="text"
      name="tema"
      placeholder="Título do tema (opcional)"
      className="w-full border border-zinc-300 rounded-2xl px-5 py-4 text-base outline-none focus:border-black"
    />

    <textarea
      name="descricao"
      placeholder="Que tema, pergunta ou estrutura você acha importante observar?"
      rows={7}
      className="w-full border border-zinc-300 rounded-2xl px-5 py-4 text-base outline-none focus:border-black resize-none"
    />

    <button
      type="submit"
      className="w-full bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
    >
      Enviar sugestão
    </button>

  </form>

</section>

{/* LOJA */}

<section className="py-16 md:py-20 border-t border-zinc-200 mt-20">

  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
    Loja
  </div>

  <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-10">
    Algumas ideias também continuam circulando fora da internet.
  </h2>

  <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">

    <p>
      O Terceiro Nível também busca ampliar a circulação pública de temas,
      perguntas e reflexões através de peças físicas do projeto.
    </p>

    <p>
      A loja reúne tanto peças institucionais quanto perguntas relacionadas aos
      temas observados pelo projeto.
    </p>

  </div>

 <a
  href="https://mont.ink/terceiro-nivel"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-full sm:w-auto bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
>
  Conhecer a loja
</a>

</section>

      </div>
    </main>
  )
}