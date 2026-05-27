export default function TemasPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-zinc-900">

      {/* TOPO */}

      <section className="py-20 px-6 border-b border-zinc-200">

        <div className="max-w-2xl mx-auto">

          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Tema
          </div>

        </div>

      </section>

      {/* CONTEÚDO */}

      <section className="py-20 px-6">

        <div className="max-w-2xl mx-auto">

          <article className="space-y-8 text-lg leading-relaxed text-zinc-700">

            <h1 className="text-4xl md:text-5xl leading-tight font-semibold text-zinc-900">
              Se o Brasil arrecada trilhões, por que falta dinheiro?
            </h1>

            <p>
              É o que nós também queremos saber.
            </p>

            <p>
              Quase 50% do orçamento federal vai para a dívida pública.
            </p>

            <p>
              Enquanto isso, falta para as demais áreas, principalmente saúde e educação.
            </p>

            <div className="border border-zinc-200 rounded-[32px] p-4 bg-white overflow-hidden">

              <img
                src="/grafico-acd.png"
                alt="Gráfico ACD"
                className="w-full h-auto rounded-[24px]"
              />

            </div>

            <p className="text-sm leading-relaxed text-zinc-500 mt-4 text-center">
  Orçamento federal executado (pago) 2025.
  <br />
  Fonte: Auditoria Cidadã da Dívida.
</p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Que dívida é essa?
            </p>

            <p>
              Se você também deseja saber, participe dessa campanha.
            </p>

            <div className="pt-6">

              <a
                href="/participar"
                className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
              >
                Participar
              </a>

            </div>

          </article>

        </div>

      </section>

    </main>
  );
}