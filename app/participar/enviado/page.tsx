import Link from "next/link";

export default async function EnviadoPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {

  const params = await searchParams;
  const tipo = params.tipo;

let href = "/participar";

if (tipo === "reflexoes") {
  href = "/participar#acompanhar";
}

if (tipo === "acompanhar") {
  href = "/participar#compartilhar";
}

if (tipo === "temas") {
  href = "/participar#loja";
}

return (
    <main className="min-h-screen bg-[#f5f5f3] text-zinc-900 flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
          Participação enviada
        </div>

        <h1 className="text-5xl leading-tight font-semibold mb-10">
          Obrigado por participar.
        </h1>

        <p className="text-xl leading-relaxed text-zinc-700 mb-16">
          O Terceiro Nível existe para ampliar compreensão pública e aproximar
          discussões estruturais das pessoas que sustentam o funcionamento do país.
        </p>

        <Link
  href={href}
  className="inline-block border border-zinc-300 rounded-2xl px-8 py-4 hover:border-zinc-500 transition-all duration-300"
>
  Continuar
</Link>

      </div>

    </main>
  );
}