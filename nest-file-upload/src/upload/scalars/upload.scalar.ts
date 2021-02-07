import { Scalar } from '@nestjs/graphql';

import { GraphQLUpload } from 'apollo-server-express';

@Scalar('Upload')
export class UploadScalar {
  parseValue(value) {
    return GraphQLUpload.parseValue(value);
  }

  serialize(value) {
    return GraphQLUpload.serialize(value);
  }

  parseLiteral(ast) {
    return GraphQLUpload.parseLiteral(ast, ast.value);
  }
}
