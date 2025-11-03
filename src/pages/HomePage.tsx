import { useState } from 'react'
import { BookOpenIcon, AcademicCapIcon, SparklesIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import MapBackground from '../components/MapBackground'
import UniversitiesModal from '../components/UniversitiesModal'

const HomePage = () => {
  const [isUniversitiesModalOpen, setIsUniversitiesModalOpen] = useState(false)

  return (
    <div>
      {/* Universities Modal */}
      <UniversitiesModal 
        isOpen={isUniversitiesModalOpen} 
        onClose={() => setIsUniversitiesModalOpen(false)} 
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white h-screen max-h-screen px-4 overflow-hidden flex items-center">
        {/* Map Background */}
        <MapBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center py-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl animate-fade-in">
              <SparklesIcon className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold text-white tracking-wide">AI Policy Hub for ACDICT Universities</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-blue-100 via-white to-indigo-100 bg-clip-text text-transparent">
              Generative AI Policy Hub
              </span>
              <span className="block text-white mt-2">Australasia Universities</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              A comprehensive framework for understanding generative AI policies across ACDICT universities. 
              Empowering educators and students with clear guidelines.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsUniversitiesModalOpen(true)}
                className="px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer group"
              >
                <span className="text-sm font-semibold text-white group-hover:scale-105 transition-transform inline-block">28 Universities</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-24 px-4 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Educators */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-300/30 transition-all duration-500" />
              
              <div className="relative p-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpenIcon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  For Educators
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Comprehensive guidelines for curriculum integration, assessment design, AI-assisted grading, 
                  and maintaining academic integrity. Explore policies tailored for teaching and course design.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>Grading & Feedback Policies</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <SparklesIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>Course Design Guidelines</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <DocumentCheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>Assessment Best Practices</span>
                  </li>
                </ul>

                {/* Button */}
                <div>
                  <a
                    href="/educators"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 group-hover:scale-105"
                  >
                    View Educator Policies
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Students */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-indigo-500/20 hover:-translate-y-2">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 group-hover:bg-indigo-300/30 transition-all duration-500" />
              
              <div className="relative p-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AcademicCapIcon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  For Students
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Clear guidelines on ethical AI use, proper citation practices, and how to effectively 
                  leverage AI tools for learning while maintaining academic integrity across all assessment types.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <ShieldCheckIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span>Ethical Usage Guidelines</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <SparklesIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span>Research & Writing Policies</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <DocumentCheckIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span>Assessment Strategies</span>
                  </li>
                </ul>

                {/* Button */}
                <div>
                  <a
                    href="/students"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 group-hover:scale-105"
                  >
                    View Student Policies
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

