    import { ReactComponent as GitHubIcon} from '../logos/github.svg'
    import { ReactComponent as LinkedInIcon} from '../logos/linkedin.svg'
    import { ReactComponent as GmailIcon} from '../logos/gmail.svg'
    import { ReactComponent as Loading} from '../logos/loading.svg'

    function LandingPage() {
      return (
        <div className="flex justify-center items-center bg-[#f5f5f4] rounded-lg shadow-lg w-96 h-[23.5rem] relative motion-preset-confetti"> 

            {/* header section*/}
  
    
            <h3 className = "absolute top-[20px] left-5 flex justify-center font-geist font-bold text-[#172554]"> jonah clemente </h3>
    
            <h3 className = "absolute top-[43px] left-5 flex justify-center font-geist text-[10px]"> aspiring software engineer :)</h3>
            
             
              <a href = "https://github.com/jjonahc24"> 
                  <GitHubIcon className="absolute top-[26px] right-24 w-6 h-6 transition-transform duration-300 hover:scale-110 hover:text-blue-500" />
              </a>

              <a href = "https://www.linkedin.com/in/jonah-clemente-1b8442237"> 
                  <LinkedInIcon className="absolute top-[26px] right-8 w-6 h-6 transition-transform duration-300 hover:scale-110 hover:text-blue-500" />
              </a>
              
              <a href = "jjonah.c@berkeley.edu"> 
                  <GmailIcon className="absolute top-[26px] right-16 w-6 h-6 transition-transform duration-300 hover:scale-110 hover:text-blue-500" />
              </a> 

           
            <div className="absolute top-[68px] w-[100%]">
            <div className="h-[2px] bg-[#292524] w-full" style={{ backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
              }}
            ></div>
        </div>

            {/* about me section */}

            <h3 className = "absolute top-[80px] left-5 flex justify-center font-geist text-[13px] font-bold text-[#172554]"> about me </h3>

            <h3 className = "absolute top-[100px] left-5 flex justify-center font-geist text-[10px] text-black pr-6"> hi! my name is jonah, and i am a junior at uc berkeley studying computer science and data science. i also teach cs61a, and currently a full-stack intern @ gitroll for spring 2025.</h3>

            <h3 className = "absolute top-[150px] left-5 flex justify-center font-geist text-[10px] text-black pr-6"> feel free to check out my projects and experiences down below! </h3>


            {/* experiences*/}
            
            <h3 className = "absolute top-[173px] left-5 flex justify-center font-geist text-[13px] font-bold text-[#172554]"> experience </h3>

            <h3 className = "absolute top-[194px] left-5 flex justify-center font-geist font-bold text-[11px]"> full-stack developer intern @ gitroll</h3>
            <ul className="absolute top-[210px] left-3 list-disc pl-6 text-[10px] font-geist">
                <li>
                    incoming spring 2025
                 </li>
                </ul>

            <h3 className="absolute top-[228px] left-5 font-geist font-bold text-[11px]">ml engineer intern @ msk cancer center</h3>
                <ul className="absolute top-[244px] left-3 list-disc pl-6 text-[10px] font-geist">
                <li>
                    fine-tuned and deployed a resnet-50 model using pytorch on aws sagemaker
                    for real-time blood and bone marrow cell classification, enhancing accuracy
                    and performance.
                 </li>
                </ul>
            
                <h3 className="absolute top-[293px] left-5 font-geist font-bold text-[11px]">cs61a academic intern & tutor</h3>
                <ul className="absolute top-[309px] left-3 list-disc pl-6 text-[10px] font-geist">
                <li>
                      responsible for supporting students in cs61a in office hours, and discussion sections.
                 </li>
                </ul>

            {/* projects */}

            {/*more about me page transition*/} 
                
            <h3 className="absolute bottom-[9px] flex justify-center font-bold font-geist text-[11px]">projects page coming soon</h3>

        </div>
      );
    }
    export default LandingPage