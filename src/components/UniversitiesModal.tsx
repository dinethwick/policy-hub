import { XMarkIcon } from '@heroicons/react/24/outline'

interface UniversitiesModalProps {
  isOpen: boolean
  onClose: () => void
}

interface University {
  name: string
  website: string
}

const UniversitiesModal = ({ isOpen, onClose }: UniversitiesModalProps) => {
  if (!isOpen) return null

  const universities: University[] = [
    { name: 'The University of Adelaide', website: 'https://www.adelaide.edu.au' },
    { name: 'University of Canberra', website: 'https://www.canberra.edu.au' },
    { name: 'Charles Darwin University', website: 'https://www.cdu.edu.au' },
    { name: 'Central Queensland University', website: 'https://www.cqu.edu.au' },
    { name: 'Charles Sturt University', website: 'https://www.csu.edu.au' },
    { name: 'Curtin University of Technology', website: 'https://www.curtin.edu.au' },
    { name: 'Deakin University', website: 'https://www.deakin.edu.au' },
    { name: 'Edith Cowan University', website: 'https://www.ecu.edu.au' },
    { name: 'Flinders University', website: 'https://www.flinders.edu.au' },
    { name: 'James Cook University', website: 'https://www.jcu.edu.au' },
    { name: 'La Trobe University', website: 'https://www.latrobe.edu.au' },
    { name: 'Macquarie University', website: 'https://www.mq.edu.au' },
    { name: 'Monash University', website: 'https://www.monash.edu' },
    { name: 'Murdoch University', website: 'https://www.murdoch.edu.au' },
    { name: 'The University of Newcastle', website: 'https://www.newcastle.edu.au' },
    { name: 'Queensland University of Technology', website: 'https://www.qut.edu.au' },
    { name: 'RMIT University', website: 'https://www.rmit.edu.au' },
    { name: 'Southern Cross University', website: 'https://www.scu.edu.au' },
    { name: 'Swinburne University of Technology', website: 'https://www.swinburne.edu.au' },
    { name: 'University of Tasmania', website: 'https://www.utas.edu.au' },
    { name: 'The University of New England', website: 'https://www.une.edu.au' },
    { name: 'University of South Australia', website: 'https://www.unisa.edu.au' },
    { name: 'University of the Sunshine Coast', website: 'https://www.usc.edu.au' },
    { name: 'University of Southern Queensland', website: 'https://www.usq.edu.au' },
    { name: 'University of Technology Sydney', website: 'https://www.uts.edu.au' },
    { name: 'The University of Western Australia', website: 'https://www.uwa.edu.au' },
    { name: 'Victoria University', website: 'https://www.vu.edu.au' },
    { name: 'Western Sydney University', website: 'https://www.westernsydney.edu.au' }
  ]

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">28 ACDICT Universities</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
            aria-label="Close"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <p className="text-gray-600 mb-6 text-center">
            Our platform consolidates AI policies from all 28 ACDICT (Australian Council of Deans of ICT) universities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {universities.map((university, index) => (
              <a
                key={index}
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md hover:border-blue-300 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-gray-800 font-medium block group-hover:text-blue-700 transition-colors">
                      {university.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 block truncate group-hover:text-blue-600 transition-colors">
                      {university.website.replace('https://', '')}
                    </span>
                  </div>
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversitiesModal
