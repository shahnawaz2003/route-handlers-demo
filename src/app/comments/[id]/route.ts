import { redirect } from "next/navigation";
import { Comments } from "../data";

//get a single post
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  // if (parseInt(params.id) > Comments.length) {
  //   redirect("/comments");
  // }
  const comment = Comments.find(
    (comment) => comment.id === parseInt(params.id)
    
  );
  if(!comment){
    return Response.json(`There is no comment between your id please enter comment from 1 to ${Comments.length}`)
  }
  return Response.json(comment);
}


export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = Comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  Comments[index].text = text;
  return Response.json(Comments[index]);
}


export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = Comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = Comments[index];
  Comments.splice(index, 1);
  return Response.json(deletedComment);
}
