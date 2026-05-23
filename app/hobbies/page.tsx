export default function Hobbies() {
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
          width: "700px",
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
          My Hobbies
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >

          {/* HOBBY 1 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
              textAlign: "center",
            }}
          >

            <div
              style={{
                fontSize: "60px",
              }}
            >
              🎮
            </div>

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              Playing Games
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              Playing online and offline games helps
              me relax, improve strategic thinking,
              and enjoy teamwork with friends.
            </p>

          </div>

          {/* HOBBY 2 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
              textAlign: "center",
            }}
          >

            <div
              style={{
                fontSize: "60px",
              }}
            >
              💻
            </div>

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              Coding
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              I enjoy building websites and systems,
              learning programming languages, and
              improving my development skills.
            </p>

          </div>

          {/* HOBBY 3 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
              textAlign: "center",
            }}
          >

            <div
              style={{
                fontSize: "60px",
              }}
            >
              🎬
            </div>

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              Watching Movies
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              Watching movies inspires creativity,
              entertainment, and helps me discover
              different stories and ideas.
            </p>

          </div>

          {/* HOBBY 4 */}

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #38bdf8",
              boxShadow: "0 0 15px #38bdf8",
              textAlign: "center",
            }}
          >

            <div
              style={{
                fontSize: "60px",
              }}
            >
              🎵
            </div>

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              Listening to Music
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              Music helps me stay motivated,
              focused, relaxed, and inspired
              while studying or coding.
            </p>

          </div>

        </div>

        <br />

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
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