import { Module, Bot } from '@ruinguard/core';
import DB from './db.js';

export default options => {
  Bot.prototype.mongo = new DB(options);

  return new Module({});
};
