import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>HermesGroup | Automation for Small Business</title>
          <link rel="icon" type="image/x-icon" href="https://i.ibb.co/wMBW7QR/android-chrome-512x512.png"/>

        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <meta
        name="description"
        content="AI Software Solutions for Small Businesses."
        title="Hermes Group"
      />
      <meta name="robots" content="noindex" />
        <meta property="og:title" content="Hermes Group" />
        <meta property="og:description" content="Software and technology consulting focusing on artificial intelligence and next gen development for small businesses." />
        <meta property="og:image" content="https://i.ibb.co/FJsVKbH/black-hermes-full.png" />
        <meta property="og:url" content="https://www.hermesgroup.dev" />
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
