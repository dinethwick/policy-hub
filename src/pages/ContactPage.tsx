const ContactPage = () => {
  const groupMembers = [
    { name: 'Zirong Zhao', id: 'a1868629' },
    { name: 'Minh Tue Trinh', id: 'a1902421' },
    { name: 'Ziqian Hui', id: 'a1877488' },
    { name: 'Dineth Hirun Wickramasekara', id: 'a1894205' },
    { name: 'Dinh Vu Nguyen', id: 'a1848491' },
    { name: 'Jean-Pierre Naboudet', id: 'a1814756' },
    { name: 'Jay Patel', id: 'a1825413' },
    { name: 'Jack Halliday-Strong', id: 'a1804522' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="/icon.png" 
              alt="IT25 Logo" 
              className="h-16 w-16 object-contain"
            />
            <h1 className="text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            AI Policy Hub - Group IT25
          </p>
        </div>

        {/* Group Info Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Group Members
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50/50 to-white rounded-xl p-4 border border-blue-100/50 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Student ID: {member.id}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

