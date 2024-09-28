import type { UserDTO, ChatPacketDTO } from "@covid-player/shared";
import type { IDatabase } from "@covid-player/database";
import { Database } from "bun:sqlite";

export default class RoomDatabase implements IDatabase {
	private static instance?: RoomDatabase;

	public static start() {
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
