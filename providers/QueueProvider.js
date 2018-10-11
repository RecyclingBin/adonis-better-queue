'use strict'

const { ServiceProvider } = require.main.require('@adonisjs/fold')

/**
 * Provider for inject Queue service into the Adonis Ioc
 *
 * @version 1.0.0
 * @adonis-version 4.0
 */

class QueueProvider extends ServiceProvider {


  /**
	 * Register a Queue instance
	 */
	 register() {
		const Queue = require('../src/queue/Driver');
		this.app.singleton('Adonis/Addon/BetterQueue', app => {
			return new Queue(app);
		});
	}
};

module.exports = QueueProvider;
