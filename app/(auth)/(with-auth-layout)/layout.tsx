export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Inner Layouts for login and register</h1>
      {children}
    </>
  );
}
