export interface ChatPacketDTO extends PacketDTO {
	kind: "chat";
	data: string;
}
