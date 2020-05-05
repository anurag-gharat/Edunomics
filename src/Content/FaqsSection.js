import React,{useEffect} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import Heading from '../Components/Heading';
import Collapsible from '../Components/Collapsible';


export default function FaqsSection() {

  
    useEffect(()=>{
        let collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible);
        },[])


    return (
        <section className="section" id="faqs">
            <Heading title="Frequently Asked Questions" />
            <div className="container">
                
                <div className="row">
                    <div className="col s12 m6 l6 m-t-10">

                        <h5 className="center">For Students</h5>
                        <ul className="collapsible popout ">
                        <Collapsible
                        question="How does Edunomics work?"
                        answer="We at edunomics basically combine technological expertise with business intelligence and deliver it to those who are in need, connecting the students with real world industry experts who will give the right training and development needed with accordance to the real world experiences. Edunomics works by providing online textbook depositories, helps to develop and exercise skills by providing different courses of their domain of interest. Differentiated lessons along with diagnostic tools we are completely open sourced."
                        />
                        <Collapsible
                        question="Who is Edunomics for?"
                        answer="This platform is for hardcore enthusiasts who are eager to go through intensive extroverted teaching and learning process more closely related to their specific industry rather than theorotical, along with their batch of similar aspiring students to have a well interacted expert-student and student-student interactions. Edunomics belongs to every Student and Professor who wishes to benefit the human resource as a whole. Students who wish to empower themselves with the skill of knowledge, along with Professors interested in providing quality education to those in need, both have a place at Edunomics.."
                        />
                        <Collapsible
                        question="How much is the fee"
                        answer="No. We consider education to be the most essential part that everyone should be obligated to. Therefore, we are completely Open Sourced."
                        />
                        <Collapsible
                        question="Is there any security deposit"
                        answer="No.We don't take any amount or any kind of deposit from our users."
                        />
                        <Collapsible
                        question="What happens if I quit the program? Do I still have to pay?"
                        answer="If you quit the program, you will miss out on a certificate of completion that we will be presenting to every student who successfully has finished the particular program. Anyways, we are 100% open sourced so we never ask any user for any payments."
                        />
                        <Collapsible
                        question="In what scenarios is the security deposit not refunded?"
                        answer="We don't obtain any sort of deposit from our students or professors."
                        />
                        <Collapsible
                        question="Do I have to accept my offer from hiring partners?"
                        answer="Not necessarily, you can always choose to decline the offer according to the best of your wishes. However, do realize that Edunomics plays a vital role in the hiring process by referring to the companies with the best, talented and the most innovative workforce."
                        />
                        </ul>


                    </div>
                    <div className="col s12 m6 l6  m-t-10">

                    
                    <h5 className="center">For Companies</h5>
                        <ul className="collapsible popout">
                        <Collapsible
                        question="Is there a cost to hire students from edunomics?"
                        answer="No. We are completely open sourced. We just emphasis on the companies to give the best in the market packages for our students, since they are of the utmost quality and talent"
                        />
                        <Collapsible
                        question="What skills do EDUNOMICS help with?"
                        answer="Edunomics provides a workforce of different skills that in any way work innovatively and productively in with quality service and outputs. Here we concentrate on giving the best and latest tech industry related skills and knowledge by training them in Web Technology (HTML,CSS,Bootstrap,ReactJS,MySQL and NodeJS) and Mobile Application Development (Android and ReactNative)."
                        />
                        <Collapsible
                        question="How do you select students for your program on your platform?"
                        answer="We differentiate on the basis of a three-step test process,which tests his/her abilities, willingness to work and aptitude.Firstly, the students have to apply with an insightful questionnaire cum submission form and then interact with our ALPHA Bot which gives them the in depth analysis and mentors them to what they are really good at. Further they are appointed tasks in a well thought and planned challenge, upon the successful completion of the challenge we select them."
                        />
                        <Collapsible
                        question="How are you different from other learning platforms and bootcamops?"
                        answer="Finding and hunting the right talent in students and then helping them with it to pursue what they really love is a strategy we acquire at EDUNOMICS. We give emphasis to training them with industry experts and not just teachers or professors, building a bridge between industry and academics. Being totally open sourced we ensure the availability of smart, talented and sincere candidates with skill optimum experience. We are a productive platform for industries providing new facilities and innovation peak for quality Services and output. Thus, helping in increasing the competitiveness in favor of industry."
                        />
                        <Collapsible
                        question="Is EDUNOMICS a hiring agency as well?"
                        answer="Yes, Edunomics is a hiring agency as well. It provides both Internships and Jobs to most deserved candidates not only from outside the world but also to the talented and sincere learners who are the part of Edunomics. Edunomics hire Professors, teachers, content writers, content editors, sales and accounts managers, etc. Providing them with good salaries and stipends. Moreover, the benefits of Certification are also provided to the candidates engaged in internships."
                        />
                        <Collapsible
                        question="What is the salary of an edunomics graduate?"
                        answer="EDUNOMICS graduates can get a salary that of any top graduates depending upon the programs, Skills set, skill optimum experiences, and many other factors. Because their developed real-world industrial skills are what matters and are accredited the most."
                        />
                        <Collapsible
                        question="What if there is an issue with an EDUNOMICS hire?"
                        answer="Our active support team is always there to look and resolve any issues if they may arise to the best of both the parties’ needs. Edunomics gives quick responses on such a situation and makes sure that not either of the parties never gets affected by it in any way. However, our strategic system is tried and tested, issue free, and paved in such a way that it works for the smooth functioning of students and industry experts."
                        />
                        </ul>

                    </div>

                </div>
            </div>
        </section>
    )
}
