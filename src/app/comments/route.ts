import { NextRequest } from "next/server";
import { Comments } from "./data";

//Filtration query
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterdComments = query
    ? Comments.filter((comment) => comment.text.includes(query))
    : Comments;
  if (filterdComments.length === 0) {
    return Response.json("There is no relevent comment");
  }
  return Response.json(filterdComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: Comments.length + 1,
    text: comment.text,
  };
  Comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}
