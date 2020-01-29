import joi from 'joi'

// https://segment.com/docs/connections/spec/track/
export const segmentTrack = joi.object().keys({
  //
  userId: joi.string(),
  anonymousId: joi.string(),
  event: joi.string(),
  timestamp: joi.string(),
  context: joi.object(),
  properties: joi.object(),
  integrations: joi.object(),
})
