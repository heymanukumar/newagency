import React, { useRef, useState } from 'react'
import { motion as Motion } from 'motion/react'

const serviceIcons = {
    website: (
        <>
            <rect x="10" y="14" width="44" height="34" rx="5" />
            <path d="M10 23H54" />
            <path d="M25 34L20 38L25 42" />
            <path d="M39 34L44 38L39 42" />
            <path d="M34 32L30 44" />
        </>
    ),
    ecommerce: (
        <>
            <path d="M18 20H22L26 40H45L50 26H25" />
            <circle cx="29" cy="47" r="3" />
            <circle cx="43" cy="47" r="3" />
            <path d="M34 20V14" />
            <path d="M29 19L34 14L39 19" />
        </>
    ),
    mobile: (
        <>
            <rect x="22" y="9" width="20" height="46" rx="5" />
            <path d="M29 15H35" />
            <path d="M30 49H34" />
            <path d="M27 23H37" />
            <path d="M27 30H37" />
            <path d="M27 37H33" />
        </>
    ),
    ai: (
        <>
            <path d="M32 13V9" />
            <path d="M32 55V51" />
            <path d="M13 32H9" />
            <path d="M55 32H51" />
            <rect x="20" y="20" width="24" height="24" rx="6" />
            <circle cx="28" cy="30" r="2" />
            <circle cx="36" cy="30" r="2" />
            <path d="M27 37C30 40 34 40 37 37" />
            <path d="M18 18L15 15" />
            <path d="M46 18L49 15" />
            <path d="M18 46L15 49" />
            <path d="M46 46L49 49" />
        </>
    ),
    marketing: (
        <>
            <path d="M15 37H22L42 47V17L22 27H15V37Z" />
            <path d="M22 37L26 49" />
            <path d="M47 27C49 29 49 35 47 37" />
            <path d="M52 22C56 27 56 37 52 42" />
        </>
    ),
    social: (
        <>
            <rect x="13" y="15" width="38" height="34" rx="6" />
            <path d="M13 25H51" />
            <path d="M23 11V19" />
            <path d="M41 11V19" />
            <circle cx="25" cy="36" r="3" />
            <circle cx="39" cy="36" r="3" />
            <path d="M28 36H36" />
        </>
    ),
    influencer: (
        <>
            <circle cx="25" cy="25" r="7" />
            <path d="M13 49C15 40 20 36 25 36C30 36 35 40 37 49" />
            <circle cx="42" cy="29" r="5" />
            <path d="M38 40C43 40 47 43 50 49" />
            <path d="M42 14L44 18L49 19L45 22L46 27L42 24L38 27L39 22L35 19L40 18L42 14Z" />
        </>
    ),
    hosting: (
        <>
            <rect x="15" y="14" width="34" height="12" rx="3" />
            <rect x="15" y="32" width="34" height="12" rx="3" />
            <path d="M22 20H23" />
            <path d="M22 38H23" />
            <path d="M31 26V32" />
            <path d="M32 50V44" />
            <path d="M22 50H42" />
        </>
    ),
}

const ServiceIcon = ({ name, title }) => (
    <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label={`${title} icon`}
        className="h-14 w-14 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {serviceIcons[name] || serviceIcons.website}
    </svg>
)

const ServiceCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect()
        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        })
    }

    const CardContent = (
        <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            ref={divRef}
            onMouseMove={handleMouseMove}
        >
            <div
                className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
                    visible ? 'opacity-70' : 'opacity-0'
                }`}
                style={{
                    top: position.y - 150,
                    left: position.x - 150,
                }}
            />

            <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/15 dark:bg-primary/15">
                    <ServiceIcon name={service.iconName} title={service.title} />
                </div>

                <div className="flex-1">
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm mt-2">{service.description}</p>
                </div>
            </div>
        </Motion.div>
    )

    if (!service.link) {
        return <div className="block">{CardContent}</div>
    }

    const isExternalLink = /^https?:\/\//.test(service.link)

    return (
        <a
            href={service.link}
            target={isExternalLink ? "_blank" : "_self"}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="block"
        >
            {CardContent}
        </a>
    )
}

export default ServiceCard
