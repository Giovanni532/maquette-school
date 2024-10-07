"use client"

import React, { useEffect, useState } from 'react'
import { projetsData } from '../data/data';
import CardProjet from '../components/CardProjet';
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion'

export default function ProjetsPage() {
    const searchParams = useSearchParams();
    const [projets, setProjets] = useState<any[]>(projetsData);
    const [filtreActif, setFiltreActif] = useState<string[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const search = searchParams.get("search");
        if (search) {
            setSearch(search);
        }
    }, [searchParams]);

    useEffect(() => {
        if (search) {
            if (search.length > 0) {
                setProjets(projetsData.filter(projet => projet.titre.toLowerCase().includes(search.toLowerCase())));
            } else {
                setProjets(projetsData);
            }
        } else {
            setProjets(projetsData);
        }
    }, [search]);

    const handleFiltreChange = (filtre: string[]) => {
        setFiltreActif(filtre);
        if (filtre.length === 0) {
            setProjets(projetsData);
        } else {
            setProjets(projetsData.filter(projet => filtre.includes(projet.categorie)));
        }
    };

    return (
        <section className="flex flex-col md:flex-row my-10 md:my-20 gap-5 md:gap-10 mx-4 md:mx-10 min-h-[80vh]">
            <div className="w-full md:w-2/12 p-4 flex flex-col gap-4 border-1 bg-white rounded-lg mb-5 md:mb-0">
                <h2 className="text-xl font-bold">Filtrées par catégories</h2>
                <CheckboxGroup
                    color="secondary"
                    value={filtreActif}
                    onValueChange={handleFiltreChange}
                >
                    <Checkbox name="IA" value="IA" tabIndex={0}>IA</Checkbox>
                    <Checkbox name="Web" value="Web" tabIndex={0}>Web</Checkbox>
                    <Checkbox name="Mobile" value="Mobile" tabIndex={0}>Mobile</Checkbox>
                </CheckboxGroup>
            </div>
            <div className="w-full md:w-3/4">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                    {projets.map((projet, index) => (
                        <motion.div
                            key={projet.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <CardProjet key={projet.id} projet={projet} />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
