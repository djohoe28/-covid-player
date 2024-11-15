import type { ChatPacketDTO, UserDTO } from "@covid-player/shared";

export interface IDatabase {
	saveUser(user: UserDTO): Promise<void>;
	getUser(userId: string): Promise<UserDTO | undefined>;
	getUsers(): Promise<UserDTO[]>;
	saveMessage(message: ChatPacketDTO): Promise<void>;
	getMessages(): Promise<ChatPacketDTO[]>;
}
