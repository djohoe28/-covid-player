import type { UserDTO, ChatPacketDTO } from "@covid-player/shared";
import type { IDatabase, RoomDTO } from "@covid-player/database";

export default class RoomDictionary implements IDatabase {
	private static instance?: RoomDictionary;

	public static start() {
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
		throw new Error("Method not implemented.");
	}
	getUser(userId: string): Promise<UserDTO | undefined> {
		throw new Error("Method not implemented.");
	}
	getUsers(): Promise<UserDTO[]> {
		throw new Error("Method not implemented.");
	}
	saveMessage(message: ChatPacketDTO): Promise<void> {
		throw new Error("Method not implemented.");
	}
	getMessages(): Promise<ChatPacketDTO[]> {
		throw new Error("Method not implemented.");
	}
}
