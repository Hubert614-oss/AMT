import { type ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo à gauche - toujours au début du conteneur */}
            <div className="flex items-center justify-start">
              <div className="shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-teal-800 dark:text-white">
                    VICTUS <span className='border-r border-gray-400 ml-2'></span>
                  </span>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm font-semibold text-blue-700 dark:text-white">
                      AMT
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      ABSENCE MANAGEMENT TOOL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme toggle et avatar à droite - toujours au fond droite */}
            <div className="flex items-center justify-end space-x-4">
              {/* <ThemeToggle /> */}
              <span className="text-xs text-gray-600 dark:text-gray-400">Hubert Arlin</span>
              {/* Avatar */}
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-full">
                  <div className="w-8 h-8 bg-linear-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    HA
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* header secondaire */}
      <header className="w-full bg-gray-300 relative">
        {/* Header content goes here */}
        <div className='flex items-center px-4'>
          <span className='bg-teal-700 px-3 text-white'>
            DEV
          </span>
        </div>
      </header>
      {/* header principal */}
      <header className="w-full bg-teal-700 relative h-15">
        <div className='flex items-center h-full text-white font-semibold'>
          {/* Partie gauche - largeur fixe w-64 */}
          <div className='w-64 flex items-center justify-end'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
          {/* Partie droite - prend tout l'espace restant */}
          <div className='flex-1 px-4 flex items-center justify-between h-full'>
            <div className='flex gap-4'>
              <a href="">Accueil</a>
              <a href="" className='border-b border-amber-50'>Demandes</a>
            </div>
            {/*  */}
            <div className='justify-end'>
              <button className='bg-white text-teal-700 px-4 py-1 font-semibold hover:bg-gray-100 transition flex items-center gap-2'>
                {/* Icône SVG + */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {/* Texte masqué sur mobile */}
                <span className="hidden sm:inline">Creer une demande</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* main container */}
      <div className="flex flex-1">
        {/* sidebar left */}
        <aside className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen px-4">
          {/* sidebar content will go here */}
          <div className=''>

          </div>
        </aside>

        {/* main content area */}
        <main className="flex-1">
          <div className='p-4'>
            {children}
          </div>
        </main>
      </div>

      {/* main content here */}
      <div className='p-4'>
        {children}
      </div>
    </>
  );
};

export default Header;