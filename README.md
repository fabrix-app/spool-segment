# spool-segment

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: Segment Spool

Implements [Segment](https://segment.io) as a Fabrix spool

[Analytics.js](https://segment.com/docs/connections/sources/catalog/libraries/server/node-js/)

This spool watches the segment flush property and will emit a fabrix event (`spool:segment:flushed`) when a flush happens.  It will also flush the segment que when unloaded to prevent data loss. 

## Install
```sh
$ npm install --save @fabrix/spool-segment
```

## Configure

```js
// config/main.ts
import { SegmentSpool } from '@fabrix/spool-segment'
export const main = {
  spools: [
    // ... other spools
    SegmentSpool
  ]
}
```

## Configuration

```js
 // config/segment.ts
export const segment = {
  write_key: '<YOUR WRITE KEY>',
  flush_at: 1,
  flush_interval: 1000
}
```

For more information about segment (type and configuration) please see the segment documentation.

## Usage

```js
const data = {...}

// You can use the extension directly...
this.app.segment.track(data)

// Or as a Promise from the SegmentService...
return this.app.services.SegmentService.track(data)

```

### SegmentService Methods

#### Identify

#### Track

#### Page

#### Group

#### Alias

#### Flush

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-segment.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-segment
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-segment/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-segment/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-segment.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-segment
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-segment.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-segment/coverage

