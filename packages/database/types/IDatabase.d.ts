import type { UserEvent, ChatEvent, VideoEvent } from "@covid-player/shared";
import type { IDatabase } from "@covid-player/database";

export interface IDatabase {
	saveUser(user: UserEvent): Promise<void>;
	getUser(userId: string): Promise<UserEvent | undefined>;
	getUsers(): Promise<UserEvent[]>;
	saveMessage(message: ChatEvent): Promise<void>;
	getMessages(): Promise<ChatEvent[]>;
	saveVideoState(videoState: VideoEvent): Promise<void>;
	getVideoState(): Promise<VideoEvent>;
}
