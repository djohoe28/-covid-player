import { UserDTO } from "@covid-player/shared";

export interface RoomEvent {
	kind: "chat" | "video" | "user";
	sender: UserDTO;
	timestamp: number;
	data: unknown;
	// roomId: string; // TODO: Remove?
}

export type RoomEventKind = RoomEvent["kind"]; // TODO: Remove? Improve?
