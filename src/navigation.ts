export const siteRoutes = [
	{ href: '/', label: 'Accueil' },
	{ href: '/projets-scolaires/', label: 'Projets scolaires' },
	{ href: '/projets-entreprise/', label: "Projets d'entreprise" },
	{ href: '/cv/', label: 'CV' },
	{ href: '/a-propos/', label: 'Mémoire' },
] as const;

export const headerNavItems = siteRoutes.filter((route) => route.href !== '/');

export const routeOrder = siteRoutes.map((route) => route.href);
