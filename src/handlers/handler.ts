import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { connectToDatabase } from '../connect-to-db';
// import { bucketListModel } from '../data/models/bucket-list-item';
// import Joi from 'joi';

// const validate = (obj: any) => {
//   const schema = Joi.object({
//     name: Joi.string().required().alphanum(),
//     complete: Joi.bool().default(false),
//     description: Joi.string().required(),
//     imageUrls: Joi.array(),
//     activity: Joi.string().required().alphanum(),
//   })
//   const { error, value } = schema.validate(obj);
//   if (error) {
//     throw error;
//   }
//   return value;
// }

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  console.log(`${JSON.stringify(event)}`);
  await connectToDatabase();
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "world",
    }, null, 2),
  };
}
