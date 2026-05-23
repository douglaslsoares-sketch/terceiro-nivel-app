export default function Home() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">
 
      {/* HERO */}

<section className="min-h-[90vh] flex items-center px-6 py-20">
  <div className="max-w-2xl mx-auto w-full">

    <div className="flex items-center gap-4 mb-8 md:mb-10">

      <img
        src="/logo-nova.png"
        alt="Logo Terceiro Nível"
        className="w-14 h-14 object-contain"
      />

      <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
        Terceiro Nível
      </div>

    </div>

    <h1 className="text-4xl md:text-6xl leading-tight font-semibold mb-8 md:mb-10">
      Observações sobre estruturas
     <br />
     que impactam diretamente a vida da população.
    </h1>

    <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">

      <p>
        O Terceiro Nível busca ampliar a percepção sobre temas pouco discutidos, mas que afetam o cotidiano das pessoas.
      </p>

      <p>
        Traduzindo estruturas complexas para linguagem acessível.
      </p>

    </div>

    <div className="flex flex-col gap-4 max-w-sm w-full">

      <a
        href="/temas"
        className="bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium text-center hover:bg-zinc-800 transition-all duration-300"
      >
        Ler temas
      </a>

      
    </div>

  </div>
</section>

<section className="py-16 md:py-20 px-6 border-t border-zinc-200">

  <div className="max-w-2xl mx-auto">

    <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
      O projeto
    </div>

    <div className="space-y-6 text-lg leading-relaxed text-zinc-700">

      <p>
        O Terceiro Nível observa temas que normalmente aparecem de forma
        fragmentada no debate público.
      </p>

      <p>
        A proposta não é encerrar discussões, mas ampliar a percepção sobre
        estruturas que impactam diretamente a vida cotidiana da população.
      </p>

    </div>

  </div>

</section>

    </main>
  )
}