import * as Parse from 'parse';

const NAME = 'Messages';

export class MessageModel extends Parse.Object {
  constructor(params?: any) {
    super(NAME, params);
  }

  get content(): string {
    return this.get('content');
  }

  set content(content: string) {
    this.set('content', content);
  }

  get user(): Parse.User {
    return this.get('user');
  }

  set user(user: Parse.User) {
    this.set('user', user);
  }
}

Parse.Object.registerSubclass(NAME, MessageModel);
