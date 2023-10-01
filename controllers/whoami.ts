import { Request, Response } from "express";
import membersListLatest from "../data/members-list.json";
import ResponseHandler from "../components/responseHandler";

export async function GET(req: Request, res: Response) {
	/* eslint-disable camelcase */

	const { name, profile_pic_url } = req.query;

	console.log("name", name);

	if (!name || !profile_pic_url) {
		throw new Error("Missing query parameters");
	}

	const m = membersListLatest.find(
		(member) =>
			member.name === name && member.profile_pic_url === profile_pic_url
	);

	return ResponseHandler.success({
		req,
		res,
		data: {
			role: m?.role,
			admin: m?.role.toLowerCase() === "owner" ? true : false,
		},
		message: "Members list",
	});
}

export default { GET };
