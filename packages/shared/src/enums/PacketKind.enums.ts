
// SEE: https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls

import type { ValueOf } from "@shared/utilities/types.utilities";

export const ChatPacketKinds = {
	MESSAGE: "message",
} as const;
export type ChatPacketKind = ValueOf<typeof ChatPacketKinds>;

export const VideoPacketKinds = {
	SOURCE: "source",
	PLAY: "play",
	PAUSE: "pause",
	SEEK: "seek",
} as const;
export type VideoPacketKind = ValueOf<typeof VideoPacketKinds>;

export const UserPacketKinds = {
	JOIN: "join",
	LEAVE: "leave",
} as const;
export type UserPacketKind = ValueOf<typeof UserPacketKinds>;

export const ServerPacketKinds = {
    ASSIGN: "assign",
} as const;
export type ServerPacketKind = ValueOf<typeof ServerPacketKinds>;

// TODO: Requires maintenance, but `PacketKinds.MESSAGE` is redundant compared to a concrete `ChatPacketKinds.MESSAGE`.
export type PacketKind = ChatPacketKind | VideoPacketKind | UserPacketKind | ServerPacketKind;