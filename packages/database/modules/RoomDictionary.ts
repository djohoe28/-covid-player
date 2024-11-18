import type { ChatEvent, VideoEvent, UserEvent } from "@covid-player/shared";
import type { RoomDTO } from "@covid-player/database";
import { BaseRoomCollection } from "@covid-player/database";
import { NotImplementedError } from "@covid-player/shared";

export class RoomDictionary extends BaseRoomCollection {
	private static instance?: RoomDictionary;

	public static getInstance() {
		if (!RoomDictionary.instance) {
			RoomDictionary.instance = new RoomDictionary();
		}
		return RoomDictionary.instance;
	}

	private db: { [key: string]: RoomDTO };

	private constructor() {
		super();
		this.db = {};
	}

	saveUser(roomId: string, event: UserEvent): Promise<void> {
		// TODO: Improve?
		this.db[roomId].userEvents.filter((e) => e.data !== event.data);
		this.db[roomId].userEvents.push(event);
		return Promise.resolve();
	}
	getUser(userId: string): Promise<UserEvent | undefined> {
		throw new NotImplementedError();
	}
	getUsersInRoom(roomId: string): Promise<UserEvent[]> {
		throw new NotImplementedError();
	}
	saveMessage(roomId: string, message: ChatEvent): Promise<void> {
		throw new NotImplementedError();
	}
	getMessages(roomId: string): Promise<ChatEvent[]> {
		throw new NotImplementedError();
	}
	saveVideoEvent(roomId: string, videoEvent: VideoEvent): Promise<void> {
		throw new NotImplementedError();
	}
	getVideoEvent(roomId: string): Promise<VideoEvent> {
		throw new NotImplementedError();
	}
}
