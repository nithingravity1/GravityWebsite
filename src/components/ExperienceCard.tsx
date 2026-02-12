import React from 'react';

interface ExperienceCardProps {
    number: string;
    title: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ number, title, description }) => {
    return (
        <div className="relative p-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 group h-full overflow-hidden">
            {/* Neon Border Effect */}
            {/* Neon Border Effect */}
            <div className="absolute inset-0 z-0 hidden group-hover:block mask-border p-[4px] pointer-events-none">
                {/* Electric Beam - Base */}
                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#0ea5e9_360deg)] animate-spin opacity-100 blur-[3px]"></div>
                {/* Electric Beam - Core */}
                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_350deg,#bae6fd_360deg)] animate-spin opacity-100 mix-blend-overlay"></div>
                {/* Electric Beam - Bright Tip */}
                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_345deg,#ffffff_360deg)] animate-spin opacity-100 mix-blend-color-dodge"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="text-6xl font-bold text-white mb-4 group-hover:scale-105 transition-transform origin-left">{number}</div>
                <div className="text-xl font-bold text-[#006BB4] mb-6">{title}</div>
                <p className="text-gray-400 text-lg">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;
