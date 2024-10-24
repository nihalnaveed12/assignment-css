"use client";

import Button from "./Button";
import Link from "next/link";
import { useState } from "react";



export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    {
      name: "Customer",
      href: "/",
    },
    {
      name: "Brokers",
      href: "/",
      dropdown: [
        {
          name: "middle for brokers",
          href: "/broker/option1",
        },
        {
          name: "Success Stories",
          href: "/broker/option2",
        },
      ],
    },
    {
      name: "Lenders",
      href: "/lenders",
    },
  ];

  return (
    <header className="header">
  <nav className="nav">
    <div className="flex-container">
      <div className="title-container">
        <h1 className="title">Middle</h1>
      </div>

      <div className="nav-links">
        {navItems.map((nav) => (
          <div
            key={nav.name}
            className="nav-item"
            onMouseEnter={() => nav.dropdown && setShowDropdown(true)}
            onMouseLeave={() => nav.dropdown && setShowDropdown(false)}
          >
            <Link href={nav.href} className="link1">
              <p className="link">{nav.name}</p>
            </Link>

            {/* Dropdown */}
            {nav.dropdown && showDropdown && (
              <div className="dropdown">
                {nav.dropdown.map((item) => (
                  <Link key={item.name} href={item.href} className="link1">
                    <p className="dropdown-item">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="contact-login">
      <Link href="/contact" className="link1">
        <p className="contact link">Contact</p>
      </Link>
      <Link href="/login">
        <p className="login-button">
          <Button className="login-btn" text="Login"/>
        </p>
      </Link>
    </div>
  </nav>
</header>
  );
}
