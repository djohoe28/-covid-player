import type {
	UserDTO,
	ChatEvent,
	VideoEvent,
} from "@covid-player/shared";
import type { IDatabase, RoomDTO } from "@covid-player/database";
import { NotImplementedError } from "@covid-player/shared";

export class RoomDictionary implements IDatabase {
	private static instance?: RoomDictionary;

	public static getInstance() {
		if (!RoomDictionary.instance) {
			RoomDictionary.instance = new RoomDictionary();
		}
		return RoomDictionary.instance;
	}

	private db: { [key: string]: RoomDTO };

	private constructor() {
		this.db = {};
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
