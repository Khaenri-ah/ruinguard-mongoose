import { Module, Bot } from '@ruinguard/core';
import DB from './db.js';

export default options => {
  Bot.prototype.db = new DB(options);

  return new Module({});
};
