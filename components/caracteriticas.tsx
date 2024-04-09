export default function Caracteristicas() {
    return (
        <section className="w-full mt-12 gap-11 flex flex-col">
            <div className="flex flex-col items-center justify-center  gap-5 text-center">
                <span className="rounded-lg bg-gradient-to-br from-amber-500 to-pink-500 px-3 py-1 text-sm text-white cursor-pointer">
                    Caracteristicas
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Potencia tu Experiencia
                </h2>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-6 px-4 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
                <div className="flex flex-row items-start gap-4 ">
                    <div className="flex w-5 h-5 items-center justify-center rounded-full border border-gray-200 bg-gradient-to-br from-amber-500 to-pink-500 text-white mt-1 ">
                        <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-base font-bold underline decoration-amber-500">
                            Interfaz Intuitiva
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Nuestra interfaz fácil de usar permite a los usuarios comenzar a interactuar de inmediato, sin necesidad de entrenamiento previo.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-4 ">
                    <div className="flex w-5 h-5 items-center justify-center rounded-full border border-gray-200 bg-gradient-to-br from-amber-500 to-pink-500 text-white mt-1">
                        <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-base font-bold underline decoration-amber-500">Respuestas Precisas</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Gracias a la tecnología de inteligencia artificial de última generación, nuestro chat ofrece respuestas precisas y relevantes a una amplia gama de preguntas.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <div className="flex w-5 h-5 items-center justify-center rounded-full border border-gray-200 bg-gradient-to-br from-amber-500 to-pink-500 text-white mt-1">
                        <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-base font-bold underline decoration-amber-500">Disponibilidad 24/7</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                           Disponible las 24 horas del día, los 7 días de la semana,
                            para brindar asistencia instantánea y resolver todas tus dudas
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <div className="flex w-5 h-5 items-center justify-center rounded-full border border-gray-200  bg-gradient-to-br from-amber-500 to-pink-500 text-white underline decoration-amber-500">
                        <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-base font-bold underline decoration-amber-500">Soporte de Varios Idiomas</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Con capacidades multilingües, nuestro chat inteligente puede comunicarse fluidamente en una variedad de idiomas, brindando una experiencia inclusiva a usuarios de todo el mundo
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <div className="flex w-5 h-5 items-center justify-center rounded-full border border-gray-200 bg-gradient-to-br from-amber-500 to-pink-500 text-white">
                        <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-base font-bold underline decoration-amber-500">Seguridad Integral</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Priorizamos la seguridad de tus datos y conversaciones. Nuestro chat inteligente está protegido con medidas de seguridad avanzadas para garantizar la confidencialidad y la integridad de la información.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <div className="flex w-5 h-5 items-center justify-center rounded-full border border-gray-200 bg-gradient-to-br from-amber-500 to-pink-500 text-white">
                        <ActivityIcon className="w-4 h-4" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-base font-bold underline decoration-amber-500">
                            Análisis de Sentimientos Integrado
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Con la capacidad de analizar el tono y el sentimiento del usuario, nuestro chat inteligente puede adaptar sus respuestas para proporcionar una experiencia más personalizada y empática.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    );
}
