import { Account, AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import axios from "axios";
import { LOGIN_URL } from "@/lib/apiEndpoints";

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
        })
    ],
    callbacks: {

        async signIn({ user, account }: { user: CustomUser, account: Account | null }) {
            try {

                const payload = {
                    email: user.email,
                    name: user.name,
                    oauth_id: account?.providerAccountId,
                    provider: account?.provider,
                    image: user?.image
                }

                const response: any = await axios.post(LOGIN_URL, payload);

                user.id = response.data?.user?.id?.toString();
                user.token = response.data?.user?.token
                user.provider = response.data?.user?.provider


                return true;

            } catch (error) {
                console.log(error)
                return false;
            }
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
