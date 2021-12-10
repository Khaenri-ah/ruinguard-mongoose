import mongoose from 'mongoose';

export default class DB {
  constructor(options) {
    mongoose.connect(options.uri);
    this.mongoose = mongoose;
    for (const module of options.modules??[]) {
      for (const key in module.options?.mongoose.models??[]) {
        this[key] = this.mongoose.model(key, module.options.mongoose.models[key]);
      }
    }
  }
}
