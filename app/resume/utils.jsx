import { complex, motion } from "framer-motion";
import { FaReact, FaPython, FaJava, FaAndroid } from "react-icons/fa";
import { SiFlutter, SiDart, SiKotlin, SiNextdotjs, SiFirebase, SiAmazonwebservices, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiFastapi, SiCplusplus, SiDjango, SiTailwindcss } from "react-icons/si";

const ResumeCard = ({ children }) => {
  return (
    <motion.div
      className="border rounded-md p-4 shadow-sm 
        hover:shadow-lg hover:-translate-y-1 hover:translate-x-1
        transition-all duration-300 ease-out
        active:-translate-y-1 active:translate-x-1"
      whileHover={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </motion.div>
  )
}

const ResumeGrid = ({ children }) => {
  return (<div className="w-full p-4 grid gap-6 lg:grid-cols-2">{children}</div>);
}


const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center text-[var(--color-accent)] 
      hover:text-[var(--color-text)] active:text-[var(--color-text)] 
      transition-all duration-300 cursor-pointer group
      active:scale-110 tap-highlight-transparent">
      <div className="text-5xl mb-2 group-hover:scale-110 group-active:scale-125 
        transition-transform">
        {icon}
      </div>
      <span className="text-sm text-center font-semibold 
        group-active:font-bold group-active:text-[var(--color-text)]">
        {label}
      </span>
    </div>
  );
};

