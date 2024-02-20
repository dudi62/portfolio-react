import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

import movieappImg from '../assets/cards/firstpage.png';
import weatherDashboardImg from '../assets/cards/Weather Dashboard.png';
import workDayScheduleImg from '../assets/cards/Work Day Schedule.png';
import codeQuizImg from '../assets/cards/Code Quiz.png';

const projects = [

    {
        title: "Movies-App",
        description: "Movies app",
        image: movieappImg,
        deployedLink: "https://ginjak.github.io/Movies-App/",
        githubLink: "https://github.com/Ginjak/Movies-App"
    },
    {
        title: "Weather Dashboard",
        description: "Check the weather forecast for any city",
        image: weatherDashboardImg,
        deployedLink: "https://dudi62.github.io/Weather-Dashboard/",
        githubLink: "https://github.com/dudi62/Weather-Dashboard"
    },
    {
        title: "Daily Planner",
        description: "Plan your workday efficiently",
        image: workDayScheduleImg, 
        deployedLink: "https://dudi62.github.io/Daily-Planner-App/",
        githubLink: "https://github.com/dudi62/Daily-Planner-App"
    },
    {
        title: "Code Quiz",
        description: "Test your coding knowledge with a quiz",
        image: codeQuizImg, 
        deployedLink: "https://dudi62.github.io/Code-Quiz/",
        githubLink: "https://github.com/dudi62/Code-Quiz"
    }
];

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <Element name="portfolio" className="portfolio-section">
            <div className="grid-container mb-5">
                <Container className="my-5">
                    <Row>
                        <Col>
                            <h2 className="text-center title mb-5">Portfolio</h2>
                        </Col>
                    </Row>
                    <Row>
                        {projects.map((project, index) => (
                            <Col md={5} key={index} className="mb-5"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    deployedLink={project.deployedLink}
                                    githubLink={project.githubLink}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Element>
    );
}

export default Portfolio;