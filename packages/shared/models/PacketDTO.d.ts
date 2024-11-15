export interface PacketDTO {
	kind: "chat" | "video" | "user";
	sender: UserDTO;
	timestamp: number;
	data: any;
}
