import type UserDTO from "./UserDTO";
import type { VideoState } from "./VideoState";

export default interface PacketDTO {
	kind: "chat" | "video" | "user";
	sender: UserDTO;
	timestamp: number;
	data: any;
}
