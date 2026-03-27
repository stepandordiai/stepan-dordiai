export default async function getPortfolio() {
	const res = await fetch(import.meta.env.VITE_API_URL, {
		headers: {
			"X-SILO-KEY": import.meta.env.VITE_API_KEY,
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) throw new Error("Network res was not ok");

	const data = await res.json();

	return data;
}

// TODO: learn this
getPortfolio().catch((err) => console.error(err));
