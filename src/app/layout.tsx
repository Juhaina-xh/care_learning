import type { Metadata } from "next";
import "./globals.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/auth.css";
import { AuthProvider } from "./context/AuthContext";
import ClientShell from "./ClientShell";

export const metadata: Metadata = {
  title: "Care Learning",
  description: "Care Learning Course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage:
            "url('/images/profileCompletion/MainBackground.png')",
        }}
      >
        <AuthProvider>
          <ClientShell>{children}</ClientShell>
        </AuthProvider>
      </body>
    </html>
  );
}
