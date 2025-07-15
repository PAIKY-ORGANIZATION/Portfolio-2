"use client"

export  function  Hero() {
    return (
    <section className="text-center p-8 bg-gray-900 text-white">
      <img src="/assets/images/my_profile_pic.png" alt="picture of Adam Keyes" className="mx-auto mb-4 w-48 rounded-full" />
      <h1 className="text-4xl font-bold mb-2">Nice to meet you! I&apos;m <span className="text-blue-400">Miguel Mendez</span>.</h1>
      <p className="mb-4 text-gray-300">I&#39;m a backend developer with  a strong interested on cloud development.</p>
      <a href="#contact" className="underline text-blue-400">Contact me</a>
    </section>
  );
}