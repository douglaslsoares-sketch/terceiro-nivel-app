export default function Home() {
  return (
    <main className="bg-[#f5f5f3] text-zinc-900 min-h-screen">

      <section className="px-6 py-20">

        <div className="max-w-2xl mx-auto">

          {/* TOPO */}

          <div className="flex flex-col items-center text-center mb-20">

            <img
              src="/logo-nova.png"
              alt="Logo Terceiro Nível"
              className="w-16 h-16 object-contain mb-6"
            />

            <div className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-2">
  Terceiro Nível
</div>

<div className="text-sm text-zinc-500 mb-6">
  Conscientização e reflexão pública
</div>

            <a
              href="/editorial/por-que-terceiro-nivel"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              [por que terceiro nível?]
            </a>

          </div>

          {/* PERGUNTA */}

<div className="mb-16">

  <a
    href="/temas/se-o-brasil-arrecada-trilhoes"
    className="block border border-zinc-200 bg-white rounded-[32px] p-8 hover:border-zinc-400 transition-all duration-300"
  >
    <h1 className="text-2xl md:text-3xl leading-tight font-semibold">
      Se o Brasil arrecada trilhões,
      <br />
      por que falta dinheiro?
    </h1>
  </a>

</div>

{/* NAVEGAÇÃO */}

<div className="flex flex-col items-center gap-4">

  <a
    href="/temas/se-o-brasil-arrecada-trilhoes"
    className="text-sm uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
  >
    Temas
  </a>

  <a
    href="/editorial"
    className="text-sm uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors duration-300"
  >
    Editorial
  </a>

</div>
        </div>

      </section>

    </main>
  )
}