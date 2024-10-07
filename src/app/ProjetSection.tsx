'use client'

import React from 'react'
import { projetsData } from './data/data'
import CardProjet from './components/CardProjet'
import { motion } from 'framer-motion'

export default function ProjetSection() {
    const titlePart1 = "Quelques projets "
    const titlePart2 = "d'étudiants"

    // Variants pour l'animation des lettres
    const letterVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-10 mb-10'>
            <motion.h1
                className='text-4xl font-bold text-center'
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {titlePart1.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {char}
                    </motion.span>
                ))}
                {titlePart2.split("").map((char, index) => (
                    <motion.span key={titlePart1.length + index} variants={letterVariants} className="text-secondary">
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {projetsData.slice(0, 3).map((projet, index) => (
                    <motion.div
                        key={projet.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <CardProjet projet={projet} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
