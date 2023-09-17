

const About = () => {

    const styles = {
        heroHeadText:
          "font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
        heroSubText:
          "text-gray-700 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
    
        sectionHeadText:
          "text-gray-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pt-5",
        sectionSubText:
          "sm:text-[18px] text-[14px] text-gray-700 uppercase tracking-wider",
      };

  return (
    <div className="bg-gray-100 w-full h-screen">
         <h2 className={`${styles.sectionHeadText} text-center`}>
            About Us
          </h2>
         
    </div>
  )
}

export default About