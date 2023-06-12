import { AnyAction } from 'redux';

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
