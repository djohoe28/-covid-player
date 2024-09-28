import type { SocketDTO } from "../models";
import { randomUUID } from "crypto";

export function createServer() {
	return Bun.serve<SocketDTO>({
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
				await saveMessageToDatabase({
					message: String(message),
					userId: ws.data.userId,
				});
			},
			async close(ws, code, reason) {},
		},
	});
}
