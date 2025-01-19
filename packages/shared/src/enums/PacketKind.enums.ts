// SEE: https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls

export type PacketKind =
	| ChatPacketKind
	| VideoPacketKind
	| UserPacketKind
	| ServerPacketKind;

export enum ChatPacketKind {
	Message = "message",
}

export enum VideoPacketKind {
	Source = "source",
	Play = "play",
	Pause = "pause",
	Seek = "seek",
}

export enum UserPacketKind {
	Join = "join",
	Leave = "leave",
}

export enum ServerPacketKind {
	Assign = "assign",
}
