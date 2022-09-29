import { PrismaClient } from '@prisma/client';
import { error, type RequestEvent } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function GET({ url }: RequestEvent): Promise<Response> {
	const dateString = url.searchParams.get('date') ?? new Date().toISOString();

	const dailyChallenge = await prisma.dailyChallenge.findFirst({
		where: {
			date: {
				equals: dateString.substring(0, 10) + "T00:00:00.000Z"
			}
		}
	});

	if(!dailyChallenge){
		throw error(404, {
			message: "No challenge found for specified date."
		});
	}

	const game = await prisma.game.findFirst({
		where: {
			id: {
				equals: dailyChallenge.gameId
			}
		}
	});

	if(!game){
		throw error(404, {
			message: "No game found for given id."
		});
	}

	return new Response(JSON.stringify(game));
}
