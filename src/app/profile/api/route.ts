import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization")); //this is use for authorization and we deconstruct it from request sent from client
  console.log(`theme ${theme}`);
  console.log(cookies().get("resultPerPage"));
  return new Response(
    "<h1>profile data api sent through server using headers in html formate</h1>",
    {
      headers: {
        "Content-Type": "text/html",
        "Set-Cookie": "theme=dark",
      },
    }
  );
}
