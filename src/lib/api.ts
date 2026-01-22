interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_API_KEY: string;
}

// TODO: learn this
declare global {
	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}

export default async function getPortfolioData() {
	const res = await fetch(import.meta.env.VITE_API_URL, {
		headers: {
			"X-SILO-KEY": import.meta.env.VITE_API_KEY,
			"Content-Type": "application/json",
		},
	});
	const portfolioData = await res.json();
	return portfolioData;
}
