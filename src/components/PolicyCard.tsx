import { Link } from 'react-router-dom'

interface PolicyCardProps {
  title: string
  icon: React.ReactNode
  description: string
  buttonText: string
  href: string
}

const PolicyCard = ({ title, icon, description, buttonText, href }: PolicyCardProps) => {
  return (
    <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 border border-white/20 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-primary-500/10 to-primary-600/5 backdrop-blur-sm rounded-2xl text-primary-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to={href}
            className="inline-block px-6 py-3 bg-primary-600/90 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PolicyCard

