import styles from "./page.module.css";

const sections = [
  {
    title: "Product",
    description: "Platform overview, feature specs, and roadmap documentation.",
    href: "#",
  },
  {
    title: "Engineering",
    description: "Architecture decisions, API reference, and development guides.",
    href: "#",
  },
  {
    title: "Company",
    description: "Strategy, positioning, personas, and internal processes.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Arcto Internal Docs</h1>
        <p>
          The career growth platform for developers, not HR. This is the
          internal knowledge base for the Arcto team.
        </p>

        <ol>
          {sections.map((section) => (
            <li key={section.title}>
              <strong>{section.title}</strong> — {section.description}
            </li>
          ))}
        </ol>

        <div className={styles.ctas}>
          <a className={styles.primary} href="mailto:hello@arcto.io">
            Contact the team
          </a>
          <a href="/about" className={styles.secondary}>
            About Arcto →
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>Arcto · Internal use only</span>
      </footer>
    </div>
  );
}
