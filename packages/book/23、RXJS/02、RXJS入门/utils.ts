/**
 * create by yanle
 * create time 2019-11-08 23:13
 */


import { Subscriber } from 'rxjs/src/internal/Subscriber';
import { TeardownLogic } from 'rxjs/src/internal/types';

export type OnSubscribe<T> = (subscriber: Subscriber<T>) => TeardownLogic;
