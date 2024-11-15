import type PacketDTO from "./PacketDTO";

export interface ChatPacketDTO extends PacketDTO {
	kind: "chat";
	data: string;
}
