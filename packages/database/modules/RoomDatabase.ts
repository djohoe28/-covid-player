import type { ChatEvent, VideoEvent, UserEvent } from "@covid-player/shared";
import { BaseRoomCollection } from "@covid-player/database";
import { Database } from "bun:sqlite";
import { NotImplementedError } from "@covid-player/shared";

export class RoomDatabase extends BaseRoomCollection {
	private static instance?: RoomDatabase;

	public static getInstance() {
		if (!RoomDatabase.instance) {
			RoomDatabase.instance = new RoomDatabase();
		}
		return RoomDatabase.instance;
	}

	private db: Database;

	private constructor() {
		super();
		this.db = new Database("db.sqlite");
	}

	saveUser(roomId: string, user: UserEvent): Promise<void> {
		throw new NotImplementedError();
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
