import type { UserDTO, ChatEvent, VideoState } from "@covid-player/shared";

export type RoomDTO = {
	users: UserDTO[];
	messages: ChatEvent[];
	videoState: VideoState;
};
