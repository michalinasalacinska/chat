import * as Parse from 'parse';

const NAME = 'User';

export class UserModel extends Parse.Object {
  constructor(params?: any) {
    super(NAME, params);
  }
}

Parse.Object.registerSubclass(NAME, UserModel);
