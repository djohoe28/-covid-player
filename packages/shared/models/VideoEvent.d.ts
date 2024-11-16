import type { RoomEvent } from "@covid-player/shared";

export interface VideoEvent extends RoomEvent {
	kind: "video";
	data: VideoState;
}
