'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [Links, setLinks] = useState([
    ['/', 'خانه'],
    ['/about', 'درباره ما'],
    ['/portfolio', 'نمونه‌کارها'],
    ['/contact', 'تماس']
  ]);
  const pathname = usePathname();
  const [show, setShow] = useState(false);


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          UP<span style={{ color: 'var(--accent)' }}>Saze</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {Links.map(([href, label]) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? 'active' : ''}`}
                  onClick={() => setShow(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
