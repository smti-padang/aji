/* ============================================================
   KONFIGURASI PORTOFOLIO — edit di sini saja
   Ubah link sosial, identitas, dan path gambar di file ini.
   ============================================================ */

window.PORTFOLIO_CONFIG = {
  /* ---------- Identitas ---------- */
  identity: {
    name: "Alex Rivera",
    brand: "AlexRivera",
    role: "Automation Engineer",
    email: "hello@alexrivera.dev",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia · Remote-friendly",
  },

  /* ---------- LINK SOSIAL — isi di sini ----------
     Ganti URL berikut dengan profil pribadimu.
     Kosongkan ("") untuk menyembunyikan tombol terkait.
  */
  socials: {
    github:    "https://github.com/username",
    linkedin:  "https://www.linkedin.com/in/username",
    instagram: "https://www.instagram.com/username",
    tiktok:    "https://www.tiktok.com/@username",
    email:     "mailto:hello@alexrivera.dev",
  },

  /* ---------- Path foto profil ---------- */
  photos: {
    hero:  "images/profile/profile-hero.svg",   // foto besar di section Home (kanan)
    about: "images/profile/profile-about.svg",  // foto di section About (kanan)
  },

  /* ---------- Project covers (file di images/projects/) ---------- */
  projects: [
    {
      title: "Smart Bottling Line Retrofit",
      client: "Beverage Manufacturer",
      desc: "Migrasi logika relay lama ke Siemens S7-1500 + WinCC Unified HMI. OEE naik 22%.",
      tags: ["Siemens", "WinCC", "Profinet"],
      metric: "+22% OEE",
      image: "images/projects/smart-bottling.svg",
    },
    {
      title: "Vision-Guided Pick & Place",
      client: "Electronics Assembly",
      desc: "Cell UR10e dengan Cognex vision dan conveyor tracking, throughput 1.200 unit/jam.",
      tags: ["UR10e", "Cognex", "Python"],
      metric: "1.2k UPH",
      image: "images/projects/vision-pickplace.svg",
    },
    {
      title: "Plant-Wide SCADA Modernization",
      client: "Pharma · Multi-site",
      desc: "Rollout Ignition Perspective di 4 site dengan tag architecture terpadu & MES.",
      tags: ["Ignition", "OPC UA", "MES"],
      metric: "4 sites",
      image: "images/projects/scada-modernization.svg",
    },
    {
      title: "Predictive Maintenance Pipeline",
      client: "CNC Machining Shop",
      desc: "MQTT + InfluxDB + ML model di edge gateway, prediksi failure 48 jam lebih awal.",
      tags: ["MQTT", "InfluxDB", "Edge"],
      metric: "−38% downtime",
      image: "images/projects/predictive-maintenance.svg",
    },
    {
      title: "Robotic Palletizing Cell",
      client: "Logistics Warehouse",
      desc: "ABB IRB 660 dengan vision + ASRS handshake. Cycle time turun 28%.",
      tags: ["ABB", "Vision", "Profinet"],
      metric: "−28% CT",
      image: "images/projects/robotic-palletizing.svg",
    },
    {
      title: "Energy Monitoring Dashboard",
      client: "Manufacturing Plant",
      desc: "Power meter Modbus → Node-RED → Grafana real-time KPI energi per line.",
      tags: ["Modbus", "Node-RED", "Grafana"],
      metric: "−15% kWh",
      image: "images/projects/energy-monitoring.svg",
    },
  ],

  /* ---------- Sertifikat (file di images/certificates/) ---------- */
  certificates: [
    { name: "Siemens TIA Portal Advanced",     issuer: "Siemens",              year: "2024", image: "images/certificates/siemens-tia.svg" },
    { name: "Rockwell Studio 5000 Logix",      issuer: "Rockwell Automation",  year: "2023", image: "images/certificates/rockwell-studio5000.svg" },
    { name: "Ignition Gold Certified Integrator", issuer: "Inductive Automation", year: "2024", image: "images/certificates/ignition-gold.svg" },
    { name: "ABB Robot Programming Lvl 2",     issuer: "ABB",                  year: "2022", image: "images/certificates/abb-robot-l2.svg" },
    { name: "TÜV Functional Safety Engineer",  issuer: "TÜV Rheinland",        year: "2023", image: "images/certificates/tuv-fse.svg" },
    { name: "OPC UA Fundamentals",             issuer: "OPC Foundation",       year: "2024", image: "images/certificates/opcua-fundamentals.svg" },
    { name: "AWS Cloud Practitioner",          issuer: "Amazon Web Services",  year: "2023", image: "images/certificates/aws-ccp.svg" },
    { name: "ISA-95 Enterprise Integration",   issuer: "ISA",                  year: "2022", image: "images/certificates/isa-95.svg" },
    { name: "Universal Robots Core Track",     issuer: "Universal Robots",     year: "2023", image: "images/certificates/ur-core.svg" },
  ],

  /* ---------- Tech stack (logo lokal di images/tech/) ---------- */
  tech: [
    { name: "Siemens",      logo: "images/tech/siemens.svg" },
    { name: "Rockwell",     logo: "images/tech/rockwell.svg" },
    { name: "Schneider",    logo: "images/tech/schneider.svg" },
    { name: "ABB",          logo: "images/tech/abb.svg" },
    { name: "Python",       logo: "images/tech/python.svg" },
    { name: "JavaScript",   logo: "images/tech/javascript.svg" },
    { name: "Node-RED",     logo: "images/tech/nodered.svg" },
    { name: "MQTT",         logo: "images/tech/mqtt.svg" },
    { name: "Grafana",      logo: "images/tech/grafana.svg" },
    { name: "InfluxDB",     logo: "images/tech/influxdb.svg" },
    { name: "Docker",       logo: "images/tech/docker.svg" },
    { name: "Linux",        logo: "images/tech/linux.svg" },
    { name: "Git",          logo: "images/tech/git.svg" },
    { name: "GitHub",       logo: "images/tech/github.svg" },
    { name: "Raspberry Pi", logo: "images/tech/raspberrypi.svg" },
    { name: "Arduino",      logo: "images/tech/arduino.svg" },
    { name: "AWS",          logo: "images/tech/aws.svg" },
    { name: "Postgres",     logo: "images/tech/postgres.svg" },
  ],
};
