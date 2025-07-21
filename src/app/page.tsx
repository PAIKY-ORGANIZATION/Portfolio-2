import Contact from '@/components/Contact';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Hero } from '@/components/Hero';
import AllProjects from '@/components/Projects';
import Skills from '@/components/Skills';
import { mainPageLogsPath } from '@/lib/variables';
import { requestLog } from '@/utils/log-request';

export default async function MainPage() {
	

	await requestLog({filePath: mainPageLogsPath, action: 'Visited  portfolio main page'}) //$ This depends on middleware for the IP address

	
	return (
		<>
			{/* //* Header has fixed position */}
			<Header />
			<main className="pt-20">
				<Hero />
				<Skills />
				<AllProjects />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
