import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/store/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <ReduxProvider>
        <Header />
          <div className="bg-[#f1f1f1] min-h-screen flex flex-col">

            <div className="max-w-7xl px-6 w-full flex-grow">


              {children}

            </div>

            <Footer />

          </div>

        </ReduxProvider>

      </body>
    </html>
  );
}