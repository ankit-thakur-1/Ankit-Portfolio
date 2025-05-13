import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Harvard Business School",
      period: "2023 - Present",
      description: "Specializing in Finance and Strategic Management with a focus on digital transformation. Maintaining a 3.9 GPA while participating in various business case competitions.",
      achievements: ["Dean's List 2023", "Business Strategy Competition Winner", "Leadership Excellence Award"]
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "University of Delhi",
      period: "2016 - 2019",
      description: "Graduated with honors, specializing in Finance and Accounting. Actively participated in business clubs and entrepreneurship initiatives.",
      achievements: ["Graduated with Distinction", "President of Business Club", "National Merit Scholarship"]
    }
  ];

  const certifications = [
    {
      title: "Certified Financial Analyst (CFA) - Level 1",
      issuer: "CFA Institute",
      year: "2022"
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      year: "2021"
    },
    {
      title: "Data Analytics for Business",
      issuer: "IBM",
      year: "2020"
    },
    {
      title: "Strategic Leadership",
      issuer: "Harvard Business School Online",
      year: "2020"
    }
  ];

  return (
    <section id="education" className="section bg-cardBg" ref={containerRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-8 flex items-center">
              <GraduationCap size={24} className="mr-3 text-primary" />
              Academic Education
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <h5 className="text-lg font-medium mb-2">{edu.institution}</h5>
                  
                  <div className="flex items-center text-textSecondary mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <p className="text-textSecondary mb-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <h6 className="font-medium mb-2">Key Achievements:</h6>
                    <ul className="list-disc list-inside text-textSecondary">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-8 flex items-center">
              <Award size={24} className="mr-3 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="card hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                      <p className="text-textSecondary">{cert.issuer}</p>
                    </div>
                    <span className="text-primary font-medium">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold font-serif mb-6">Additional Training</h3>
              
              <div className="space-y-4">
                <div className="card p-4 hover:shadow-xl transition-all duration-300">
                  <h4 className="font-medium">Leadership Development Program</h4>
                  <p className="text-textSecondary">Center for Creative Leadership, 2022</p>
                </div>
                
                <div className="card p-4 hover:shadow-xl transition-all duration-300">
                  <h4 className="font-medium">Financial Modeling Masterclass</h4>
                  <p className="text-textSecondary">Wall Street Prep, 2021</p>
                </div>
                
                <div className="card p-4 hover:shadow-xl transition-all duration-300">
                  <h4 className="font-medium">Digital Marketing Strategy</h4>
                  <p className="text-textSecondary">Google Digital Academy, 2020</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;