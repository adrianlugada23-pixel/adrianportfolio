export default function Achievements() {
  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >

      <div
        style={{
          width: "600px",
          backgroundColor: "#111827",
          padding: "40px",
          borderRadius: "20px",
          border: "2px solid #38bdf8",
          boxShadow: "0 0 25px #38bdf8",
        }}
      >

        <h1
          style={{
            color: "#38bdf8",
            fontSize: "45px",
            textAlign: "center",
            marginBottom: "40px",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
          Achievements & Awards
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >

          {/* ACHIEVEMENT 1 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
            }}
          >

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              🏆 Best in Work Immersion
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              Recognized for outstanding performance,
              dedication, and professionalism during
              work immersion training.
            </p>

          </div>

          {/* ACHIEVEMENT 2 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
            }}
          >

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              🎓 Senior High With Honor
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              Achieved academic excellence during
              Senior High School through consistent
              hard work and dedication.
            </p>

          </div>

          {/* ACHIEVEMENT 3 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
            }}
          >

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              💻 NC II Passer
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              Successfully passed the NC II certification,
              demonstrating technical skills and competency
              in information technology.
            </p>

          </div>

        </div>

        <br />

        <div
          style={{
            textAlign: "center",
          }}
        >

          <a href="/">

            <button
              style={{
                padding: "15px 35px",
                backgroundColor: "#38bdf8",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 0 15px #38bdf8",
              }}
            >
              Back to Home
            </button>

          </a>

        </div>

      </div>

    </div>

  );
}