export default function Education() {
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
          Educational Background
        </h1>

        <div
          style={{
            lineHeight: "2.5",
            fontSize: "18px",
          }}
        >

          <p>
            🎓 <strong style={{ color: "#38bdf8" }}>
              Elementary:
            </strong>{" "}
            Parang Elementary School, Marikina City
          </p>

          <p>
            🎓 <strong style={{ color: "#38bdf8" }}>
              Junior High School:
            </strong>{" "}
            Liliw National High School
          </p>

          <p>
            🎓 <strong style={{ color: "#38bdf8" }}>
              Senior High School:
            </strong>{" "}
            Liliw Senior High School
          </p>

          <p>
            🎓 <strong style={{ color: "#38bdf8" }}>
              College:
            </strong>{" "}
            Bachelor of Science in Information Technology (BSIT) In  Pamantasan ng Lungsod ng San Pablo (PLSP)
            <br />
           
          </p>

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