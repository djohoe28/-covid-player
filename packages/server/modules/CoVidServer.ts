import type { Server } from "bun";
import type { RoomEvent } from "@covid-player/shared";
import type { BaseRoomCollection } from "@covid-player/database";
import type { SocketDTO } from "@covid-player/server";
import { randomUUID } from "crypto";
import { RoomDatabase } from "@covid-player/database";

export class CoVidServer {
	private static instance?: CoVidServer;

	public static getInstance() {
		if (!CoVidServer.instance) {
			CoVidServer.instance = new CoVidServer();
		}
		return CoVidServer.instance;
	}

	public database: BaseRoomCollection;
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
					CoVidServer.getInstance().database.handleEvent(
						ws.data.roomId,
						parsed
					); // TODO: Is there a way to reference `this` here?
				},
				async close(ws, code, reason) {},
			},
		});
	}
}
