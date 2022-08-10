import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class CreateCatDto {
  name : string ;
  age : string;
}