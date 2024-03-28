import { TaggedError } from 'effect/Data'
import { Context, Effect } from 'effect'

export class WrongNumberError extends TaggedError(`WrongNumberError`)<{ message: string }> {}

export const getAnswer = Effect.randomWith(r => r.nextIntBetween(0, 10)).pipe(
  Effect.flatMap(
    a => a < 5
      ? Effect.succeed(`${a} is less than 5`)
      : Effect.fail(new WrongNumberError({ message: `${a} is greater than 5` }))),
)
