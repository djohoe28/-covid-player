import type PacketDTO from "./PacketDTO";

export interface UserPacketDTO extends PacketDTO {
	kind: "user";
	data: string; // TODO: UserDTO? UserAction?
}
