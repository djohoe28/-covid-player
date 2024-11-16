export interface PacketDTO {
	kind: "chat" | "video" | "user";
	sender: UserDTO;
	timestamp: number;
	data: any;
	roomId: string; // TODO: Remove?
}
