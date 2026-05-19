export default function Home() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">
 {/* HEADER */}
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
  <div className="max-w-xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center gap-3 -mt-1">
      <img
        src="/logo-nova.png"
        alt="Logo Terceiro Nível"
        className="w-12 h-12"
      />

      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Projeto
        </div>

        <div className="text-lg font-semibold">
          Terceiro Nível
        </div>
      </div>
    </div>

    <a
      href="#participar"
      className="text-sm border border-zinc-300 rounded-full px-4 py-2"
>
      Participar
    </a>

  </div>
</header>

      {/* HERO */}
      <section id="inicio" className="px-6 pt-16 pb-20">
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-zinc-300 rounded-full px-4 py-2 text-xs uppercase tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
            Consciência pública em linguagem acessível
          </div>

          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight mb-8">
            O país funciona porque existe uma base sustentando tudo.
          </h1>

          <p className="text-xl leading-relaxed text-zinc-700 mb-10">
            O Terceiro Nível traduz temas complexos para linguagem humana,
            ajudando a população a compreender estruturas que impactam sua vida
            diariamente.
          </p>

          <div className="flex flex-col gap-4">
          <a
            href="#pergunta"
            className="bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium text-center"
>
            Começar pela pergunta
          </a>

          <a
            href="#projeto"
            className="border border-zinc-300 rounded-2xl py-4 px-6 text-base font-medium text-center"
>
            Entender o projeto
          </a>
          </div>
        </div>
      </section>

      {/* MAIN QUESTION */}
      <section id="pergunta" className="bg-zinc-100 py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-5">
            A pergunta que iniciou tudo
          </div>

          <h2 className="text-4xl leading-tight font-semibold mb-10">
            Se o Brasil arrecada trilhões,
            <br />
            por que falta dinheiro?
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
            <p>
              Essa pergunta abriu uma conversa que raramente acontece fora dos
              espaços técnicos.
            </p>

            <p>
              Ao longo de décadas, governos fizeram empréstimos, renovaram
              dívidas e ampliaram mecanismos ligados à dívida pública.
            </p>

            <p>
              Hoje, uma parte enorme do orçamento federal está conectada a esse
              sistema.
            </p>

            <p>
              Mesmo assim, poucas pessoas conseguem acessar esse assunto de
              forma clara e acessível.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-12">
            <a
              href="/narrativa"
              className="block w-full bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium text-center"
>
              Ler a narrativa completa
            </a>

           <a
             href="https://wa.me/?text=Se%20o%20Brasil%20arrecada%20trilh%C3%B5es,%20por%20que%20falta%20dinheiro?%20https://terceironivel.org"
             target="_blank"
             className="bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium text-center"
>
             Compartilhar no WhatsApp
           </a>
          </div>
        </div>
      </section>

      {/* THREE LEVELS */}
      <section id="projeto" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-5">
            O que é o Terceiro Nível?
          </div>

          <h2 className="text-4xl leading-tight font-semibold mb-12">
            Uma forma simples de enxergar a estrutura do país.
          </h2>

          <div className="space-y-6">
            <div className="border border-zinc-200 rounded-[32px] p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                Primeiro nível
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Interesses predominantes
              </h3>

              <p className="text-zinc-700 leading-relaxed">
                Grandes estruturas econômicas, financeiras e grupos com forte
                influência sobre decisões importantes.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-[32px] p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                Segundo nível
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                O governo
              </h3>

              <p className="text-zinc-700 leading-relaxed">
                O nível responsável por administrar, arrecadar, legislar e
                executar políticas públicas.
              </p>
            </div>

            <div className="bg-zinc-900 text-white rounded-[32px] p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">
                Terceiro nível
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                A base que sustenta tudo
              </h3>

              <p className="leading-relaxed text-zinc-300">
                Trabalhadores, pequenos produtores, profissionais, famílias e a
                população comum que mantém o país funcionando diariamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPATION */}
      <section id="participar" className="bg-zinc-100 py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-5">
            Conversa aberta
          </div>

          <h2 className="text-4xl leading-tight font-semibold mb-10">
            Queremos que essa conversa exista de verdade.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">
            <p>
              Dúvidas. Críticas. Discordâncias. Sugestões. Novas perguntas.
            </p>

            <p>
              O objetivo do projeto não é encerrar o debate, mas tornar temas
              complexos mais próximos da população.
            </p>

            <p>
              Porque assuntos importantes dificilmente entram em pauta sem
              pressão popular.
            </p>
          </div>

          <div className="flex flex-col gap-4">

  <a
    href="https://wa.me/5543991444266"
    target="_blank"
    className="w-full bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium text-center block"
  >
    Enviar feedback no WhatsApp
  </a>

  <a
    href="https://mont.ink/terceiro-nivel"
    target="_blank"
    className="w-full border border-zinc-300 rounded-2xl py-4 px-6 text-base font-medium text-center block"
  >
    Conhecer a loja
  </a>

</div>
</div>
</section>


      {/* SHIRT */}
      <section className="bg-zinc-900 text-white py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-5">
            Uma pergunta circulando pelas ruas
          </div>

          <div className="border border-zinc-700 rounded-[40px] p-10 mb-10">
            <p className="text-4xl leading-tight font-semibold">
              Se o Brasil arrecada trilhões,
              <br />
              por que falta dinheiro?
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-300 mb-12">
            <p>
              A camiseta não entrega respostas prontas.
            </p>

            <p>
              Ela provoca conversa, desperta curiosidade e leva a pergunta para
              lugares onde esse debate raramente acontece.
            </p>
          </div>

      <a
  href="https://montink.com/terceiro-nivel/trilhao-dourada-preta-90hmm"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-white text-black rounded-2xl py-4 px-6 text-base font-medium text-center hover:opacity-90 transition"
>
  Conhecer a camiseta
</a>
        </div>
      </section>
      

      {/* SHARE */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-5">
            Faça circular
          </div>

          <h2 className="text-4xl leading-tight font-semibold mb-10">
            Temas importantes também precisam circular de pessoa para pessoa.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-12">
            <p>
              Escolhemos o compartilhamento orgânico como parte central do
              projeto.
            </p>

            <p>
              Porque às vezes uma conversa simples alcança lugares onde debates
              oficiais nunca chegaram.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/?text=Se%20o%20Brasil%20arrecada%20trilh%C3%B5es,%20por%20que%20falta%20dinheiro?%20https://terceironivel.org"
              target="_blank"
              className="bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium text-center"
>
              Compartilhar no WhatsApp
          </a>

            <button className="border border-zinc-300 rounded-2xl py-4 px-6 text-base font-medium">
              Copiar mensagem
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-14 px-6">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            Terceiro Nível
          </h3>

          <p className="text-zinc-600 leading-relaxed mb-8">
            Traduzindo temas complexos para linguagem acessível.
          </p>

          <div className="flex flex-col gap-3 text-zinc-500">
            <span>Início</span>
            <span>O Projeto</span>
            <span>Temas</span>
            <span>Participar</span>
          </div>
        </div>
      </footer>
    </main>
  )
}