import React from 'react'
import Particles from "react-tsparticles"

export class ParticlesComponent extends React.Component {
    constructor(props) {
      super(props);
  
      //this.particlesInit = this.particlesInit.bind(this);
      this.particlesLoaded = this.particlesLoaded.bind(this);
    }
    particlesLoaded(container) {
      console.log(container);
    }
  
    render() {
      return (
        <Particles
          id="tsparticles"
          canvasClassName="particle-canvas"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: "black",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "rgba(38,208,43,1)",
              },
              links: {
                color: "rgba(38,208,43,1)",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.75,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 3,
              },
            },
            detectRetina: true,
          }}
        />
      );
    }
  }
  