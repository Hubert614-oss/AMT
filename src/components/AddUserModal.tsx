import { useState, useEffect } from 'react'

interface AddUserModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (userData: UserData) => void
}

interface UserData {
    name: string
    email: string
    role: string
}

const AddUserModal = ({ isOpen, onClose, onSubmit }: AddUserModalProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const [formData, setFormData] = useState<UserData>({
        name: '',
        email: '',
        role: 'user'
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
        setFormData({ name: '', email: '', role: 'user' })
        handleClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                            New
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
                        {/* Name */}
                        <div className="relative z-0">
                            <input type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer" placeholder=" " />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
                        </div>

                        {/* Email */}
                        <div className="relative z-0">
                            <input type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>

                        {/* Role */}
                        <div className="relative z-0 pb-3">
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-teal-700 peer"
                            >
                                <option value="user">Utilisateur</option>
                                <option value="admin">Administrateur</option>
                                <option value="moderator">Modérateur</option>
                            </select>
                            <label htmlFor="role" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Rôle</label>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex w-full justify-end gap-3 mt-6 pt-4 dark:border-gray-600">
                        <button type="submit" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUserModal