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
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-bold text-end mr-60 text-xl"> The rest of my skills are listed on <a href="https://drive.google.com/file/d/1Ql215eSbrvTVrgTBSX180RTRC1Q-i9-I/view?usp=sharing" className="underline text-blue-400">My resume</a>!</p>
      </div>
    </section>
  );
}
