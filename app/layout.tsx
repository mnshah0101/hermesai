import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Hermes Group</title>
          <link rel="icon" type="image/x-icon" href="logos/white_hermes_.png"/>

        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
