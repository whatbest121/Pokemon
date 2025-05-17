import "./globals.css";
import { ApolloWrapper } from "./ApolloWrapper";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
