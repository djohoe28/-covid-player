export enum VideoActionTypes {
  PLAY,
  PAUSE,
  SEEK,
}

export type VideoActionType = keyof typeof VideoActionTypes;
