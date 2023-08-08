import { techs } from "../constants"
import styles, { layout } from "../style"

const FeatureCard = ({ icon }) => (
  <div className="flex p-4 md:p-6">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" draggable="false"/>
    </div>
  </div>
)

const About = () => (
    <section id="about-me" className={`${styles.paddingY} mt-6`}>
      <div className="flex-1 flex-col text-center mb-10">
        <h2 className={styles.heading2}>About Me</h2>
        <p className={styles.paragraph}>Hello everyone, my name is Dicky Sanjaya, I'm a student in Binus University currently majoring Information Systems streaming Digital Technology. I have learned the basic of Java, UI/UX designing from the college, and now I'm learning and got interested in Front-end web developing. In this website, I'll put my web projects to show you guys what I've learned or achieved. You guys can also visit my github account by clicking the github icon in the hero or footer section. Thank you.</p>
      </div>

      <div className="flex-1 flex-col text-center">
        <h2 className={styles.heading2}>My Tech Stacks</h2>
      </div>

      <div className={`${layout.sectionImg} flex-row flex-wrap`}>
        {techs.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
)

export default About;