const subPages = [
  {
  name: "Experience",
  component:
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-extrabold mb-2">
        <span className='text-[var(--color-accent)]'>E</span>xperience
      </h1>
      <ResumeGrid>

        {/* Deloitte Capstone */}
        <ResumeCard>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-xl">Capstone Project – Predictive Maintenance</h3>
            <span className="text-sm text-muted-foreground pl-2 text-right">Mar–Jul 2025</span>
          </div>
          <h4 className="text-[var(--color-accent)] font-medium mb-3">Deloitte</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            
            <li>Developed a deep learning–based predictive maintenance system for cantilever beam–based machines using accelerometer vibration data.</li>
            <li>Performed FFT-based frequency analysis and applied Bernoulli–Euler theory to detect cracks and stiffness variations.</li>
            <li>Trained a 1D CNN model achieving ~88% fault detection accuracy, validated through MATLAB simulations.</li>
          </ul>

        </ResumeCard>

        {/* MTTN Web Developer */}
        <ResumeCard>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-xl">Web Developer</h3>
            <span className="text-sm text-muted-foreground pl-2 text-right">Sep 2024 – Apr 2025</span>
          </div>
          <h4 className="text-[var(--color-accent)] font-medium mb-3">Manipal The Talk Network (MTTN)</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Engineered a scalable web platform and admin panel for MTTN, a student-led media organization with thousands of daily readers.</li>
            <li>Developed secure Express.js backend with cookie-based and role-based authentication.</li>
            <li>Designed and implemented full admin functionalities for managing articles, videos, and art&Graphics.</li>
            <li>
              <a
                href="https://www.manipalthetalk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]">
                Visit Website
              </a>
            </li>
          </ul>
        </ResumeCard>

      </ResumeGrid>
    </div>
  },

  {
    name: "Education",
    component:
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold mb-2">
          <span className='text-[var(--color-accent)]'>E</span>ducation
        </h1>
        <ResumeGrid>
          {/* Education Card 1 */}
          <ResumeCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">MIT Manipal</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">2022-2026</span>
            </div>
            <h5 className="mb-2">Manipal, Karnataka, India</h5>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">BTech. Computer Science Engg.</h4>
            <h5 className="text-sm text-muted-foreground mb-2">CGPA: <strong>8.02/10</strong></h5>
          </ResumeCard>

          {/* Education Card 2 */}
          <ResumeCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">National Victor Public School</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">2022</span>
            </div>
            <h5 className="mb-2">Patparganj, Delhi, India</h5>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">CBSE</h4>
            <h5 className="text-sm text-muted-foreground mb-2">Percentage: <strong>93.2%</strong></h5>
          </ResumeCard>
        </ResumeGrid>

        <h1 className="text-3xl font-extrabold mb-2 mt-4">
          <span className='text-[var(--color-accent)]'>
            C</span>ertificates
          </h1>
        <ResumeGrid>
          <ResumeCard>
            <h3 className="font-bold text-xl mb-4">Python for Data Science, AI & Development</h3>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">IBM, Coursera</h4>
            <p className="text-sm text-muted-foreground mb-4">May 2025</p>
            <a
              className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]"
              href="https://www.coursera.org/account/accomplishments/verify/496JP74EIPLP"
              target="_blank"
              rel="noopener noreferrer">
              View Certificate
            </a>
          </ResumeCard>
        </ResumeGrid>
      </div>
  },
  {
  name: "Skills",
  component: (
    <section className="pt-2 pb-4">
      <div className="@container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className='text-[var(--color-accent)]'>T</span>echnical Skills
        </h1>

        {/* Languages */}
        <h2 className="text-xl font-semibold mb-6 text-center">Languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillIcon icon={<FaPython />} label="Python" />
          <SkillIcon icon={<SiJavascript />} label="JavaScript (ES6+)" />
          <SkillIcon icon={<FaJava />} label="Java" />
          <SkillIcon icon={<SiCplusplus />} label="C" />
        </div>

        {/* Frameworks & Libraries */}
        <h2 className="text-xl font-semibold mb-6 text-center">Frameworks & Libraries</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillIcon icon={<SiExpress />} label="Express.js" />
          <SkillIcon icon={<FaReact />} label="React.js" />
          <SkillIcon icon={<SiNextdotjs />} label="Next.js" />
          <SkillIcon icon={<SiFastapi />} label="Flask" />
          <SkillIcon icon={<SiTailwindcss />} label="Tailwind CSS" />
        </div>

        {/* AI & Machine Learning */}
        <h2 className="text-xl font-semibold mb-6 text-center">AI & Machine Learning</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillIcon icon={<FaPython />} label="Deep Learning" />
          <SkillIcon icon={<SiJavascript />} label="AI Integration" />
          <SkillIcon icon={<SiExpress />} label="Web Scraping" />
        </div>

        {/* Cloud & DevOps */}
        <h2 className="text-xl font-semibold mb-6 text-center">Cloud & DevOps</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillIcon icon={<SiAmazonwebservices />} label="AWS (ECR, EC2, App Runner)" />
          <SkillIcon icon={<SiPostgresql />} label="Docker" />
          <SkillIcon icon={<SiMongodb />} label="GitHub Actions / CI-CD" />
        </div>

        {/* Databases */}
        <h2 className="text-xl font-semibold mb-6 text-center">Databases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillIcon icon={<SiMongodb />} label="MongoDB" />
          <SkillIcon icon={<SiPostgresql />} label="MySQL" />
          <SkillIcon icon={<SiExpress />} label="SQLAlchemy" />
          <SkillIcon icon={<SiMongodb />} label="GridFS" />
        </div>

        {/* Tools */}
        <h2 className="text-xl font-semibold mb-6 text-center">Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <SkillIcon icon={<SiAmazonwebservices />} label="Postman" />
          <SkillIcon icon={<SiJavascript />} label="Socket.io" />
          <SkillIcon icon={<SiExpress />} label="Cheerio" />
          <SkillIcon icon={<SiNextdotjs />} label="Puppeteer" />
        </div>

        {/* Mobile Development */}
        
        {/*<h2 className="text-xl font-semibold mb-6 text-center">Mobile Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <SkillIcon icon={<SiFlutter />} label="Flutter" />
          <SkillIcon icon={<FaAndroid />} label="Android" />
        </div>*/}
      </div>
    </section>
  )
}

];

export { ResumeCard, ResumeGrid, subPages };