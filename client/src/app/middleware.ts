import { redirect } from "next/dist/server/api-utils";

export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/dashboard"],
    redirect: true
}

