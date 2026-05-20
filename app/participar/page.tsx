"use client"

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
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
          Participar
        </div>

        <h1 className="text-5xl leading-tight font-semibold mb-10">
          Participar da conversa
        </h1>

        <p className="text-xl leading-relaxed text-zinc-700 mb-14">
          Este espaço existe para receber reflexões, críticas, sugestões
          e novos temas para o projeto.
        </p>

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
            className="w-full bg-zinc-900 text-white rounded-2xl py-4 px-6 text-base font-medium hover:opacity-90 transition"
          >
            Enviar reflexão
          </button>

        </form>

      </div>
    </main>
  )
}