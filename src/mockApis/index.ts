import { HttpResponse, http } from "msw";
export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(
      {
        users: [
          {
            name: "test user 1",
          },
        ],
      },
      { status: 200 }
    );
  }),
];
