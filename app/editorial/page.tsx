export default function EditorialPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      <section className="min-h-screen px-6 py-20 flex items-center">

        <div className="max-w-2xl mx-auto w-full">

          {/* TOPO */}

          <div className="flex items-center gap-4 mb-12">

            <img
              src="/logo-nova.png"
              alt="Logo Terceiro Nível"
              className="w-14 h-14 object-contain"
            />

            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Terceiro Nível
            </div>

          </div>

          {/* TEXTO */}

          <h1 className="text-4xl md:text-6xl leading-tight font-semibold mb-10">
            Observações sobre estruturas
            <br />
            que impactam diretamente
            a vida da população.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-16">

            <p>
              Algumas estruturas moldam o cotidiano de milhões de pessoas sem
              que sejam percebidas completamente.
            </p>

            <p>
              O Terceiro Nível observa temas, linguagens e mecanismos que
              normalmente aparecem de forma fragmentada na vida cotidiana.
            </p>

          </div>

          {/* FECHAR */}

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