"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  FolderKanban,
  Gauge,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Settings2,
  Trophy,
  Users,
  X,
  Zap,
  Heart,
} from "lucide-react";
import { useState } from "react";
import {
  basePortfolio,
  profiles,
  type ProfileKey,
} from "@/data/portfolio";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "open-roles", label: "Open roles" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const projectIcons = [Database, Gauge, Users, FolderKanban];
const achievementIcons = [Award, Users, Gauge, Trophy, MessageCircle];

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: typeof Award;
  children: React.ReactNode;
}) {
  return (
    <h2 className="section-title">
      <span className="section-icon">
        <Icon size={19} strokeWidth={2.4} />
      </span>
      {children}
    </h2>
  );
}



export default function Portfolio() {
  const [profileKey, setProfileKey] = useState<ProfileKey>("lead");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const profile = profiles[profileKey];
  const currentYear = new Date().getFullYear();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.company.trim()) {
      newErrors.company = "Organization name is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (form.message.length < 20) {
      newErrors.message = "Please enter at least 20 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
  e:any
  )=>{

  e.preventDefault();

  if(!validateForm()){
    return;
  }

    setLoading(true);

    const res = await fetch(
        "/api/contact",
        {
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        },
        body:JSON.stringify(form),
        }
      );

    const data=await res.json();

    setLoading(false);

    if (data.success) {
    setIsSuccess(true);

    setStatus(
      "✅ Thank you! Your message has been sent successfully."
    );

    setForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });

  } else {

    setIsSuccess(false);

    setStatus(
      "❌ Something went wrong. Please try again."
    );

  }
};

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">{basePortfolio.initials}</span>
          <span>{basePortfolio.name}</span>
        </a>

        <nav className={isMenuOpen ? "nav-links nav-links-open" : "nav-links"}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="download-button"
            href={basePortfolio.resume}
            download="Unnati-Mandaliya-Resume.pdf"
          >
            Resume
            <Download size={16} />
          </a>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy" key={profileKey}>
          <div className="profile-switcher">
            <span>Explore My Expertise</span>
            <div className="profile-tabs" aria-label="Choose portfolio focus">
            {(Object.entries(profiles) as Array<[ProfileKey, (typeof profiles)[ProfileKey]]>).map(
              ([key, item]) => (
                <button
                  type="button"
                  aria-pressed={profileKey === key}
                  className={profileKey === key ? "profile-tab active" : "profile-tab"}
                  key={key}
                  onClick={() => setProfileKey(key)}
                >
                  {item.label}
                </button>
              ),
            )}
            </div>
          </div>

          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>{basePortfolio.name}</h1>
          <p className="role-line">
            <strong>{profile.headline}</strong>
            <span>{profile.roles.join(" | ")}</span>
          </p>

          <div className="quick-facts">
            <div>
              <Award />
              <span><strong>{basePortfolio.years} Years</strong>Experience</span>
            </div>
            <div>
              <Zap />
              <span><strong>{basePortfolio.availability}</strong>Available now</span>
            </div>
            <div>
              <MapPin />
              <span><strong>Open to work</strong>{basePortfolio.workPreference}</span>
            </div>
          </div>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="primary-button" href={`mailto:${basePortfolio.email}`}>
              <BriefcaseBusiness size={18} />
              Hire me
            </a>
            <a className="secondary-button" href="#contact">
              <Send size={18} />
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-halo" />
          <div className="dot-field" />
          <div className="portrait-frame">
            <Image
              src="/profile.jpeg"
              alt={`${basePortfolio.name}, ${profile.headline}`}
              fill
              priority
              sizes="(max-width: 800px) 78vw, 430px"
            />
          </div>
          <div className="availability-card">
            <span />
            Available for opportunities
          </div>
        </div>
      </section>

      <div className="content-grid">
        <section className="panel about-panel" id="about">
          <SectionTitle icon={Users}>About me</SectionTitle>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="text-button" href="#contact">
            Know more about me <ArrowRight size={16} />
          </a>
        </section>

        <section className="panel skills-panel" id="skills">
          <SectionTitle icon={Settings2}>Technical & growth skills</SectionTitle>
          <div className="skill-list">
            {basePortfolio.skills.map((group, index) => (
              <div className="skill-row" key={group.label}>
                <span className="skill-icon">
                  {index === 2 ? <Database size={18} /> : <Code2 size={18} />}
                </span>
                <strong>{group.label}</strong>
                <div>
                  {group.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel experience-panel" id="experience">
          <SectionTitle icon={BriefcaseBusiness}>Experience</SectionTitle>
          <div className="experience-stats">
            {basePortfolio.experienceSummary.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          {/* <div className="experience-content">
            <div>
              <h3>{profile.experienceTitle}</h3>
              <p>{basePortfolio.years} years of experience</p>
              <ul className="check-list">
                {profile.experiencePoints.map((point) => (
                  <li key={point}><Check size={14} />{point}</li>
                ))}
              </ul>
            </div>
            
          </div> */}
          <div className="experience-detail-grid">
              {basePortfolio.careerHighlights.map((group) => (
                <article className="experience-detail-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.points.map((point) => (
                      <li key={point}>
                        <Check size={13} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
        </section>

        <section className="panel projects-panel" id="projects">
          <SectionTitle icon={FolderKanban}>Featured projects</SectionTitle>
          <div className="project-summary">
            <div>
              <span>Selected delivery work</span>
              <p>
                A focused view of systems I have helped plan, build, lead, and
                release across finance, commerce, CRM, and team operations.
              </p>
            </div>
            <div className="project-summary-stats">
              {basePortfolio.projectSummary.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {basePortfolio.projects.map((project, index) => {
              const Icon = projectIcons[index % projectIcons.length];
              return (
                <article className="project-card" key={project.title}>
                  <div className="project-card-header">
                    <span className={`project-icon ${project.tone}`}><Icon /></span>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <div className="project-card-body">
                    <h3>{project.title}</h3>
                    <span className="project-role">{project.role}</span>
                    <p>{project.description}</p>
                    <p className="project-impact"><strong>Contribution:</strong> {project.impact}</p>
                    <ul className="project-responsibilities">
                      {project.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          <Check size={13} />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <div className="project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    {(project.liveUrl || project.repositoryUrl) && (
                      <div className="project-links">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} /> Live project
                          </a>
                        )}
                        {project.repositoryUrl && (
                          <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                            <GitBranch size={14} /> Source
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="panel achievements-panel" id="achievements">
          <SectionTitle icon={Trophy}>Achievements</SectionTitle>
          <div className="achievement-grid">
            {basePortfolio.achievements.map((item, index) => {
              const Icon = achievementIcons[index];
              return (
                <article key={item.label}>
                  <Icon />
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="panel hire-panel">
          <SectionTitle icon={Users}>Why hire me?</SectionTitle>
          <div className="hire-grid">
            {[...profile.priorities, "Immediate joiner", "Client-facing experience"].map(
              (item) => <span key={item}><Check size={14} />{item}</span>,
            )}
          </div>
        </section>

        <section className="panel open-roles-panel" id="open-roles">
          <SectionTitle icon={BriefcaseBusiness}>Open to roles</SectionTitle>
          <p>
            I am open to roles that combine my PHP/Laravel, leadership, client
            communication, delivery, and growing data analytics skills.
          </p>
          <div className="open-role-grid">
            {basePortfolio.openRoles.map((role) => (
              <span key={role}><Check size={14} />{role}</span>
            ))}
          </div>
          <div className="learning-strip">
            {basePortfolio.learningFocus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="panel certifications-panel" id="certifications">
          <SectionTitle icon={BadgeCheck}>Certifications</SectionTitle>
          <div className="certification-grid">
            {basePortfolio.certifications.map((certificate) => (
              <article className="certification-card" key={certificate.title}>
                <span className="certificate-icon"><BadgeCheck /></span>
                <div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer} · {certificate.year}</p>
                  {certificate.credentialUrl && (
                    <a
                      className="certificate-link"
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View credential <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer id="contact" className="contact-footer">

      <div className="contact-left">

      <h2>Let's Connect</h2>

      <p>
      I'm actively looking for the right opportunity.
      Let's discuss how I can contribute to your team.
      </p>

      <div className="contact-list">

      <a href={`mailto:${basePortfolio.email}`}>

      <Mail size={18}/>

      {basePortfolio.email}

      </a>

      <a href={`tel:${basePortfolio.phone.replaceAll(" ","")}`}>

      <Phone size={18}/>

      {basePortfolio.phone}

      </a>

      <a
      href={`https://wa.me/${basePortfolio.whatsapp}`}
      target="_blank"
      >

      <MessageCircle size={18}/>

      WhatsApp

      </a>

      <span>

      <MapPin size={18}/>

      {basePortfolio.location}

      </span>

      <a
      href={`https://${basePortfolio.linkedin}`}
      target="_blank"
      >

      <Link2 size={18}/>

      LinkedIn

      </a>

      </div>

      </div>

      <div className="contact-right">

      <h3>
        Send a Message
      </h3>
       {status && (
        <div
          className={
            isSuccess
            ? "form-success"
            : "form-error"
          }
        >
          {status}
        </div>

      )}     
      <form onSubmit={handleSubmit} className="contact-form">
           
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
          {errors.name && (
          <p className="error">
            {errors.name}
          </p>
        )}  
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
          {errors.email && (
          <p className="error">
            {errors.email}
          </p>
        )}
        <input
          type="text"
          placeholder="Organization Name"
          value={form.company}
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
        />
         {errors.company && (
          <p className="error">
            {errors.company}
          </p>
        )}

        <textarea
          rows={4}
          placeholder={`Tell me about your opportunity or project...`}
          value={form.message}
          maxLength={1000}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />
        {errors.message && (
          <p className="error">
            {errors.message}
          </p>
        )}

        <button
          type="submit"
          className="send-btn"
          disabled={loading}
        >
          <Send size={18} />

          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
      </div>
        <div className="portfolio-footer">
          <p>
          Designed & Developed by
          <strong> Unnati Mandaliya</strong>
          </p>
          <p>
          Built with Next.js • TypeScript • Tailwind CSS
          </p>
          <p>
          © {currentYear} All Rights Reserved.
          </p>
          </div>
      </footer>
    </main>
  );
}
