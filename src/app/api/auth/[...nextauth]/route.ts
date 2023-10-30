import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "secret",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string,
          password: string
        }
        const user: any = {
          id: "1",
          name: "Guriel",
          email: "gurielamp@gmail.com",
          role: "admin",
        }
        if (email === "gurielamp@gmail.com" && password === "12345") {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email
        token.fullname = user.fullname
        token.role = user.role
      }
      return token
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname
      }
      if ("role" in token) {
        session.user.role = token.role
      }
      return session
    }
  }
}