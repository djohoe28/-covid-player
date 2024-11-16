import type {
	UserDTO,
	ChatEvent,
	VideoEvent,
} from "@covid-player/shared";
import type { IDatabase } from "@covid-player/database";
import { Database } from "bun:sqlite";
import { NotImplementedError } from "@covid-player/shared";

export class RoomDatabase implements IDatabase {
	private static instance?: RoomDatabase;

	public static getInstance() {
		if (!RoomDatabase.instance) {
			RoomDatabase.instance = new RoomDatabase();
		}
		return RoomDatabase.instance;
	}

	private db: Database;

	private constructor() {
		this.db = new Database("db.sqlite");
	}

	saveUser(user: UserDTO): Promise<void> {
		throw new NotImplementedError();
	}
	getUser(userId: string): Promise<UserDTO | undefined> {
		throw new NotImplementedError();
	}
	getUsers(): Promise<UserDTO[]> {
		throw new NotImplementedError();
	}
	saveMessage(message: ChatEvent): Promise<void> {
		throw new NotImplementedError();
	}
	getMessages(): Promise<ChatEvent[]> {
		throw new NotImplementedError();
	}
	saveVideoState(videoState: VideoEvent): Promise<void> {
		throw new NotImplementedError();
	}
	getVideoState(): Promise<VideoEvent> {
		throw new NotImplementedError();
	}
}
