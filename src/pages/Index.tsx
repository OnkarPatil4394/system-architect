import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExcellenceSection from "@/components/ExcellenceSection";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const electricalData = {
  id: "electrical",
  titleKey: "sectionElectrical",
  descriptionKey: "electricalDesc",
  skills: [
    "Circuit Design & Analysis",
    "Power Electronics",
    "Motor Control",
    "MATLAB / Simulink",
    "LTspice Simulation",
    "PCB Basics (KiCad)",
    "Electrical Machines",
    "Control Systems",
  ],
  projects: [],
  certifications: [
    {
      title: "MATLAB Onramp",
      org: "MathWorks",
      period: "Nov 2024",
      detail: "Official MathWorks certification covering MATLAB fundamentals for engineering computation and data analysis.",
    },
  ],
  courses: [
    {
      title: "Java DevOps and Programming",
      org: "SkillAcademy (Testbook)",
      period: "2023",
      detail: "Bootcamp covering Java fundamentals, DevOps workflows, and programming best practices.",
    },
  ],
};

const electronicsData = {
  id: "electronics",
  titleKey: "sectionElectronics",
  descriptionKey: "electronicsDesc",
  skills: [
    "Embedded C / Arduino",
    "ESP32 / Arduino UNO",
    "RFID & PIR Sensors",
    "Serial Protocols (I2C, SPI, UART)",
    "FreeRTOS Basics",
    "Digital Electronics",
    "ESP RainMaker (IoT Cloud)",
    "Python",
    "Google Cloud (Gemini & Imagen)",
    "Git & GitHub",
  ],
  projects: [
    {
      title: "1BHK Smart Home Automation System",
      problem: "Traditional home appliance control lacks remote access, automation, and energy efficiency — especially in affordable setups for students and small apartments.",
      approach: "Designed a 3-block system: (1) Hall Automation with ESP32 + 4-Channel Relay for Wi-Fi & cloud-based light/fan control, (2) Smart RFID Door Lock using Arduino UNO + Servo for authorized-only access, (3) Parking & Washroom Automation with PIR sensors for motion-based lighting. Integrated ESP RainMaker for mobile app control and Google Home voice assistant support.",
      technologies: ["ESP32", "Arduino UNO", "RFID", "PIR Sensor", "Relay Module", "ESP RainMaker", "Google Home", "Embedded C"],
      outcome: "Delivered a fully functional, affordable smart home prototype supporting automatic + manual control, cloud connectivity, voice commands, and RFID security.",
      link: "https://github.com/onkarpatil-ee",
    },
  ],
  certifications: [
    {
      title: "Embedded System Design",
      org: "SkillDzire",
      period: "Aug 2025",
      detail: "Certified course covering ARM architecture, microcontroller programming, and hardware-software integration. Credential ID: SD-100177.",
    },
    {
      title: "Google Cloud Gemini & Imagen Skill Badge",
      org: "Google Cloud",
      period: "2024",
      detail: "Earned skill badge for building real-world AI applications with Gemini and Imagen on Google Cloud platform.",
    },
  ],
  courses: [],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="divider section-container" />
      <About />
      <div className="divider section-container" />
      <ExcellenceSection {...electricalData} />
      <div className="divider section-container" />
      <ExcellenceSection {...electronicsData} />
      <div className="divider section-container" />
      <Experience />
      <div className="divider section-container" />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
