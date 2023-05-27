import React from "react";
import myImage from '../public/IMG_20181215_110107.jpg';
export default class Home extends React.Component{

    render(){
        return(
            <main className="flex-col item-center">
            <div className="about">
                <div className=" ">
                    {/* <div className="profile" /> */}
                    <img src={myImage} className="profile" />
                </div>
                <div className="intro flex-col">
                    <div className="intrname">I'm Bobby,</div>
                    <p className="text-white">an Engineer, a Full-Stack Web Developer and a Security passionate. I love to bring websites and mobile apps to life, am very enthusiastic, energetic and learn anything very fast, especially tech related stuff.</p>
                </div>
                
            </div>
            <div id="contact" className="social flex-row justify-between">
                <a href="https://www.linkedin.com/in/bobby-kumari-25b01716b/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/babykr10" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://hashnode.com/@Bobbyk" target="_blank"><i className="fab fa-blogger-b"></i></a>
                <a href="https://github.com/babykumari152" target="_blank"><i className="fab fa-github-square"></i></a>
            </div>
            <div className="section"><h2 className="section-name"><span>Education</span></h2></div>
            <div className="education text-white">
               
                    <div className="degree"><h2>Guru Nanak Dev Engg. College Ludhiana
                        <a target="_blank" href="https://www.gndec.ac.in/" className="link-icon"><i className="fas fa-external-link-alt"></i></a>
                    </h2>
                    <h4>B.Tech in Computer Science & Engg.</h4>
                     <p>2016 - 2019</p>
                </div>
                <div className="degree"><h2>Sant Longowal Institute of Engineering & Technology
                    <a target="_blank" href="http://sliet.ac.in/" className="link-icon"><i className="fas fa-external-link-alt"></i></a>
                </h2>
                    <h4>Diploma in Computer Science & Engg.</h4>
                     <p>2014 - 2016</p>
                </div>
                <div className="degree"><h2>Sant Longowal Institute of Engineering & Technology
                    <a target="_blank" href="http://sliet.ac.in/" className="link-icon"><i className="fas fa-external-link-alt"></i></a>
                </h2>
                    <h4>Certificate in Computer Science & Engg.</h4>
                     <p>2012 - 2014</p>
                </div>
                
            </div>
            <div id="exp" className="section"><h2 className="section-name"><span>Experience</span></h2></div>
            <div className="experience text-white">
                <div className="work">
                    <div className="jobTitle">Software Engineer</div>
                    <div className="company">Bold Technology</div>
                    <div className="tenure">July 2022 - Present</div>
                    <div className="tech">Tech: .Net, Reactjs, JavaScript</div>
                    <div className="desc">
                        <ul>
                            <li>Writing clean, efficient, and maintainable code using React.js,C#</li>
                            <li>Identifying and fixing bugs and issues in the codebase and optimizing software performance</li>
                            <li>Collaborating with product managers, and other team members to understand requirements and translate them into a software design. This includes creating system architecture, defining components, and planning the overall structure of the software system</li>
                        </ul>
                    </div>
                </div>
                <div className="work">
                    <div className="jobTitle">Front-End Engineer</div>
                    <div className="company">EbixCash(Via.com)</div>
                    <div className="tenure">Feb 2021 - July 2022</div>
                    <div className="tech">Tech: Nodejs, swig, Reactjs</div>
                    <div className="desc">
                        <ul>
                            <li>involved in writing clean and efficient code using JavaScript, HTML, CSS</li>
                            <li>Creating and integrating with Node.js APIs to fetch and display data at Front-End</li>
                            <li>Collaborating with other developers, designers, and product team to understand project requirements, participate in code reviews, and contribute to the overall development process</li>
                        </ul>
                    </div>
                </div>
                <div className="work">
                    <div className="jobTitle">Associate Software Engineer</div>
                    <div className="company">Accenture Service Pvt Ltd.</div>
                    <div className="tenure">Sept 2019 - Nov 2020</div>
                    <div className="tech">Tech: MERN,MEAN Stack</div>
                    <div className="desc"><ul>
                        <li>Implementing user interfaces using React.js, creating responsive and interactive web pages, and integrating with APIs to fetch and display data.</li>
                        <li>Writing automation test suits</li>
                        <li>Identifying and fixing bugs and issues in the codebase, conducting tests to ensure functionality and reliability</li>
                    </ul></div>
                </div>
                <div className="work">
                    <div className="jobTitle">Data Science Intern</div>
                    <div className="company">Sabudh Foundation</div>
                    <div className="tenure">Jan 2019 - July 2019</div>
                    <div className="tech">Tech: Python,Flask,Sklearn</div>
                    <div className="desc">
                        <ul>
                            <li>Gathering and preparing data for analysis using Python library and Tableau</li>
                            <li>Developing and implementing machine learning algorithms and models under the guidance of experienced data scientists. This involves tasks such as feature engineering, model training</li>
                            <li>Creating visualizations dashboards, and reports to communicate the findings of data analysis effectively</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="skills" className="section"><h2 className="section-name"><span>Skills</span></h2></div>
            
            <div className="skills flex-row space-around">
                <div className="card">
                 <div className="flex-col ">
                    <div className="flex-col item-center justify-center ">
                        <div className="card-circle flex-col item-center  justify-center">
                            <i className="fab fa-html5"></i>
                        </div>
                        <p>HTML</p>
                    </div>
                 </div>
                 </div>
                 <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                               <i className="fab fa-css3"></i>
                           </div>
                           <p>CSS</p>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                               <i className="fab fa-js"></i>
                           </div>
                           <p>Javasceript</p>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                               <i className="fab fa-react"></i>
                           </div>
                           <p>React</p>
                       </div>
                    </div>
                </div>   
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                               <i className="fab fa-node-js"></i>
                           </div>
                           <p>Node</p>
                       </div>
                    </div>
                </div> 
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                               <i className="fab fa-github"></i>
                           </div>
                           <p>Git</p>
                       </div>
                    </div>
                </div>   
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                            <i className="fab fa-python"></i>
                           </div>
                           <p>Python</p>
                       </div>
                    </div>
                </div>   
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                            <i className="fas fa-database"></i>
                           </div>
                           <p>MongoDB/SQL</p>
                       </div>
                    </div>
                </div>  
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                            <h2>REDUX</h2>
                            {/* <img src="redux.jpg" style="width: 5rem;height: 5rem;" />  */}
                           </div>
                           <p>Redux</p>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex-col ">
                       <div className="flex-col item-center justify-center ">
                           <div className="card-circle flex-col item-center  justify-center">
                            <h2>SEO</h2>
                            {/* <img src="redux.jpg" style="width: 5rem;height: 5rem;" />  */}
                           </div>
                           <p>SEO</p>
                       </div>
                    </div>
                </div>   
            </div>
    
            
        </main>
        )
    }

}