export default function ParticiparEnviadoPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">

        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
          Participação enviada
        </div>

        <h1 className="text-5xl leading-tight font-semibold mb-10">
          Obrigado por participar da conversa.
        </h1>

        <p className="text-xl leading-relaxed text-zinc-700 mb-14">
          O Terceiro Nível existe para ampliar compreensão pública e aproximar
          discussões estruturais das pessoas que sustentam o funcionamento do país.
        </p>

        <a
          href="/#participar"
          className="inline-block border border-zinc-300 rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-100 transition"
>
          Voltar para a conversa
        </a>

      </div>
    </main>
  )
}