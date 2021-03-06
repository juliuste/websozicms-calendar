# websozicms-calendar

Queries a [WebSoziCMS](https://www.websozicms.de) website for events.

[![npm version](https://img.shields.io/npm/v/websozicms-calendar.svg)](https://www.npmjs.com/package/websozicms-calendar)
[![Build Status](https://travis-ci.org/juliuste/websozicms-calendar.svg?branch=master)](https://travis-ci.org/juliuste/websozicms-calendar)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/websozicms-calendar.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/websozicms-calendar.svg)](https://david-dm.org/juliuste/websozicms-calendar)
[![license](https://img.shields.io/github/license/juliuste/websozicms-calendar.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)


## Installation

```bash
npm install websozicms-calendar
```

## Usage

```js
const calendar = require('websozicms-calendar')

const events = calendar('http://cool-organization.com').then(…)
```

You need to provide the base URL of the WebSoziCMS website you want to query as a single parameter. Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that resolves in a list of events which looks like this:

```js
{
	location: 'Zum wilden Troll, Meister-Eder-Platz 8, 48484 Blubdorf', // optional
	start: '2017-03-03T18:30:00.000Z', // Date() Object
	end: '2017-03-03T21:00:00.000Z', // Date() Object, optional
	title: 'Monthly meeting',
	organization: {
		id: 'spdbutzwest',
		name: 'SPD Butz-West'
	}
}
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/websozicms-calendar/issues).
