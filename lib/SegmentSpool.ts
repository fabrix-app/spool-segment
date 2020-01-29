import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Segment } from './segment'
import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class SegmentSpool extends ExtensionSpool {
  public segment: {[key: string]: any} = {}
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      segment: {
        get: () => {
          return this.segment
        },
        set: (newInstances) => {
          throw new Error('segment can not be set through FabrixApp, check spool-segment instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // const requiredSpools = [ ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-segment requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('segment')) {
      return Promise.reject(new Error('No configuration found at config.segment!'))
    }

    return Promise.all([
      Validator.validateSegmentConfig(this.app.config.get('segment'))
    ])
  }

  /**
   * Check if there some stores, if not set a default one
   */
  async configure() {
    this.segment = Segment.config(this.app)
    return
  }

  /**
   * create caching stores
   */
  async initialize() {
    return Segment.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    return Segment.unload(this.app)
  }
}
