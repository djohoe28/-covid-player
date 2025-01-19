import type { PacketKind } from "@shared/enums/PacketKind.enums";

export default interface Packet {
	kind: PacketKind;
	sender: string;
	timestamp: number;
	data: any;
}