import type { PacketKind } from "@shared/enums/PacketKind.enums";

export default interface Packet {
	/**
	 * Enum indicating the packet's purpose.
	 */
	kind: PacketKind;
	/**
	 * The sender's UUID.
	 */
	sender: string;
	/**
	 * The Unix timestamp of initial creation.
	 */
	timestamp: number;
	/**
	 * The payload; type can be inferred via {@link kind}.
	 */
	data: any;
}
