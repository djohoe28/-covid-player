import type UserDTO from "./UserDTO";
import type { VideoState } from "./VideoState";

export default interface PacketDTO {
  sender: UserDTO;
  timestamp: number;
  data: any;
}
