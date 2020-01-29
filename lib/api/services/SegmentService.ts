import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'
/**
 * @module SegmentService
 * @description Segment Service makes each call a Promise, to use the lib directly, just do eg, this.app.segment.track
 */
export class SegmentService extends Service {
  constructor(app) {
    super(app)
  }

  /**
   * Identify
   * https://segment.com/docs/connections/spec/identify/
   * @param data
   */
  identify(data) {
    return Validator.identify(data)
      .then(valid => {
        return new Promise((resolve, reject) => {
          this.app.segment.identify(valid, (err) => {
            if (err) {
              return reject(err)
            }
            return resolve()
          })
        })
      })
  }

  /**
   * Track
   * https://segment.com/docs/connections/spec/track/
   * @param data
   */
  track(data) {
    return Validator.track(data)
      .then(valid => {
        return new Promise((resolve, reject) => {
          this.app.segment.track(valid, (err) => {
            if (err) {
              return reject(err)
            }
            return resolve()
          })
        })
      })
  }

  /**
   * Page
   * https://segment.com/docs/connections/spec/page/
   * @param data
   */
  page(data) {
    return Validator.page(data)
      .then(valid => {
        return new Promise((resolve, reject) => {
          this.app.segment.page(valid, (err) => {
            if (err) {
              return reject(err)
            }
            return resolve()
          })
        })
      })
  }

  /**
   * Group
   * https://segment.com/docs/connections/spec/group/
   * @param data
   */
  group(data) {
    return Validator.group(data)
      .then(valid => {
        return new Promise((resolve, reject) => {
          this.app.segment.group(valid, (err) => {
            if (err) {
              return reject(err)
            }
            return resolve()
          })
        })
      })
  }

  /**
   * Alias
   * @param data
   */
  alias(data) {
    return Validator.alias(data)
      .then(valid => {
        return new Promise((resolve, reject) => {
          this.app.segment.alias(valid, (err) => {
            if (err) {
              return reject(err)
            }
            return resolve()
          })
        })
      })
  }

  /**
   * Flush the Segment que
   */
  flush() {
    return new Promise((resolve, reject) => {
      this.app.segment.flush((err?) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    })
  }

  screen(data) {
    return new Promise((resolve, reject) => {
      this.app.segment.screen(data, (err) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    })
  }
}
