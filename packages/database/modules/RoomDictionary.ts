import type { UserDTO, ChatPacketDTO } from "@covid-player/shared";
import type { IDatabase, RoomDTO } from "@covid-player/database";

export default class RoomDictionary implements IDatabase {
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

	public static start() {
		return new RoomDictionary();
	}

	private db: {[key: string]: RoomDTO} = {};

	private constructor() {}
}
