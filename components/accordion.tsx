import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpand() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center  gap-5 text-center">
                <span className="rounded-lg bg-gradient-to-br from-amber-500 to-pink-500 px-3 py-1 text-sm text-white cursor-pointe">
                    #
                </span>
                <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">
                    Informacion
                </h2>
            </div>
            <div className='border-gray-300  bg-transparent w-4/5 md:w-[600px] flex flex-col items-center justify-center mt-8'>

     
            <Accordion className=' bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-100'>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon className=' text-amber-500'/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    
                >
                        <Typography>¿Qué es el Chat IA ofrecido por AI SDK Innovations?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                            El Chat IA es una herramienta de conversación inteligente que utiliza IA para proporcionar respuestas automáticas a las preguntas de los usuarios, mejorando la interacción en línea y la comunicación con los clientes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
                <Accordion className=' bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-100 '>
                <AccordionSummary
                        expandIcon={<ArrowDownwardIcon className=' text-amber-500' />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                        <Typography>¿Cuál es el precio del Chat IA?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                            ¡El Chat IA ofrecido por AI SDK Innovations es completamente gratuito! No hay costos asociados con el uso de nuestro servicio de chat inteligente.
                    </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion className=' bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-100'>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon className=' text-amber-500' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>¿Qué tipo de preguntas puede responder el Chat IA?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            El Chat IA está diseñado para responder una amplia variedad de preguntas sobre diferentes temas, desde consultas básicas hasta consultas más complejas. Utiliza tecnología de inteligencia artificial para comprender el contexto de la pregunta y proporcionar respuestas precisas y útiles
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className=' bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-100'>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon className=' text-amber-500' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        
                    >
                        <Typography>¿Qué diferencia al Chat IA de AI SDK Innovations de otros servicios de chat en línea?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nuestro Chat IA se destaca por su inteligencia artificial avanzada, integración sin fricciones, personalización y soporte excepcional, todo de forma gratuita.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}