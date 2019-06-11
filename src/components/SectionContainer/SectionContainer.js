import React, { Component } from 'react';
import Section from '../Section/Section';
import './SectionContainer.css';

class SectionContainer extends Component {
    render() {
        return (
            <div className="SectionContainer">
                <Section>
                    <div style={{ width: "100%", height: "100%" }}>
                        <div style={{ position: "absolute", width: 400 ,height: "100%" }}>
                            <img
                                src="https://colorlib.com/preview/theme/bizcon/img/about_img_1.png"
                                alt=""
                                style={{ position: "absolute", height: "100%",padding: 30 }}
                            />
                        </div>
                        <div style={{ position: "absolute",padding: 30,  left: 400, width: "100%", height: "100%" }}>
                            <h2 style={{ fontSize: 30, fontWeight: 300 ,fontWeight: 600, fontFamily: "Poppins sans-serif" , fontStyle: "italic",  }} >We Have 24 Year Expereince in consulting</h2>
                            <br />
                            <h4 style={{ fontSize: 17, color: "#ff7e5f" , fontWeight: 300 ,fontWeight: 300, fontFamily: "Poppins sans-serif" , fontStyle: "italic",  }} >First Abundantly night you are sea great fifth year</h4>
                            <br />
                            <p style={{ width: "70%" }}>
                                Lights fly above bearing brought abundantly whose. Without one may i seed void wels great face god were deep be first. Unto for third be in moveth. Bring land bearing un abundantly firmament appear whales them years. Lights fly above bearing brought bold abundantly whose without one may i seed.
                            </p>
                        </div>
                    </div>
                </Section>
                <Section>We Provide Best Services</Section>
            </div>
        );
    }
}

export default SectionContainer;