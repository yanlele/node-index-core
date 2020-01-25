export interface Action<T = any> {
  type: T;
}

export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>;
};

export type ActionFromReducer<R> = R extends Reducer<any, infer A> ? A : never;

export type StateFromReducersMapObject<M> = M extends ReducersMapObject<any, any>
  ? { [P in keyof M]: M[P] extends Reducer<infer S, any> ? S : never }
  : never;

export type ActionFromReducersMapObject<M> = M extends ReducersMapObject<any, any>
  ? ActionFromReducer<ReducerFromReducersMapObject<M>>
  : never;

export type ReducerFromReducersMapObject<M> = M extends { [P in keyof M]: infer R }
  ? R extends Reducer<any, any>
    ? R
    : never
  : never;

declare const $CombinedState: unique symbol;

export type CombinedState<S> = { readonly [$CombinedState]?: undefined } & S;

export function combineReducers<S>(reducers: ReducersMapObject<S, any>): Reducer<CombinedState<S>>;

export function combineReducers<S, A extends Action = AnyAction>(
  reducers: ReducersMapObject<S, A>,
): Reducer<CombinedState<S>, A>;

export function combineReducers<M extends ReducersMapObject<any, any>>(
  reducers: M,
): Reducer<CombinedState<StateFromReducersMapObject<M>>, ActionFromReducersMapObject<M>>;

export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T;
}
