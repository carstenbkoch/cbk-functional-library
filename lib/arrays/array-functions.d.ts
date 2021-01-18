export declare const isArray: (arr: [any]) => boolean;
export declare const isEmptyArray: (arr: [any]) => boolean;
export declare const argsToArray: (...args: any) => any;
export declare const createArray: (val?: null) => (count: number) => unknown[];
export declare const isFirstItem: (idx: number) => () => boolean;
export declare const map: (fn: (...args: any) => any) => (arr: [any]) => any[];
export declare const match: (regex: string) => (str: string) => RegExpMatchArray;
export declare const split: (separator: string) => (str: string) => string[];
export declare const join: (separator: string) => (arr: [any]) => string;
export declare const filter: (filterFn: (...args: any) => any) => (arr: [any]) => any[];
export declare const sort: (comparisionFn: (...args: any) => number) => (arr: [any]) => [any];
export declare const getFirstItem: (arr: [any]) => any;
export declare const filterFirstItem: (filterFn: (...args: any) => any) => (arr: [any]) => any;
export declare const filterFirstItemGetKey: (filterFn: (...args: any) => any, key: string) => (arr: [any]) => any;
export declare const slice: (indexFrom: number, indexTo: number | undefined) => (arr: [any]) => any[];
export declare const push: (...args: any) => (arr: [any]) => void;
export declare const pop: () => (arr: [any]) => void;
export declare const shift: () => (arr: [any]) => void;
export declare const unshift: (...args: any) => (arr: [any]) => void;
export declare const remove: (index: number) => (arr: [any]) => any[];
export declare const add: (index: number, items_0: any) => (arr: [any]) => any[];
export declare const move: (oldIndex: number, newIndex: number) => (arr: [any]) => any[];
