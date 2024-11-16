import type { RoomEvent } from "@covid-player/shared";

export interface ChatEvent extends RoomEvent {
	kind: "chat";
	data: string;
}
