import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly githubUser: string;
  readonly cep: string;
  readonly state: string;
  readonly city: string;
  readonly district: string;
  readonly street: string;
  readonly number: number;
  readonly complement: number;
}
