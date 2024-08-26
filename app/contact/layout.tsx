export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="zh">
        <head>
        </head>
        <body>
        {children}
      </body>
      </html>
    )
  }