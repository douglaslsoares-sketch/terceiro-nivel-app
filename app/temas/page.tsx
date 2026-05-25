export default function TemasPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-zinc-900">

      {/* TOPO */}

      <section className="py-20 px-6 border-b border-zinc-200">

        <div className="max-w-2xl mx-auto">

          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Temas
          </div>

        </div>

      </section>

      {/* LISTA */}

      <section className="py-20 px-6">

        <div className="max-w-2xl mx-auto space-y-8">


          {/* TEMA */}

          <div className="border border-zinc-200 rounded-[32px] p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">

            <h2 className="text-3xl leading-tight font-semibold mb-6">
              Se o Brasil arrecada trilhões, por que falta dinheiro?
            </h2>

            <p className="text-lg leading-relaxed text-zinc-700 mb-8">
              Uma observação sobre arrecadação, dívida pública, percepção
              econômica e a distância entre estruturas financeiras complexas e a
              vida cotidiana da população.
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

    </main>
  );
}