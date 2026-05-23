export default function TemasPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-zinc-900">

      {/* INTRODUÇÃO */}

      <section className="py-20 md:py-28 px-6 border-b border-zinc-200">
        <div className="max-w-2xl mx-auto">

          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Temas
          </div>

          <h1 className="text-4xl md:text-5xl leading-tight font-semibold mb-10">
            Observações sobre estruturas
          <br />
           que impactam a vida da população.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700">

            <p>
              O Terceiro Nível organiza temas relacionados a estruturas que
              impactam diretamente a vida da população.
            </p>

            <p>
              A proposta não é oferecer respostas prontas, mas ampliar a
              percepção sobre assuntos complexos que normalmente aparecem de
              forma fragmentada no debate público.
            </p>

          </div>

        </div>
      </section>

      {/* LISTA DE TEMAS */}

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto space-y-8">

          {/* TEMA 01 */}

          <div className="border border-zinc-200 rounded-[32px] p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">

            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Tema 01
            </div>

            <h2 className="text-3xl leading-tight font-semibold mb-6">
              Por que Terceiro Nível?
            </h2>

            <p className="text-lg leading-relaxed text-zinc-700 mb-8">
              Uma introdução à lógica estrutural do projeto e à ideia dos três
              níveis de percepção e influência presentes na sociedade.
            </p>

            <a
              href="/temas/por-que-terceiro-nivel"
              className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
            >
              Ler tema
            </a>

          </div>

          {/* TEMA 02 */}

          <div className="border border-zinc-200 rounded-[32px] p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">

            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Tema 02
            </div>

            <h2 className="text-3xl leading-tight font-semibold mb-6">
              Se o Brasil arrecada trilhões, por que falta dinheiro?
            </h2>

            <p className="text-lg leading-relaxed text-zinc-700 mb-8">
              Uma observação sobre arrecadação, percepção econômica e a distância
              entre estruturas financeiras complexas e a realidade cotidiana da
              população.
            </p>

            <a
              href="/temas/se-o-brasil-arrecada-trilhoes"
              className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
            >
              Ler tema
            </a>

          </div>

        </div>
      </section>

      {/* PARTICIPAÇÃO */}

<section className="py-20 px-6 border-t border-zinc-200">
  <div className="max-w-2xl mx-auto">

    <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
      Continuidade
    </div>

    <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-10">
      O projeto continua observando novos temas e perguntas.
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">

      <p>
        Reflexões, críticas, observações e sugestões também fazem parte da
        construção do Terceiro Nível.
      </p>

      <p>
        O projeto permanece aberto para novas percepções sobre estruturas que
        impactam diretamente a vida da população.
      </p>

    </div>

    <a
      href="/participar"
      className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
    >
      Participar do projeto
    </a>

  </div>
</section>

    </main>
  );
}