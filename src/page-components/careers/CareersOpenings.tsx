import React from 'react'

type Opening = {
	title: string
	meta: string[]
	primary?: boolean
}

const openings: Opening[] = [
	{
		title: 'Fellowship in Reproductive Medicine',
		meta: ['Full‑Time', 'Pune', 'Some Text'],
		primary: true,
	},
	{
		title: 'Senior / Junior IVF Consultant',
		meta: ['Full‑Time', 'Pune', 'Some Text'],
	},
	{
		title: 'Fellowship in Reproductive Medicine',
		meta: ['Full‑Time', 'Pune', 'Some Text'],
	},
]

const CareersOpenings = () => {
	return (
		<section className="section-spacing mx-auto px-4 py-16">
			<div className="max-w-5xl pb-12">
				<span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">Current Openings</span>
				<h2 className="mt-4 font-manrope font-semibold csLg:text-[56px] text-[32px] leading-tight text-[#2C2C2C] tracking-[-0.02em]">
					Find the right role and begin your journey at Progenesis.
				</h2>
			</div>

			<div className=" divide-y divide-gray-200/60 rounded-2xl overflow-hidden">
    {openings.map((job, idx) => (
        <div 
            key={idx} 
            className="flex items-start justify-between gap-6 py-8 carr-opp-padd group"
        >
            <div className="">
                <h3 className="font-manrope text-[24px] md:text-[28px] font-semibold text-[#2C2C2C] group-hover:text-black">{job.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-900 group-hover:text-black">
                    {job.meta.map((m, i) => (
                        <React.Fragment key={i}>
                            <span className='text-[#606060]'>{m}</span>
                            {i < job.meta.length - 1 && <span className="mx-1 text-[#D9D9D9]">•</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <button
                aria-label="Open role"
                className={
                    'h-10 w-10 rounded-full flex items-center justify-center transition-colors ' +
                    (job.primary
                        ? 'bg-white text-gray-600 border border-gray-300'
                        : 'bg-white text-gray-600 border border-gray-300') +
                    ' group-hover:bg-[#135EC9] group-hover:text-white group-hover:border-transparent'
                }
            >
                <span className="translate-x-[1px] translate-y-[-1px] group-hover:text-white">↗</span>
            </button>
        </div>
    ))}
</div>
		</section>
	)
}

export default CareersOpenings


