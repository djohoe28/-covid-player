import type {
	Packet,
	ChatPacketDTO,
	UserPacketDTO,
	VideoPacketDTO,
} from "@covid-player/shared";

// TODO: Remove?
// SEE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// SEE: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

export function isChatPacketDTO(packet: Packet): packet is ChatPacketDTO {
	return packet.kind === "chat";
}
export function isUserPacketDTO(packet: Packet): packet is UserPacketDTO {
	return packet.kind === "user";
}
export function isVideoPacketDTO(packet: Packet): packet is VideoPacketDTO {
	return packet.kind === "video";
}
