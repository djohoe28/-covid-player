import type { ChatEvent, VideoEvent, UserEvent } from "@covid-player/shared";

export type RoomDTO = {
	userEvents: UserEvent[];
	chatEvents: ChatEvent[];
	videoEvent: VideoEvent;
};
