import { Request, Response } from "express";
import membersListLatest from "../data/members-list.json";
import ResponseHandler from "../components/responseHandler";

export async function GET(req: Request, res: Response) {
	/* eslint-disable camelcase */

	const { profile_pic_url } = req.query;

	if (!profile_pic_url) {
		throw new Error("Missing query parameters");
	}

	const m = membersListLatest.find(
		(member) =>
			member.profile_pic_url === profile_pic_url
	);

	if (!m) {
		throw new Error("Member not found");
	}

	return ResponseHandler.success({
		req,
		res,
		data: {
			role: m?.role,
			admin: m?.role.toLowerCase() === "owner" ? true : false,
		},
		message: "Member found",
	});
}

export default { GET };
