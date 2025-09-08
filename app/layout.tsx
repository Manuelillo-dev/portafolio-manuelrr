import "@/styles/globals.css";
import TopBar from "@/components/TopBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        <TopBar />
        <main className="pb-16">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Manuel Ramírez
        </footer>
      </body>
    </html>
  );
}
