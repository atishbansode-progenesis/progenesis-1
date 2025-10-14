import React from 'react'

type Benefit = {
	icon: React.ReactNode
	title: string
	description: string
}
// C:/Users\vaibh\OneDrive\Desktop\prog\progenesis\public\images\carreersection31.svg
const benefits: Benefit[] = [
	{
    icon: "/images/carreersection31.svg",
		title: 'Health & Wellness Coverage',
		description:
			"Your well-being comes first. We provide comprehensive medical insurance for you and your family, so you feel secure and supported at every stage of life.",
	},
	{
    icon: "/images/carreersection32.svg",
		title: 'Continuous Learning',
		description:
			"We invest in your growth. Through workshops, training, and hands‑on learning opportunities, you'll stay at the forefront of healthcare and innovation.",
	},
	{
    icon: "/images/carreersection33.svg",
		title: 'Recognition & Rewards',
		description:
			'Every effort counts. Your hard work and contributions are appreciated and celebrated — because every role has an impact.',
	},
	{
    icon: "/images/carreersection34.svg",
		title: 'Purpose-Driven Environment',
		description:
			'Be part of something bigger than a career. Join a team where compassion, innovation, and science come together to bring joy to families worldwide.',
	},
]

const CareersBenefits = () => {
	return (
		<section className="section-spacing mx-auto px-4 py-16 bg-[#FAFAFA]">
			<div className="max-w-4xl pb-5 md:pb-20">
				<span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">We Take Care of You</span>
				<h2 className="mt-4 font-manrope font-semibold csLg:text-[56px] text-[32px] leading-tight text-[#2C2C2C] tracking-[-0.02em]">
					Grow personally, professionally, purposefully.
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4  ">
				{benefits.map((benefit, idx) => (
					<div key={idx} className="rounded-2xl bg-[#F2F2F2] border border-gray-100 p-5">
						<div className="flex flex-col items-start gap-3">
							 <img
          src={benefit.icon}
          alt={benefit.title}
          className="w-[19px] h-[19px] md:w-8 md:h-8 object-contain"
        />
							<h3 className="font-manrope text-[20px] md:text-[22px] font-semibold text-gray-900">{benefit.title}</h3>
							<p className="text-[14px] leading-6 text-[#606060]/70">{benefit.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default CareersBenefits


