import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOptions = NextAuth({
    providers: [
        GithubProvider({
            clientId: "wehhjfkwljfw",
            clientSecret: "uiyrioyiqw",
        })
    ]
});


export { authOptions as GET, authOptions as POST }