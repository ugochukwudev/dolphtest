// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { draftMode } from "next/headers";
// export default function GET(req: Request, res: NextApiResponse) {
//   res.setDraftMode({ enable: true });
//   res.writeHead(307, { location: "/" });
//   res.end();
// }
// export async function GET(request: Request) {
//   return new Response("Hello, Next.js!");
// }

// export const GET = async (request: NextApiRequest, res: NextApiResponse) => {
//   //await res?.setDraftMode({ enable: true });
//   //response.writeHead(307, { location: "/" });
//   // response.end();
// };
export const GET = async (res: any, req: any) => {
  draftMode().disable();
  redirect("/");
};
