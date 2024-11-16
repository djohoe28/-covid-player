import type { RoomEvent } from "@covid-player/shared";

export interface UserEvent extends RoomEvent {
	kind: "user";
	data: string;
}
