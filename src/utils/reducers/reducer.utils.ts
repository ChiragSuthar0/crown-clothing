import { AnyAction } from 'redux';

export type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

function CreateAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

function CreateAction<T extends string>(type: T, payload: void): Action<T>;

function CreateAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P> {
  return { type, payload };
}

export default CreateAction;
