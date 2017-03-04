'use strict'

const tape = require('tape')
const calendar = require('./index')

tape('websozicms-calendar', (t) => {
	calendar('http://www.spd-city-westend.de')
	.then((events) => {
		t.plan(6)
		t.false(events.length==0, 'results count')
		t.true(events[0].title, 'result title')
		t.true(events[0].location, 'result location')
		t.true(+new Date(events[0].start) > 0, 'result start')
		t.true(+new Date(events[0].end) > 0, 'result end')
		t.true(events[0].organization=='SPD City-Westend Berlin')
	})
})