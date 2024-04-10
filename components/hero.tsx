import Link from "next/link"

export default function Hero() {
    return (
        <section className="w-full py-12">
            <div className="flex flex-col items-center gap-8 text-center ">
                    <div className="flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl bg-gradient-to-br from-amber-500 to-pink-500 bg-clip-text text-transparent">AI SDK Innovations: <br />
                        <span className="text-3xl font-extrabold tracking-tighter sm:text-5xl text-black dark:text-white">Interacción Avanzada con IA
                        </span>
                    </h1>
                        <p className="md:w-[800px] w-3/5 text-gray-500 md:text-xl dark:text-gray-400 backgconf">
                            Descubre el futuro de las conversaciones en línea con nuestro Chat Inteligente. Conecta, interactúa y colabora de manera eficiente gracias a nuestra tecnología de inteligencia artificial. Desarrollado con Next.js y la API de OpenAI GPT a través del Vercel AI SDK, nuestro chat basado en GPT-3.5 está listo para responder cualquier pregunta. ¡Bienvenido a la nueva era de la comunicación!
                        </p>
                    </div>
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm  text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900  dark:hover:bg-gray-300 font-bold"
                            href="/chat"
                        >
                            Ir a CHAT IA
                        </Link>
            
            
            </div>
        </section>
    )
}