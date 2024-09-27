import type PacketDTO from "./PacketDTO";

export interface ChatPacketDTO extends PacketDTO {
  data: string;
}
