"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderPage from "./components/header/page";
import FooterPage from "./components/footer/page";

export default function Home() {

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >

      <HeaderPage />

      {/* HERO SECTION */}

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          flexWrap: "wrap",
          padding: "50px",
          backgroundColor: "#0f172a",
        }}
      >

        {/* LEFT SIDE */}

        <div>

          <h1
            style={{
              fontSize: "70px",
              marginBottom: "10px",
              color: "#38bdf8",
              textShadow:
                "0 0 15px #38bdf8",
            }}
          >
            Hi, I'm Adrian
          </h1>

          <h2
            style={{
              fontSize: "40px",
              color: "#38bdf8",
            }}
          >
            BSIT Developer
          </h2>

          <p
            style={{
              maxWidth: "500px",
              fontSize: "20px",
              color: "white",
              lineHeight: "1.8",
            }}
          >
            BSIT student passionate about developing
            modern and responsive websites, creating
            innovative systems, and exploring new
            technologies to continuously improve my
            skills in programming and web development.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
            }}
          >

            <a href="#projects">
              <button>
                View My Work
              </button>
            </a>

           <a href="/contact">
  <button>
    Get In Touch
  </button>
</a>
          </div>

          {/* SOCIALS */}

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "25px",
              fontSize: "35px",
            }}
          >

            <a
              href="https://www.facebook.com/"
              target="_blank"
              style={{
                color: "#38bdf8",
              }}
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              style={{
                color: "#38bdf8",
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              style={{
                color: "#38bdf8",
              }}
            >
              <i className="fab fa-twitter"></i>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <img
            src="/profile.jpg"
            alt="profile"
            style={{
              width: "350px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "20px",
              border: "3px solid #38bdf8",
              boxShadow:
                "0 0 15px #38bdf8, 0 0 35px #38bdf8",
            }}
          />

        </div>

      </section>

      {/* ABOUT */}

      <section
        style={{
          padding: "80px 30px",
          textAlign: "center",
          backgroundColor: "#0f172a",
        }}
      >

        <h1
          style={{
            color: "#38bdf8",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
          About Me
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            color: "white",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          I am a passionate BSIT student who enjoys
          creating modern websites, developing innovative
          systems, and exploring new technologies.
          I love solving problems through programming
          and continuously improving my skills in
          web development and software development.
        </p>

      </section>

      {/* SKILLS SECTION */}

      <section
        id="skills"
        style={{
          padding: "80px 30px",
          textAlign: "center",
          backgroundColor: "#0f172a",
        }}
      >

        <h1
          style={{
            color: "#38bdf8",
            marginBottom: "40px",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
          My Skills
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >

          {[
            {
              icon: "fab fa-html5",
              color: "#e34c26",
              name: "HTML",
            },
            {
              icon: "fab fa-css3-alt",
              color: "#264de4",
              name: "CSS",
            },
            {
              icon: "fab fa-js",
              color: "#f0db4f",
              name: "JavaScript",
            },
            {
              icon: "fab fa-react",
              color: "#61dbfb",
              name: "React",
            },
            {
              icon: "fab fa-node-js",
              color: "#3c873a",
              name: "Node JS",
            },
            {
              icon: "fab fa-php",
              color: "#8892be",
              name: "PHP",
            },
            {
              icon: "fas fa-server",
              color: "#fb7a24",
              name: "XAMPP",
            },
          ].map((skill, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "#0f172a",
                padding: "25px",
                borderRadius: "20px",
                width: "150px",
                height: "180px",
                border: "2px solid #38bdf8",
                boxShadow: "0 0 20px #38bdf8",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >

              <i
                className={skill.icon}
                style={{
                  fontSize: "70px",
                  color: skill.color,
                }}
              ></i>

              <h2
                style={{
                  color: "white",
                }}
              >
                {skill.name}
              </h2>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}

<section
  id="projects"
  style={{
    padding: "80px 30px",
    textAlign: "center",
    backgroundColor: "#0f172a",
  }}
>

  <h1
    style={{
      color: "#38bdf8",
      textShadow: "0 0 15px #38bdf8",
    }}
  >
    My Projects
  </h1>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "40px",
    }}
  >

    {/* PROJECT 1 */}

    <div
      style={{
        width: "300px",
        backgroundColor: "#111827",
        padding: "20px",
        borderRadius: "20px",
        border: "2px solid #38bdf8",
        boxShadow: "0 0 20px #38bdf8",
      }}
    >

      <img
        src="/gallery/project1.png"
        width="100%"
        alt="project1"
        style={{
          borderRadius: "10px",
        }}
      />

      <h2
        style={{
          color: "white",
        }}
      >
        Patient Care Monitoring
      </h2>

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "1.7",
        }}
      >
        A web-based patient monitoring system
        designed to track vital signs and
        monitor patient health data efficiently.
      </p>

    </div>

    {/* PROJECT 2 */}

    <div
      style={{
        width: "300px",
        backgroundColor: "#111827",
        padding: "20px",
        borderRadius: "20px",
        border: "2px solid #38bdf8",
        boxShadow: "0 0 20px #38bdf8",
      }}
    >

      <img
        src="/gallery/project2.png"
        width="100%"
        alt="project2"
        style={{
          borderRadius: "10px",
        }}
      />

      <h2
        style={{
          color: "white",
        }}
      >
        FitBuddy
      </h2>

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "1.7",
        }}
      >
        A fitness and calorie tracking system
        with AI-generated meal plans and
        workout recommendations.
      </p>

    </div>

    {/* PROJECT 3 */}

    <div
      style={{
        width: "300px",
        backgroundColor: "#111827",
        padding: "20px",
        borderRadius: "20px",
        border: "2px solid #38bdf8",
        boxShadow: "0 0 20px #38bdf8",
      }}
    >

      <img
        src="/gallery/project3.png"
        width="100%"
        alt="project3"
        style={{
          borderRadius: "10px",
        }}
      />

      <h2
        style={{
          color: "white",
        }}
      >
        Adrian Website Portfolio
      </h2>

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "1.7",
        }}
      >
        My personal responsive portfolio website
        developed using Next.js and modern
        web technologies.
      </p>

    </div>

  </div>

</section>
      {/* GALLERY */}

      <section
        style={{
          padding: "80px 30px",
          textAlign: "center",
          backgroundColor: "#0f172a",
        }}
      >

        <h1
          style={{
            color: "#38bdf8",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
          Gallery
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >

          {[1, 2, 3].map((img) => (

            <img
              key={img}
              src={`/gallery/gallerypic${img}.jpg`}
              width="300"
              alt={`gallery${img}`}
              style={{
                borderRadius: "15px",
                boxShadow: "0 0 20px #38bdf8",
              }}
            />

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        style={{
          padding: "80px 30px",
          textAlign: "center",
          backgroundColor: "#0f172a",
        }}
      >

        <h1
          style={{
            color: "#38bdf8",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
         
        </h1>


      </section>

      <FooterPage />

    </div>
  );
}