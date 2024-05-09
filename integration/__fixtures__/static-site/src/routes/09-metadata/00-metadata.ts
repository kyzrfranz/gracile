import { defineRoute } from '@gracile/server/route';
import { html } from 'lit';

import { document } from './_document-with-metatada.js';

export default defineRoute({
	document: (context) => document(context),

	template: (context) => html`
		<h1>Hello Metadata</h1>
		<hr />
		<code>${context.url.pathname}</code>
	`,
});
