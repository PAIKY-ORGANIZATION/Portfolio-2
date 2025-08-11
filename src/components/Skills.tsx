// "use client"

import { skills } from "@/lib/skills";



export default function Skills() {
  return (
    <section className="p-8 bg-[#141414] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-cyan-400 inline-block">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {skills.map(skill => (
            <div key={skill.name} className="flex items-center space-x-4">
              {/* //* Rounded image */}
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 "/>
              <div>
                <div className="font-semibold text-white">{skill.name}</div>
                {skill.years && <div className="text-gray-400 text-sm">{skill.years} Year{skill.years > 1 ? "s" : ""} of Experience</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
