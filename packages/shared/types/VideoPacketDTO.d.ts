import type PacketDTO from "./PacketDTO";
import type { VideoState } from "./VideoState";

export interface VideoPacketDTO extends PacketDTO {
  data: VideoState;
}
