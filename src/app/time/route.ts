export const dymaic = "force-dynamic"
export async function GET() {
  return Response.json({
    time: new Date().toLocaleString(),
  });
}
