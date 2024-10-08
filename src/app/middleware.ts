import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  
    const themePrefrence = request.cookies.get("theme");
    const response = NextResponse.next();
    if (!themePrefrence) {
      response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header","custom-value")
    return response
}
    // if (request.nextUrl.pathname === "/profile") {
    //     
    
    // return NextResponse.rewrite(new URL("/hello", request.url)); //the url would remain the same but the UI would change
    // return NextResponse.redirect(new URL("/hello", request.url));
// }

  //   return NextResponse.redirect(new URL("/", request.url));


// export const config = {
//   matcher: "/profile",
// };
