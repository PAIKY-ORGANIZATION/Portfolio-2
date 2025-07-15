'use client';
import { IoIosPaper } from "react-icons/io";
import { FaGithub, FaYoutube  } from "react-icons/fa";
import { projects } from '@/lib/projects';
import { BsGlobe2 } from "react-icons/bs";
import { IoLogoNpm } from "react-icons/io5";



import Link from 'next/link';
import { JSX } from "react";

export default function AllProjects() {

  const iconsMap: { [key in urlTypes]: JSX.Element } = {
    'Github': <FaGithub className="w-4 h-4 mt-[1px]" />,
    'Youtube': <FaYoutube className="w-4 h-4 mt-[1px]" />,
    'Read Docs': <IoIosPaper className="w-4 h-4 mt-[1px]" />,
    'Try Out': <BsGlobe2 className="w-4 h-4 mt-[1px]" />,
    'NPM package': <IoLogoNpm className="w-7 h-7 mt-[1px]" />
  };


	//prettier-ignore
	return (
    <section className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-cyan-400 inline-block">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(proj => (
            <div key={proj.name} className="relative bg-gray-800 p-4 rounded">
                {proj.live && (
                  <div className="absolute top-2 left-2 text-white text-xs font-semibold px-3 py-1 rounded animate-pulse bg-red-600">
                    Live API
                  </div>
                )}
              <img src={proj.img} alt={proj.name} className="w-full h-auto rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <div className="flex space-x-2 mb-4">
                {proj.tags.map(tag => (
                  <span key={tag} className="text-sm  text-blue-400">{tag}</span>
                ))}
              </div>
              <p className="">{proj.description}</p>
              <div className="flex space-x-4 mt-4 flex-wrap">
                {/* //$ Object.entries returns an Array of Arrays containing key-value pairs.  */}
                {/* //$ Example:       [["github", "https..."], ["Youtube", "https..."]]        */}
                {/* //$ Then, for each array-pair, we ✨DESTRUCTURE✨ the array to get the key and value ([label, url]) */}
                {Object.entries(proj.urls).map(([label, url]) =>
                  url ? (
                    <Link key={label} href={url} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center space-x-1 text-blue-400 underline">
                      <span>{label}</span> {iconsMap[label as urlTypes]}
                    </Link>
                  ) : null
                )}
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
