export default function Contact() {
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
          width: "500px",
          backgroundColor: "#111827",
          padding: "40px",
          borderRadius: "20px",
          border: "2px solid #38bdf8",
          boxShadow: "0 0 25px #38bdf8",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            color: "#38bdf8",
            fontSize: "45px",
            marginBottom: "30px",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
          Contact Me
        </h1>

        <div
          style={{
            textAlign: "left",
            lineHeight: "2",
            fontSize: "18px",
          }}
        >

          <p>
            <strong style={{ color: "#38bdf8" }}>
              Email:
            </strong>{" "}
            adrian.lugada.23@gmail.com
          </p>

          <p>
            <strong style={{ color: "#38bdf8" }}>
              Phone:
            </strong>{" "}
            09765367690
          </p>

          <p>
            <strong style={{ color: "#38bdf8" }}>
              Facebook:
            </strong>{" "}
            Adrian Evangelista
          </p>

          <p>
            <strong style={{ color: "#38bdf8" }}>
              Address:
            </strong>{" "}
            Brgy. Novaliches, Liliw Laguna
          </p>

        </div>

        <br />

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

  );
}