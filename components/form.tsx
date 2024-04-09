'use client'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
export default function Form() { 
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        toast.success('Tu mensaje se envio correctamente, Gracias!.');
        setTimeout(() => {
            router.push("/#");
        }, 2000);
    }
    return (
        <div className="w-full flex flex-col mt-10 gap-6">
            <div className="flex flex-col items-center justify-center  gap-5 text-center">
                <div className="rounded-lg bg-gradient-to-br from-amber-500 to-pink-500 px-3 py-1 text-sm text-white cursor-pointe">Contacto</div>
                <h2 className="text-base font-bol max-w-[400px] backgconf">
                    ¡Nos encantaría escucharte! Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros.
                </h2>
            </div>
            <form className="items-center justify-center flex flex-col w-full" onSubmit={handleSubmit}>
                <div className="mb-5 md:w-[500px]">
                    <label className="block mb-2 text-sm font-medium text-natural-900 dark:text-white backgconf">Nombre</label>
                    <input type="text" id="name" className="bg-natural-50 border border-natural-300 text-natural-900 text-sm rounded-lg focus:ring-natural-500 focus:border-natural-500 block w-full p-2.5 dark:bg-natural-700 dark:border-natural-600 dark:placeholder-natural-400 dark:text-white dark:focus:ring-natural-500 dark:focus:border-natural-500" required />
                </div>
                <div className="mb-5 md:w-[500px]">
                    <label className="block mb-2 text-sm font-medium text-natural-900 dark:text-white backgconf">Email</label>
                    <input type="email" id="email" className="bg-natural-50 border border-natural-300 text-natural-900 text-sm rounded-lg focus:ring-natural-500 focus:border-natural-500 block w-full p-2.5 dark:bg-natural-700 dark:border-natural-600 dark:placeholder-natural-400 dark:text-white dark:focus:ring-natural-500 dark:focus:border-natural-500"  required />
                </div>

                <div className="mb-5 md:w-[500px]">
                    <label className="block mb-2 text-sm font-medium text-natural-900 dark:text-white backgconf">Mensaje</label>
                    <textarea  id="message" className="bg-natural-50 border border-natural-300 text-natural-900 text-sm rounded-lg focus:ring-natural-500 focus:border-natural-500 block  p-2.5 dark:bg-natural-700 dark:border-natural-600 dark:placeholder-natural-400 dark:text-white dark:focus:ring-natural-500 dark:focus:border-natural-500 min-h-36 w-full"  required />

                </div>
                <button type="submit" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm  text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900  dark:hover:bg-gray-300 font-bold">Enviar</button>
            </form>
        </div>
    );
}
