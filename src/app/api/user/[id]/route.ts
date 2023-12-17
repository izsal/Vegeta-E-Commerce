import Response from "@/lib/api.response";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, params: Params) {
  const id = params.params.id;
  return Response({
    message: `Get detail Users by ${id}`,
    data: [
      {
        id: 1,
        name: "izsal",
      },
    ],
  });
}
