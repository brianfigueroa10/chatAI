export default function AboutUs() {
    return (
        <section className="w-full flex flex-col items-center py-6 md:py-12 gap-7">
            <div className="text-center gap-7">
                <span className="rounded-lg bg-gradient-to-br from-amber-500 to-pink-500 px-3 py-1 text-sm text-white cursor-pointer">
                    Sobre Nosotros
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-6">
                    Modern Development
                </h2>
            </div>
            <div className="flex w-full max-w-3xl  justify-center gap-6 flex-wrap ">
                <div className="flex flex-col items-start justify-start  gap-2 max-w-[300px]">
                    <span className="rounded-lg p-3 bg-gradient-to-br from-amber-500 to-pink-500 hover:bg-gradient-to-br hover:from-amber-700 hover:to-pink-700">
                        <GoalIcon className="w-6 h-6" />
                    </span>
                    <div className="space-y-1.5">
                        <h3 className="text-xl font-bold">Misión</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            En AI SDK Innovations, nos esforzamos por liderar el camino en la
                            evolución de la inteligencia artificial y la comunicación en
                            línea. Nuestra misión es proporcionar soluciones de chat
                            inteligente que impulsen la eficiencia y la innovación en la
                            interacción humano-máquina, transformando así la forma en que las
                            personas se conectan y colaboran
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start  gap-2 max-w-[300px]">
                    <span className="rounded-lg p-3 bg-gradient-to-br from-amber-500 to-pink-500 hover:bg-gradient-to-br hover:from-amber-700 hover:to-pink-700">
                        <MergeIcon className="w-6 h-6" />
                    </span>
                    <div className="space-y-1.5">
                        <h3 className="text-xl font-bold">Equipo</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Nuestro equipo fundador está formado por expertos en inteligencia
                            artificial y desarrollo de software, con una amplia experiencia en
                            el diseño y la implementación de soluciones innovadoras. Estamos
                            dedicados a impulsar el progreso en el campo de la IA y a
                            proporcionar herramientas poderosas que impulsen el éxito de
                            nuestros clientes
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start  gap-2 max-w-[300px]">
                    <span className="rounded-lg p-3 bg-gradient-to-br from-amber-500 to-pink-500 hover:bg-gradient-to-br hover:from-amber-700 hover:to-pink-700">
                        <SmartphoneIcon className="w-6 h-6" />
                    </span>
                    <div className="space-y-1.5">
                        <h3 className="text-xl font-bold">Valores</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 backgconf">
                            Nos guiamos por la excelencia técnica, la ética empresarial y el
                            compromiso inquebrantable con la satisfacción del cliente. Nos
                            comprometemos a ofrecer soluciones de alta calidad y a construir
                            relaciones sólidas y duraderas con nuestros clientes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GoalIcon(props: any) {
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
            <path d="M12 13V2l8 4-8 4" />
            <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
            <path d="M8 10a5 5 0 1 0 8.9 2.02" />
        </svg>
    );
}

function MergeIcon(props: any) {
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
            <path d="m8 6 4-4 4 4" />
            <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
            <path d="m20 22-5-5" />
        </svg>
    );
}

function SmartphoneIcon(props: any) {
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
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    );
}
