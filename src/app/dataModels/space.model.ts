import * as Parse from 'parse';

const NAME = 'Spaces';

export class SpacesModel extends Parse.Object {
  constructor(params?: any) {
    super(NAME, params);
  }

  get name(): string {
    return this.get('name');
  }

  set name(name: string) {
    this.set('name', name);
  }

  get user(): Parse.User {
    return this.get('user');
  }

  set user(user: Parse.User) {
    this.set('user', user);
  }
}

Parse.Object.registerSubclass(NAME, SpacesModel);
