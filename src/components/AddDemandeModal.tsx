import { useState, useEffect } from 'react'


interface AddDemandeModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (demandeData: DemandeData) => void
}

interface DemandeData {
    titre: string
    description: string
    priorite: string
    categorie: string
    dateEcheance: string
}

const AddDemandeModal = ({ isOpen, onClose, onSubmit }: AddDemandeModalProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const [formData, setFormData] = useState<DemandeData>({
        titre: '',
        description: '',
        priorite: 'normale',
        categorie: 'general',
        dateEcheance: ''
    })

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            setTimeout(() => setIsAnimating(true), 10) // Petit délai pour déclencher l'animation
        } else {
            setIsAnimating(false)
            setTimeout(() => setIsVisible(false), 200) // Délai pour l'animation de sortie
        }
    }, [isOpen])

    const handleClose = () => {
        setIsAnimating(false)
        setTimeout(() => {
            setIsVisible(false)
            onClose()
        }, 200)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData({ 
            titre: '', 
            description: '', 
            priorite: 'normale', 
            categorie: 'general',
            dateEcheance: ''
        })
        handleClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (!isVisible) return null

    return (
        <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-200 flex items-center justify-center z-50 ${isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
                }`}
        >
            <div
                className={`bg-white dark:bg-gray-800 rounded-sm shadow-lg w-full max-w-md mx-4 transform transition-all duration-200 ${isAnimating
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 translate-y-4'
                    }`}
            >
                {/* Header */}
                <div className="flex relative items-center justify-between p-2 border-b border-gray-200 dark:border-gray-600">
                    <div className='flex items-center justify-center gap-2'>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Nouvelle Demande
                        </h3>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 bg-gray-100 rounded-full absolute -right-2 -top-3 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        {/* Titre */}
                        <div className="relative z-0">
                            <input 
                                type="text"
                                id="titre"
                                name="titre"
                                value={formData.titre}
                                onChange={handleChange} 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer" 
                                placeholder=" " 
                                required
                            />
                            <label htmlFor="titre" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Titre</label>
                        </div>

                        {/* Description */}
                        <div className="relative z-0">
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer resize-none" 
                                placeholder=" "
                                required
                            />
                            <label htmlFor="description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Description</label>
                        </div>

                        {/* Priorité */}
                        <div className="relative z-0">
                            <select
                                id="priorite"
                                name="priorite"
                                value={formData.priorite}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer"
                            >
                                <option value="basse">Basse</option>
                                <option value="normale">Normale</option>
                                <option value="haute">Haute</option>
                                <option value="urgente">Urgente</option>
                            </select>
                            <label htmlFor="priorite" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Priorité</label>
                        </div>

                        {/* Catégorie */}
                        <div className="relative z-0">
                            <select
                                id="categorie"
                                name="categorie"
                                value={formData.categorie}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer"
                            >
                                <option value="general">Général</option>
                                <option value="technique">Technique</option>
                                <option value="fonctionnelle">Fonctionnelle</option>
                                <option value="support">Support</option>
                                <option value="amelioration">Amélioration</option>
                            </select>
                            <label htmlFor="categorie" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Catégorie</label>
                        </div>

                        {/* Date d'échéance */}
                        <div className="relative z-0 pb-3">
                            <input 
                                type="date"
                                id="dateEcheance"
                                name="dateEcheance"
                                value={formData.dateEcheance}
                                onChange={handleChange} 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer" 
                                placeholder=" "
                            />
                            <label htmlFor="dateEcheance" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Date d'échéance</label>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex w-full justify-end gap-3 mt-6 pt-4 dark:border-gray-600">
                        <button type="submit" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            Créer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDemandeModal