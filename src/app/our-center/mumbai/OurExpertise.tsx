import React from 'react';

export default function OurExpertise() {
    const expertiseItems = [
        {
            id: 1,
            number: "01",
            title: "IVF & ICSI",
            description: "Personalized fertility solutions using advanced lab technology to ensure the highest success rates."
        },
        {
            id: 2,
            number: "02",
            title: "IUI Treatment",
            description: "A minimally invasive and effective first-line approach for couples beginning their parenthood journey."
        },
        {
            id: 3,
            number: "03",
            title: "Blastocyst Culture & Transfer",
            description: "Carefully nurtured embryos transferred at the most viable stage for improved implantation outcomes."
        },
        {
            id: 4,
            number: "04",
            title: "Laser Assisted Hatching (LAH)",
            description: "Precision technique that enhances embryo implantation by aiding the natural hatching process."
        },
        {
            id: 5,
            number: "05",
            title: "Donor Programs",
            description: "Safe and confidential oocyte and embryo donation programs designed to support complex fertility cases."
        },
        {
            id: 6,
            number: "06",
            title: "Laparoscopy & Hysteroscopy",
            description: "State-of-the-art diagnostic and surgical procedures to identify and treat underlying fertility issues."
        }
    ];

    return (
        <div className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
            Advanced fertility treatments
          </h2>
                </div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                    {expertiseItems.map((item) => (
                        <div key={item.id} className="space-y-3">
                            {/* Number */}
                            <p className="text-sm text-gray-400 font-medium">
                                {item.number}
                            </p>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6 text-lg">
                        Want to learn more about our advanced treatments?
                    </p>
                    <button
                        onClick={() => window.location.href = '/treatments'}
                        className="inline-block text-white px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: '#1656A5' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4078'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1656A5'}
                    >
                        Explore All Treatments
                    </button>
                </div>

            </div>
        </div>
    );
}