'use strict'

const join = require('url').resolve
const rss = require('simple-rss')
const moment = require('moment-timezone')

const parseDateTime = (dateTime) => moment.tz(dateTime, 'DD.MM.YYYY HH:mm', 'Europe/Berlin').toDate()

const parseSummary = (summary) => ({
	location: summary.slice(0, -36),
	start: parseDateTime(summary.slice(-35, -19)),
	end: parseDateTime(summary.slice(-16))
})

const parseResult = (result) => {
	const event = {
		title: result.title,
		organization: {
			id: result.author.replace(/[^A-Za-z0-9]/g, '').toLowerCase(),
			name: result.author
		}
	}

	const extracted = parseSummary(result.summary)

	event.start = extracted.start
	if (extracted.location) event.location = extracted.location
	if (+extracted.end > 0 && +extracted.end > +extracted.start) event.end = extracted.end

	return event
}

const calendar = async (url) => {
	const results = await(rss(join(url, '/calendar.xml')))
	return results.map(parseResult)
}

module.exports = calendar
