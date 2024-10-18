import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Accessibilite() {
    return (
        <div className='container mx-auto px-4 py-8 min-h-[80vh]'>
            <h1 className='text-4xl font-bold text-center mb-6 text-secondary'>Déclaration d&apos;accessibilité pour localhost</h1>
            <p className='text-lg text-gray-700 text-center mb-8'>
                Ceci est une déclaration d&apos;accessibilité de Giovanni Salcuni.
            </p>

            <h2 className='text-3xl font-semibold mb-4 text-secondary'>Statut de conformité</h2>
            <p className='text-base text-gray-600 mb-8'>
                Les Web Content Accessibility Guidelines (WCAG) définissent des exigences pour les concepteurs et développeurs afin d&apos;améliorer l&apos;accessibilité pour les personnes handicapées. Elles définissent trois niveaux de conformité : Niveau A, Niveau AA, et Niveau AAA. localhost est conforme avec WCAG 2.1 niveau AAA.
            </p>

            <h2 className='text-3xl font-semibold mb-4 text-secondary'>Accessibilité assurée</h2>
            <Stepper />

            <h2 className='text-3xl font-semibold mb-4 text-secondary'>Date</h2>
            <p className='text-base text-gray-600'>
                Cette déclaration a été créée le 4 octobre 2024 à l&apos;aide de l&apos;outil de génération de déclaration d&apos;accessibilité du W3C.
            </p>
        </div>
    );
}

function Stepper() {
    return (
        <div className='flex flex-col items-start gap-4 my-10'>
            <div className='flex items-center'>
                <FaCheckCircle className='text-secondary' size={24} />
                <div className='ml-2'>
                    <p className='font-bold text-lg text-secondary'>Ordre logique des onglets</p>
                    <p className='text-gray-600'>Assurez-vous que l&apos;ordre de tabulation est logique et intuitif.</p>
                </div>
            </div>
            <div className='flex items-center mt-4'>
                <FaCheckCircle className='text-secondary' size={24} />
                <div className='ml-2'>
                    <p className='font-bold text-lg text-secondary'>Accessibilité au clavier</p>
                    <p className='text-gray-600'>Tous les éléments interactifs doivent être accessibles au clavier.</p>
                </div>
            </div>
        </div>
    );
}
