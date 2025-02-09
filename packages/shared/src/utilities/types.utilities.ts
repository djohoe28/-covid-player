export type ValueOf<T> = T[keyof T];
// TODO: Remove commented types.
// export type Values<T> = T extends { [K in keyof T]: infer U } ? U : never;
// export type NestedValueOf<T> = T[keyof T][keyof T[keyof T]];
// export type RecursiveKeyOf<TObj extends object> = {
// 	[TKey in keyof TObj & (string | number)]: TObj[TKey] extends any[]
// 		? `${TKey}`
// 		: TObj[TKey] extends object
// 		? `${RecursiveKeyOf<TObj[TKey]>}`
// 		: `${TKey}`;
// }[keyof TObj & (string | number)];
// type Join<K, P> = K extends string | number ?
//     P extends string | number ?
//     `${K}${"" extends P ? "" : "."}${P}`
//     : never : never;
// 	type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
//     { [K in keyof T]-?: K extends string | number ?
//         `${K}` | Join<K, Paths<T[K], Prev[D]>>
//         : never
//     }[keyof T] : ""

// type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
//     { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";