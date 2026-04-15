import { useState } from "react";
import { content } from "./data/content";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaWordpress } from "react-icons/fa";
import { SiLaravel, SiMysql } from "react-icons/si";

function App() {
  const [language, setLanguage] = useState("ru");
  const text = content[language];

  const skillIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJs />,
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    PHP: <FaPhp />,
    Laravel: <SiLaravel />,
    MySQL: <SiMysql />,
    WordPress: <FaWordpress />,
  };

  return (
    <div>
      <header style={styles.header}>
        <h2>{text.hero.name}</h2>

        <div style={styles.languageSwitcher}>
          <button
            style={language === "ru" ? styles.activeButton : styles.langButton}
            onClick={() => setLanguage("ru")}
          >
            RU
          </button>
          <button
            style={language === "en" ? styles.activeButton : styles.langButton}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main>
        <section style={styles.heroSection}>
          <h1 style={styles.heroTitle}>{text.hero.role}</h1>
          <p style={styles.heroText}>{text.hero.text}</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{text.about.title}</h2>

          <div style={styles.aboutBox}>
            <p style={styles.aboutText}>{text.about.text1}</p>
            <p style={styles.aboutText}>{text.about.text2}</p>
            <p style={styles.aboutText}>{text.about.text3}</p>
            <p style={styles.aboutText}>{text.about.text4}</p>
            <p style={styles.aboutText}>{text.about.text5}</p>
            <p style={styles.aboutText}>{text.about.text6}</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{text.skills.title}</h2>

          <div style={styles.skillsBox}>
            <div style={styles.skillsColumn}>
              <h3 style={styles.skillsSubtitle}>Frontend</h3>
              {text.skills.frontend.map((item) => (
                <div key={item} style={styles.skillItem}>
                  <span style={styles.skillIcon}>{skillIcons[item] || "•"}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={styles.skillsColumn}>
              <h3 style={styles.skillsSubtitle}>Backend</h3>
              {text.skills.backend.map((item) => (
                <div key={item} style={styles.skillItem}>
                  <span style={styles.skillIcon}>{skillIcons[item] || "•"}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={styles.skillsColumn}>
              <h3 style={styles.skillsSubtitle}>Tools</h3>
              {text.skills.tools.map((item) => (
                <div key={item} style={styles.skillItem}>
                  <span style={styles.skillIcon}>{skillIcons[item] || "•"}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={styles.skillsColumn}>
              <h3 style={styles.skillsSubtitle}>Other</h3>
              {text.skills.other.map((item) => (
                <div key={item} style={styles.skillItem}>
                  <span style={styles.skillIcon}>{skillIcons[item] || "•"}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{text.education.title}</h2>

          <div style={styles.educationList}>
            {text.education.items.map((item, index) => (
              <div key={index} style={styles.educationCard}>

                <p style={styles.educationPeriod}>{item.period}</p>
                <h3 style={styles.educationPlace}>{item.place}</h3>
                <p style={styles.educationDescription}>{item.description}</p>

                {item.diploma && (
                  <a
                    href={item.diploma}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.diplomaLink}
                  >
                    📄 Диплом
                  </a>
                )}

              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{text.experience.title}</h2>

          <div style={styles.experienceList}>
            {text.experience.items.map((item, index) => (
              <div key={index} style={styles.experienceCard}>
                <h3 style={styles.experiencePlace}>{item.place}</h3>
                <p style={styles.experienceDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{text.projects.title}</h2>

          <div style={styles.projectsBox}>
            <p style={styles.projectsText}>{text.projects.description}</p>

            <a
              href={text.projects.github}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1e3a8a")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#131936")}
            >
              GitHub →
            </a>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{text.contacts.title}</h2>

          <div style={styles.contactsList}>
            {text.contacts.items.map((item, index) => (
              <div key={index} style={styles.contactCard}>
                <h3 style={styles.contactLabel}>{item.label}</h3>
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactLink}
                  onMouseOver={(e) => {
                    e.target.style.color = "#1e40af";
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#2563eb";
                    e.target.style.textDecoration = "none";
                  }}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },

  languageSwitcher: {
    display: "flex",
    gap: "10px",
  },

  langButton: {
    padding: "8px 14px",
    border: "1px solid #131936",
    backgroundColor: "white",
    color: "#131936",
    cursor: "pointer",
    borderRadius: "6px",
    fontWeight: "600",
  },

  activeButton: {
    padding: "8px 14px",
    border: "1px solid #131936",
    backgroundColor: "#131936",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px",
    fontWeight: "600",
  },

  heroSection: {
    padding: "80px 40px 40px",
  },

  heroTitle: {
    fontSize: "56px",
    marginBottom: "20px",
    color: "#0B1020",
    maxWidth: "900px",
  },

  heroText: {
    fontSize: "22px",
    lineHeight: "1.6",
    color: "#334155",
    maxWidth: "800px",
  },

  section: {
    padding: "40px",
  },

  sectionTitle: {
    fontSize: "40px",
    marginBottom: "24px",
    color: "#0B1020",
  },

  aboutBox: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "28px",
    maxWidth: "950px",
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
  },

  // Обо мне 
  aboutText: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#334155",
    marginBottom: "16px",
  },

  // Навыки 
  skillsBox: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },

  skillsColumn: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
  },

  skillsSubtitle: {
    fontSize: "28px",
    marginBottom: "18px",
    color: "#0B1020",
  },

  skillItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
    fontSize: "18px",
    color: "#334155",
  },

  skillIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    color: "#131936",
    minWidth: "24px",
  },

  // Образование 
  educationList: {
    display: "grid",
    gap: "20px",
  },

  educationCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
  },

  educationPeriod: {
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "10px",
  },

  educationPlace: {
    fontSize: "24px",
    color: "#0B1020",
    marginBottom: "10px",
  },

  educationDescription: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#334155",
  },

  experienceList: {
    display: "grid",
    gap: "20px",
  },

  experienceCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
  },

  experiencePlace: {
    fontSize: "22px",
    color: "#0B1020",
    marginBottom: "10px",
  },

  experienceDescription: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#334155",
  },

  contactsList: {
    display: "grid",
    gap: "20px",
  },

  contactCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
  },

  contactLabel: {
    fontSize: "22px",
    color: "#0B1020",
    marginBottom: "10px",
  },

  contactValue: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#334155",
  },

  contactLink: {
    fontSize: "18px",
    color: "#2563eb", // красивый синий
    textDecoration: "none",
    wordBreak: "break-all",
    transition: "0.2s",
  },

  projectsBox: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "32px",
    maxWidth: "700px",
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
  },

  projectsText: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#334155",
    marginBottom: "20px",
  },

  githubButton: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#131936",
    color: "#ffffff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.2s",
  },

  diplomaLink: {
    display: "inline-block",
    marginTop: "10px",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default App;