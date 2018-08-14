'use strict'

const tape = require('tape')
const isDate = require('lodash.isdate')
const calendar = require('./index')

tape('websozicms-calendar', async t => {
	const events = await calendar('https://www.spd-pankow.de')
	t.ok(Array.isArray(events) && events.length > 0, 'results count')

	t.ok(!!events.find(e => e.location), 'at least one event with location')
	t.ok(!!events.find(e => e.end), 'at least one event with end')

	for (let event of events) {
		t.ok(typeof event.title === 'string' && event.title.length > 0, 'title')

		if (event.location) t.ok(typeof event.location === 'string' && event.location.length > 0, 'location')

		t.ok(event.start)
		t.ok(isDate(event.start), 'start')
		t.ok(+new Date('2000-01-01') < +event.start, 'event started in this century')

		if (event.end) {
			t.ok(isDate(event.end), 'end')
			t.ok(+event.start <= +event.end, 'start <= end')
		}

		t.ok(event.organization.name==='SPD Pankow')
		t.ok(event.organization.id==='spdpankow')
	}

	t.end()
})
