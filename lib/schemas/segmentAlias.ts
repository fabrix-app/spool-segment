import joi from 'joi'

export const segmentAlias = joi.object().keys({
  //
  userId: joi.string(),
  previousId: joi.string()
})
