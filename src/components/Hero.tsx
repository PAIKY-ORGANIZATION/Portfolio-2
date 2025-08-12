"use client"

export  function  Hero() {
    return (
    <div className="flex justify-center items-center bg-[#141414] mt-20">
      <div className="text-center p-8 max-w-[50%]  text-white">
        <h1 className="text-4xl font-bold mb-2">Nice to meet you, I'm <span className="underline decoration-cyan-400">Miguel Mendez</span>.</h1>
        <p className="mb-4 text-gray-300 text-xl">I am a <span className="font-bold">Backend & DevOps Engineer</span> based in Mexico. I build and maintain robust server-side systems, manage infrastructure, and ensure smooth deployment. My work bridges backend development with reliable, secure, and efficient operations in the cloud.</p>
        <a href="#contact" className="underline text-blue-400">Contact me</a>
      </div>
      <div>
        <img src="/assets/images/my_self_1.png" alt="" className="mx-auto mb-4 w-80 rounded-full" />
      </div>
    </div>
  );
}