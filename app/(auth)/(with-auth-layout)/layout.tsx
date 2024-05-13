'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <h1>Inner Layouts for login and register</h1>
      {children}
      <div>
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = pathname.startsWith(link.href);
                console.log(isActive);
                  return (
                    <li key={index}>
                      <Link href={link.href}>
                        <p
                          className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            isActive ? "bg-gray-100 dark:bg-gray-700" : ""
                          }`}
                        >
                          {/* You can add SVG icons here if needed */}
                          <span className="ml-3">{link.name}</span>
                        </p>
                      </Link>
                    </li>
                  );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
