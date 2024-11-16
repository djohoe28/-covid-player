import type { Server } from "bun";
import type { SocketDTO } from "../models";
import { randomUUID } from "crypto";
import type { IDatabase } from "@covid-player/database";
import { RoomDatabase } from "@covid-player/database/modules/RoomDatabase";
import type {
	ChatEvent,
	RoomEvent,
	UserEvent,
	VideoEvent,
} from "@covid-player/shared";
export class CoVidServer {
	private static instance?: CoVidServer;

	public static getInstance() {
		if (!CoVidServer.instance) {
			CoVidServer.instance = new CoVidServer();
		}
		return CoVidServer.instance;
	}

	public database: IDatabase;
	public server: Server;

	private constructor() {
		this.database = RoomDatabase.getInstance();
		this.server = Bun.serve<SocketDTO>({
			async fetch(request, server) {
				const cookies = parseCookies(request.headers.get("Cookie"));
				const token = cookies["X-Token"];
				const user = await getUserFromToken(token);

				const upgraded = server.upgrade(request, {
					data: {
						createdAt: Date.now(),
						token: cookies["X-Token"],
						userId: user.id || randomUUID(),
					},
				});

				if (upgraded) return undefined;
			},
			websocket: {
				async open(ws) {},
				async message(ws, message) {
					let parsed = JSON.parse(String(message)) as RoomEvent;
					switch (parsed.kind) {
						// TODO: Discriminated Union; use Type Guards?
						case "user":
							await CoVidServer.getInstance().database.saveUser(
								parsed as UserEvent
							);
							break;
						case "video":
							await CoVidServer.getInstance().database.saveVideoState(
								parsed as VideoEvent
							);
							break;
						case "chat":
							await CoVidServer.getInstance().database.saveMessage(
								parsed as ChatEvent
							);
							break;
						default:
							break;
					}
				},
				async close(ws, code, reason) {},
			},
		});
	}
}
