import { ICounterSchema } from 'entities/Counter'
import { IUserSchema } from 'entities/User'
import { ILoginFormSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema
  loginForm: ILoginFormSchema
}
