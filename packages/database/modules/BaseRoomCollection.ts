import type {
	ChatEvent,
	RoomEvent,
	UserEvent,
	VideoEvent,
} from "@covid-player/shared";
import type { IRoomCollection } from "@covid-player/database";

export abstract class BaseRoomCollection implements IRoomCollection {
	abstract saveUser(roomId: string, user: UserEvent): Promise<void>;
	abstract getUser(userId: string): Promise<UserEvent | undefined>;
	abstract getUsersInRoom(roomId: string): Promise<UserEvent[]>;
	abstract saveMessage(roomId: string, message: ChatEvent): Promise<void>;
	abstract getMessages(roomId: string): Promise<ChatEvent[]>;
	abstract saveVideoEvent(
		roomId: string,
		videoEvent: VideoEvent
	): Promise<void>;
	abstract getVideoEvent(roomId: string): Promise<VideoEvent>;

	handleEvent(roomId: string, event: RoomEvent): Promise<void> {
		switch (event.kind) {
			case "user":
				return this.saveUser(roomId, event as UserEvent);
			case "chat":
				return this.saveMessage(roomId, event as ChatEvent);
			case "video":
				return this.saveVideoEvent(roomId, event as VideoEvent);
			default:
				break;
		}
		return Promise.resolve();
	}
}
