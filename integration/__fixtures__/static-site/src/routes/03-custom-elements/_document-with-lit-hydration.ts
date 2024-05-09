import { helpers } from '@gracile/server/document';
import { html } from '@lit-labs/ssr';

export function document(context: { url: URL }) {
	return html`
		<!doctype html>
		<html lang="en" data-path=${context.url.pathname}>
			<head>
				<meta charset="UTF-8" />
				<title>Document - With Lit hydration</title>

				<!-- Must happens before loading custom elements -->
				${helpers.fullHydration}
				<!--  -->
				${helpers.pageAssets}
			</head>

			<body>
				<route-template-outlet></route-template-outlet>
			</body>
		</html>
	`;
}
