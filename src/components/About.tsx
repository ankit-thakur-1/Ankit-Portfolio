import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const stats = [
    { icon: <BookOpen size={24} />, value: "MBA", label: "Degree" },
    { icon: <Briefcase size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Award size={24} />, value: "10+", label: "Certifications" },
    { icon: <GraduationCap size={24} />, value: "3.9", label: "GPA" }
  ];

  return (
    <section id="about" className="section bg-cardBg" ref={containerRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Passionate MBA student with a strong background in business and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Ankit Thakur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                <p className="text-white text-center">
                  <span className="block text-2xl font-bold">5+</span>
                  <span className="text-sm">Years of Experience</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-4">
              MBA Student & Business Professional
            </h3>
            <p className="text-textSecondary mb-6">
              I am an MBA student with a passion for business strategy, finance, and technology. 
              With over 5 years of experience in the corporate world, I have developed a strong 
              understanding of business operations and management.
            </p>
            <p className="text-textSecondary mb-6">
              My academic journey has equipped me with analytical skills and strategic thinking, 
              while my professional experience has given me practical insights into business challenges 
              and opportunities.
            </p>
            <p className="text-textSecondary mb-8">
              I am constantly seeking to expand my knowledge and skills through continuous learning 
              and professional development. My goal is to leverage my education and experience to 
              drive business growth and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn btn-primary">
                My Experience
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="card text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</h4>
              <p className="text-textSecondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;