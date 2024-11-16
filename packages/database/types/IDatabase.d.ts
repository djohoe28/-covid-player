export interface IDatabase {
	saveUser(user: UserPacketDTO): Promise<void>;
	getUser(userId: string): Promise<UserPacketDTO | undefined>;
	getUsers(): Promise<UserPacketDTO[]>;
	saveMessage(message: ChatPacketDTO): Promise<void>;
	getMessages(): Promise<ChatPacketDTO[]>;
	saveVideoState(videoState: VideoPacketDTO): Promise<void>;
	getVideoState(): Promise<VideoPacketDTO>;
}
