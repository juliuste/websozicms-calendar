'use strict'

const join = require('url-join')
const rss = require('simple-rss')
const moment = require('moment-timezone')

const parseDateTime = (dateTime) => moment.tz(dateTime, 'DD.MM.YYYY HH:mm', 'Europe/Berlin').toISOString()

const parseSummary = (summary) => ({
	location: summary.slice(0, -36),
	start: parseDateTime(summary.slice(-35, -19)),
	end: parseDateTime(summary.slice(-16))
})

const parseResult = (result) => {
	const extracted = parseSummary(result.summary)
	return Object.assign(extracted, {
		title: result.title,
		organization: result.author
	})
}

const parseResults = (results) => results.map(parseResult)

const fetch = (url) => {
	url = join(url, '/calendar.xml')
	return rss(url)
	.then(parseResults)
}

module.exports = fetch