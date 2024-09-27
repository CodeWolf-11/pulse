import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";


export interface CustomSession {
    user?: CustomUser;
    expires: ISODateString
}

export interface CustomUser {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    token?: string | null;
    provider?: string | null;
}

export const authOptions: AuthOptions = {
    pages: {
        signIn: "/"
    },
    secret: process.env.NEXTAUTH_SECRET!,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code",
                }
            }
        })
    ],
    callbacks: {

        async signIn({ user, account }) {
            console.log("user is ", user);
            console.log("account details is ", account);
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, user, token }: { session: CustomSession, user: CustomUser, token: JWT }) {
            session.user = token.user as CustomUser;
            return session;
        },


    }
};
