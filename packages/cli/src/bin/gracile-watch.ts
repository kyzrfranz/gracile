// NOTE: shebang via `@gracile/gracile`

import { program } from '@commander-js/extra-typings';
import { dev } from '@gracile/engine/dev/dev';
import { logger } from '@gracile/internal-utils/logger';

import { greet } from '../utils.js';

greet();

// DEV
program
	// .command('dev')
	.option('-p, --port <number>', 'Assign a local port (overrides config. file)')
	.option('-h, --host', 'Expose the server to you local network (0.0.0.0)')
	.action((_str, options) => {
		const opts = options.opts();
		dev({
			port: opts.port ? Number(opts.port) : undefined,
			expose: opts.host,
		}).catch((e) => logger.error(String(e)));
	});

program.parse();
