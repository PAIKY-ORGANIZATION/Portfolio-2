"use client"


import React from 'react';
import { contactInfo } from './Contact-info';
import { sendInterestEmail } from '@/actions/send-interest-email';
import toast from 'react-hot-toast';

//prettier-ignore
export default function Contact() {
	const onSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		
		const name = formData.get('name') as string | null
		const email = formData.get('email') as string | null
		const message = formData.get('message') as string | null
		
		const result = await sendInterestEmail({name: name , email: email , message: message})

		if(result.success){
			toast.success(result.message)
		}else{
			toast.error(result.message)
		}


	}




	return (
		<section id="contact" className="bg-gray-900 text-white py-16 px-4">
			<div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
				<div>
					<h2 className="text-3xl font-bold mb-4 border-b-2 border-cyan-400 inline-block">
						Contact
					</h2>
					<p className="text-gray-300">
						I would love to hear about your project and how I could help. Please contact me via email, phone, or by messaging me using the form, and I'll get back to you as soon as possible. Thank you very much.
					</p>
				</div>

				<div>
					<form className="space-y-6" onSubmit={onSubmit}>
						<div>
							<label className="block text-sm uppercase tracking-wide mb-1"> Name: </label>
							<input placeholder="Type here" name="name"  type="text" className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2" required/>
						</div>
						<div>
							<label  className="block text-sm uppercase tracking-wide mb-1"> Email: </label>
							<input placeholder="Type here" name="email" type="email" className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2" required/>
						</div>
						<div>
							<label className="block text-sm uppercase tracking-wide mb-1"> Message: </label>
							<textarea placeholder="Type here" name="message" rows={4} className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 resize-none" required />
						</div>
						<button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full">
							Send Message
						</button>
					</form>

					<div className="mt-10 space-y-6 text-sm">
						{contactInfo.map((item) => (
							<div key={item.label} className="flex items-center space-x-2">
								{item.icon}
								<div>
									<div className="font-semibold"> {item.label}</div>
									<div className="text-gray-400"> {item.value} </div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
