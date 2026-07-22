"use client";

import { useState } from "react";
import HeroCharacter from "@/components/HeroCharacter";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";


const basePath = process.env.NODE_ENV === "production" ? "/My-Portofolio" : "";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [skills, setSkills] = useState([
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "HTML/CSS", icon: SiHtml5, color: "#e34f26" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Git", icon: SiGit, color: "#f05032" },
  ]);

  const [fallenSkills, setFallenSkills] = useState<Set<number>>(new Set());
  const [risingSkills, setRisingSkills] = useState<Set<number>>(new Set());

  const handleSkillClick = (index: number) => {
    if (fallenSkills.has(index)) {
      setRisingSkills(prev => new Set(prev).add(index));
      setTimeout(() => {
        setRisingSkills(prev => {
          const next = new Set(prev);
          next.delete(index);
          return next;
        });
        setFallenSkills(prev => {
          const next = new Set(prev);
          next.delete(index);
          return next;
        });
      }, 500);
    } else {
      setFallenSkills(prev => new Set(prev).add(index));
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo" onClick={() => scrollTo("hero")}>
            Portofolio
          </h2>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li>
              <button onClick={() => scrollTo("hero")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollTo("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollTo("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollTo("projects")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollTo("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-title-top">
            <h1>Halo, Saya <span className="highlight">Muhammad Ma'rufil Kurhi</span></h1>
          </div>
          <div className="hero-middle">
            <div className="hero-bg-text right">profesional untuk bisnis Anda</div>
            <HeroCharacter />
            <div className="hero-bg-text left">Membangun solusi digital</div>
          </div>
          <div className="hero-buttons-bottom">
            <button className="btn primary" onClick={() => scrollTo("projects")}>
              Lihat Project
            </button>
            <button className="btn secondary" onClick={() => scrollTo("contact")}>
              Hubungi Saya
            </button>
            <a href="https://www.linkedin.com/in/moeh-maruf-140589377" target="_blank" rel="noopener noreferrer" className="btn social">
              in
            </a>
            <a href="https://github.com/rufi1126" target="_blank" rel="noopener noreferrer" className="btn social">
              GH
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={`${basePath}/images/Foto-Saya.jpeg`} alt="Muhammad Ma'rufil Kurhi" />
            </div>
            <div className="about-text">
              <p>
                Saya Mahasiswa Teknik Informatika dengan minat di bidang Web Development dan Cyber Security. Memiliki pengalaman dalam administrasi perkantoran serta pengembangan dan analisis sistem berbasis teknologi.
              </p>
              <p>
                Terbiasa menggunakan tools seperti Nmap dan Nikto untuk analisis keamanan dasar, serta memiliki kemampuan problem solving dan komunikasi yang baik.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Tahun Pengalaman</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Project Selesai</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Klien Puas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className={`skill-card ${fallenSkills.has(i) ? "fallen" : ""} ${risingSkills.has(i) ? "rising" : ""}`} onClick={() => handleSkillClick(i)}>
                  <span className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: "Sekolah Python: Pelajari, Praktikkan, Kuasai",
                desc: "Platform belajar pemrograman Python modern dengan kurikulum terstruktur, modul interaktif, dan kuis uji pemahaman.",
                image: `${basePath}/images/Sekolah-Python.png`,
                details: [
                  "Kurikulum Berjenjang: Belajar mulai dari fondasi bahasa, struktur data, hingga implementasi tingkat lanjut yang relevan dengan industri.",
                  "Pembelajaran Berbasis Praktik: Fokus pada studi kasus dan pengerjaan proyek nyata agar setiap konsep dapat langsung diimplementasikan.",
                  "Modul Interaktif: Materi disajikan dalam format yang dinamis untuk memudahkan pemahaman konsep-konsep teknis yang kompleks.",
                  "Evaluasi Uji Pemahaman: Fitur kuis dan tantangan koding otomatis untuk memvalidasi kemajuan belajar Anda secara real-time.",
                  "Dirancang untuk Pemula: Penjelasan materi disusun dengan bahasa yang lugas dan mudah dipahami, tanpa jargon yang membingungkan.",
                  "Siap Karier: Membantu Anda membangun portofolio pemrograman Python yang kuat untuk menunjang karier di bidang teknologi."
                ],
              },
              {
                title: "Projecct 2 : Integrasi Dual-Engine Scanner Asinkron: Peningkatan Keamanan Web Menggunakan Nikto dan Nuclei pada Bot Telegram",
                desc: "Sistem ini merupakan alat pemindaian keamanan web otomatis berbasis bot Telegram yang mengintegrasikan dual-engine scanner (Nikto dan Nuclei). Dengan arsitektur asinkron, sistem mampu melakukan pemindaian celah keamanan secara efisien, meminimalkan risiko pemblokiran firewall, dan menyajikan laporan real-time kepada pengguna.  ",
                image: `${basePath}/images/Bot-Telegram.png`,
                details: [
                  "Integrasi Engine: Menggabungkan Nikto v2.6.0 untuk pemindaian header dan SSL, serta Nuclei v3.10.0 untuk mendeteksi kerentanan aplikasi web modern secara sekuensial.",
                  "Arsitektur Asinkron: Menggunakan pustaka asyncio pada backend Python untuk menjaga bot tetap responsif dalam melayani banyak pengguna saat proses pemindaian berat berlangsung.",
                  "Remote Execution: Pemisahan tugas antara backend di lingkungan lokal (VS Code) dengan unit eksekusi di server virtual Ubuntu (Multipass), yang dikontrol melalui subproses terminal lokal.",
                  "Output Real-Time: Sistem mendukung streaming log hasil pemindaian langsung ke ruang obrolan Telegram dan menyertakan referensi edukatif dari MDN Web Docs untuk panduan mitigasi celah keamanan.",
                  "Ketahanan: Arsitektur ini terbukti lebih tangguh dalam menghindari deteksi otomatis oleh sistem keamanan modern seperti firewall dibandingkan penggunaan pemindai tunggal.",
                ],
              },
              {
                title: "Project 3 : Testing Dashboard Monitoring Interior",
                desc: "Mengembangkan halaman dashboard interaktif untuk monitoring jasa pemasangan interior.",
                image: `${basePath}/images/dashboard-interior.png`,
                details: [
                  "Melakukan analisa source code dan database website yang sudah ada.",
                  "Mengembangkan halaman dashboard interaktif yang terintegrasi dengan website existing.",
                  "Membuat dashboard khusus untuk monitoring jasa pemasangan interior.",
                  "Menambahkan fitur input laporan pekerjaan yang dapat diisi langsung melalui dashboard.",
                  "Menambahkan fitur import/sinkronisasi data dari Microsoft Excel ke dashboard.",
                  "Memastikan data dari dashboard maupun Excel dapat tersimpan pada database yang sama.",
                  "Menampilkan data laporan pekerjaan secara real-time setiap terjadi perubahan data.",
                  "Menampilkan informasi pekerjaan dalam bentuk tabel, statistik, dan grafik interaktif.",
                  "Mengintegrasikan seluruh fitur dashboard dengan sistem yang sudah ada.",
                  "Melakukan testing untuk memastikan seluruh fitur dashboard berjalan dengan baik."
                ],
              },
            ].map((project, i) => (
              <div
                key={i}
                className={`project-card ${expandedIndex === i ? "expanded" : ""}`}
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="placeholder">Project</div>
                  )}
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  {project.details.length > 0 && (
                    <button
                      className="btn small"
                      onClick={() =>
                        setExpandedIndex(expandedIndex === i ? null : i)
                      }
                    >
                      {expandedIndex === i ? "Tutup Detail" : "Lihat Detail"}
                    </button>
                  )}
                  {expandedIndex === i && project.details.length > 0 && (
                    <div className="project-details">
                      <ul>
                        {project.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Hubungi Saya</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const nama = (form.elements.namedItem("nama") as HTMLInputElement).value;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const pesan = (form.elements.namedItem("pesan") as HTMLTextAreaElement).value;
            const waText = `Halo, saya ${nama}%0AEmail: ${email}%0A%0A${pesan}`;
            window.open(`https://wa.me/6281398632129?text=${waText}`, "_blank");
          }}>
            <input type="text" name="nama" placeholder="Nama" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="pesan" placeholder="Pesan" rows={5} required />
            <button type="submit" className="btn primary">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Portofolio. All rights reserved.</p>
      </footer>
    </>
  );
}
