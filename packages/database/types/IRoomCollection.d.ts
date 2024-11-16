import type { UserEvent, ChatEvent, VideoEvent } from "@covid-player/shared";
import type { IRoomCollection } from "@covid-player/database";

export interface IRoomCollection {
	saveUser(roomId: string, user: UserEvent): Promise<void>;
	getUser(userId: string): Promise<UserEvent | undefined>;
	getUsersInRoom(roomId: string): Promise<UserEvent[]>;
	saveMessage(roomId: string, message: ChatEvent): Promise<void>;
	getMessages(roomId: string): Promise<ChatEvent[]>;
	saveVideoEvent(roomId: string, videoEvent: VideoEvent): Promise<void>;
	getVideoEvent(roomId: string): Promise<VideoEvent>;
}
