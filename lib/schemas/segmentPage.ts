import joi from 'joi'

export const segmentPage = joi.object().keys({
  //
  userId: joi.string(),
  anonymousId: joi.string(),
  category: joi.string(),
  name: joi.string(),
  timestamp: joi.string(),
  context: joi.object(),
  properties: joi.object(),
})
