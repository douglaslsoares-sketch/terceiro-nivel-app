export default function PorQueTerceiroNivelPage() {
  return (
    <main className="bg-[#f5f5f3] text-zinc-900">

      {/* INTRODUÇÃO */}

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">

         

          <h1 className="text-4xl md:text-5xl leading-tight font-semibold mb-10">
            Por que Terceiro Nível?
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700">

            <p>
              Porque o terceiro nível é a camada da sociedade que sustenta tudo
              e mantém o país funcionando, mas não tem tempo para entender o
              Sistema.
            </p>

            <p>
              Enquanto grande parte da população está ocupada tentando garantir
              trabalho, renda, deslocamento, estabilidade e sobrevivência,
              estruturas organizadas possuem mais tempo, recursos e capacidade
              de influência sobre os rumos da sociedade.
            </p>

            <p>
              O Terceiro Nível nasce da tentativa de aproximar temas complexos
              das pessoas diretamente afetadas por eles.
            </p>

          </div>

        </div>
      </section>

      {/* OS TRÊS NÍVEIS */}

<section className="py-16 md:py-20 px-6 border-t border-zinc-200">
  <div className="max-w-2xl mx-auto">

    <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-5">
      Os três níveis
    </div>

    <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-12">
      Uma forma simples de enxergar a estrutura do país.
    </h2>

    <div className="space-y-6">

      {/* PRIMEIRO NÍVEL */}

      <div className="border border-zinc-200 rounded-[32px] p-7 bg-white">

        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
          Primeiro nível
        </div>

        <h3 className="text-2xl leading-tight font-semibold mb-4">
          Estruturas predominantes de poder
        </h3>

        <p className="text-zinc-700 leading-relaxed">
          Grandes estruturas econômicas, financeiras, políticas e grupos
          organizados com alta capacidade de influência sobre decisões públicas,
          circulação de recursos e direcionamento institucional.
        </p>

      </div>

      {/* SEGUNDO NÍVEL */}

      <div className="border border-zinc-200 rounded-[32px] p-7 bg-white">

        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
          Segundo nível
        </div>

        <h3 className="text-2xl leading-tight font-semibold mb-4">
          Intermediação institucional e narrativa pública
        </h3>

        <p className="text-zinc-700 leading-relaxed">
          Espaços responsáveis por administrar, comunicar, interpretar
          acontecimentos e influenciar a percepção pública da sociedade.
        </p>

      </div>

      {/* TERCEIRO NÍVEL */}

      <div className="bg-zinc-900 text-white rounded-[32px] p-7">

        <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">
          Terceiro nível
        </div>

        <h3 className="text-2xl leading-tight font-semibold mb-4">
          A base que sustenta tudo
        </h3>

        <p className="leading-relaxed text-zinc-300">
          A camada social que trabalha, produz, sustenta serviços e mantém o
          funcionamento concreto do país, mas que raramente consegue acompanhar
          profundamente as estruturas que influenciam sua própria realidade.
        </p>

      </div>

    </div>

  </div>
</section>

{/* APLICAÇÃO */}

<section className="py-16 md:py-20 px-6 border-t border-zinc-200">
  <div className="max-w-2xl mx-auto">

    <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
      Aplicação
    </div>

    <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-10">
      Como isso aparece na vida real?
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-zinc-700">

      <p>
        Grande parte da população vive ocupada tentando sustentar a própria
        rotina: trabalho, deslocamento, contas, estabilidade e sobrevivência.
      </p>

      <p>
        Enquanto isso, grupos organizados possuem mais tempo, estrutura,
        recursos e capacidade de influência sobre decisões econômicas,
        políticas e institucionais.
      </p>

      <p>
        Muitas vezes, quem sofre diretamente os impactos dessas decisões é quem
        possui menos tempo para compreender profundamente como elas funcionam.
      </p>

    </div>

  </div>
</section>


{/* FECHAR */}

<section className="py-16 px-6 border-t border-zinc-200">

  <div className="max-w-2xl mx-auto flex justify-center">

    <a
      href="/"
      className="text-sm uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
    >
      Fechar
    </a>

  </div>

</section>

    </main>
  );
}
