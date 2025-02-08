import type { ChatPacketKind, VideoPacketKind, PacketKind } from "@shared/enums/PacketKind.enums";
import type MediaState from "@shared/models/MediaState.model";

interface BasePacket {
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
	// data: any;
}

interface ChatPacket extends BasePacket {
	kind: ChatPacketKind;
	payload: string;
}

interface MediaStatePacket extends BasePacket {
	kind: VideoPacketKind;
	payload: MediaState;
}

export type Packet = ChatPacket | MediaStatePacket; // TODO: Equivalent to using `BasePacket`...