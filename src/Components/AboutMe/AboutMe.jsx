import React from "react";
import { Card, Space } from 'antd';
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiJavascript, SiGithub, SiReact, SiHtml5, SiBootstrap, SiRedux,
        SiNodedotjs, SiPostgresql, SiSequelize, SiExpress, SiPostman, SiNpm,
        SiAuth0, SiMercadopago
    } from "react-icons/si";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import dylanPicture from "./dylan-sebastian.jpg";
import pfImg from "./Captura.PNG";
import todoApp from "./Captura4.PNG";



import "./AboutMe.css"



const { Meta } = Card;

function AboutMe (){
    return(
        <div id="about-me"  className="about-me-component">
            <div className="tittle-cards">
            <p className="titles"> About me</p>
            <div className="cards-component">
                <div className="card-img">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={dylanPicture} />}
                >
                    <Meta title="Dylan Sebastian Marcote" description="Front end developer" />
                </Card>
                </div>
            
                <div  id="skills" className="card-info">
                    <Space direction="vertical" size={16}>
                    <Card
                    className="card-aux"
                    title="Tell you a little about me"
                    style={{
                        width: 300,
                        
                    }}
                    >
                    <p>Proactive and entrepreneurial front-end developer, passionate 
                    about creating innovative and functional solutions. Specialized in React and constantly learning 
                    new technologies. 
                    With skills in Git, PostgreSQL, Scrum and Object Oriented Programming with JavaScript.
                    </p>
                    </Card>
                    </Space>

                </div>
            </div>
            </div>
          
            <div  className="titles-skills">
            <p className="titles">Skills</p>
            <div id="proyects" className="skills-container">
                    <div>
                    <SiJavascript className="skills"/>
                    <p className="skill-name">Java Script</p>
                    </div>
                    <div>
                    <SiGithub className="skills"/>
                    <p className="skill-name">GitHub</p>
                    </div>
                    <div>
                    <SiReact className="skills"/>
                    <p className="skill-name">React.js</p>
                    </div>
                    <div>
                    <SiHtml5 className="skills"/>
                    <p className="skill-name">HTML</p>
                    </div>
                    <div>
                    <SiBootstrap className="skills"/>
                    <p className="skill-name">Bootstrap</p>
                    </div>
                    <div>
                    <SiRedux className="skills"/>
                    <p className="skill-name">Redux</p>
                    </div>
                    <div>
                    <SiNodedotjs className="skills"/>
                    <p className="skill-name">Node.js</p>
                    </div>
                    <div>
                    <SiPostgresql className="skills"/>
                    <p className="skill-name">PostgresSql</p>
                    </div>
                    <div>
                    <SiSequelize className="skills"/>
                    <p className="skill-name">Sequelize</p>
                    </div>
                    <div>
                    <SiExpress className="skills"/>
                    <p className="skill-name">Express</p>
                    </div>
                    <div>
                    <SiMercadopago className="skills"/>
                    <p className="skill-name">Mercado Pago</p>
                    </div>
                    <div>
                    <SiPostman className="skills"/>
                    <p className="skill-name">Postman</p>
                    </div>
                    <div>
                    <SiNpm className="skills"/>
                    <p className="skill-name">NPM</p>
                    </div>
                    <div>
                    <AiOutlineAntDesign className="skills"/>
                    <p className="skill-name">Ant Desing</p>
                    </div>
                    <div>
                    <SiAuth0 className="skills"/>
                    <p className="skill-name">Auth0</p>
                    </div>  

                </div>
            </div>

            <div className="title-proyects">
                <p className="titles">My React proyects front-end</p>
                <div className="cards">
                    <div className="pf-info">
                        <a className="links-aux" href="https://pf-front-y72g-git-develop-pfgrupo3henry.vercel.app/">
                        <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                    <img
                        style={{ height: 250 }}
                        alt="example" src={pfImg} />}
                    >
                        <Meta
                        avatar={<a href="https://github.com/pfgrupo3henry/pf_front"><SiGithub className="icon-github"/></a>}
                        title="Henry Games Store"
                        description={
                        <div className="info">Online store of digital video games for Play Station. 
                        Users can register, buy with Mercado Pago and administrators can manage 
                        the platform with a dashboard. 
                        </div>} />
                    </Card>
                        </a>
                    

                   
                    </div>

                    <div className="pf-info">
                        <a className="links-aux" href="https://todoapp-3-dylansebastianm.vercel.app/">
                        <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                    <img 
                        style={{ height: 250 }}
                        alt="example" src={todoApp} />}
                >
                    <Meta 
                        avatar={<a href="https://github.com/dylansebastianm/todoapp_3"><SiGithub className="icon-github"/></a>}
                        title="Things to do" 
                    description= {
                    <div className="info">Task list app made with React, Redux and LocalStorage. 
                    Users can add, delete, and mark tasks as complete.
                    </div>} />
                </Card>
                        </a>
                   

                    </div>
               
                <div>

                </div>
               
                    


                </div>
               

            </div>
            
             
        </div>
    )
}

export {AboutMe}