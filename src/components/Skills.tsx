// "use client"

import { skills } from "@/lib/skills";

// import { skills } from "@/lib/skills";

// export default function  Skills() {
//   return (
//     <section className="p-8 bg-gray-800 text-white">
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
//         {skills.map(skill => (
//           <div key={skill.name} className="text-center">
//             <h3 className="text-2xl font-semibold">{skill.name}</h3>
//             <p className="text-gray-400">{skill.years} Years Experience</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

 



export default function Skills() {
  return (
    <section className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-cyan-400 inline-block">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {skills.map(skill => (
            <div key={skill.name} className="flex items-center space-x-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-white">{skill.name}</div>
                <div className="text-gray-400 text-sm">{skill.years} Year{skill.years > 1 ? "s" : ""} of Experience</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
