import Response from "@/lib/api.response";
import { NextResponse } from "next/server";

export async function GET() {
  return Response({
    message: "Get All Users!",
    data: [
      {
        id: 1,
        name: "izsal",
      },
      {
        id: 2,
        name: "qurlinas",
      },
    ],
    status: 200,
  });
}

export async function POST() {
  return Response({
    message: "Created new Users!",
    data: [
      {
        id: 3,
        name: "afandi",
      },
    ],
  });
}
