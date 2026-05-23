export default function Gallery() {
  return (
    <div style={{ padding: "40px" }}>

      <h1>My Gallery</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        <img
          src="/gallery/gallerypic1.jpg"
          width="300"
          alt="gallery1"
        />

        <img
          src="/gallery/gallerypic2.jpg"
          width="300"
          alt="gallery2"
        />

        <img
          src="/gallery/gallerypic3.jpg"
          width="300"
          alt="gallery3"
        />

      </div>

      <br />

      <a href="/">
        <button>Back to Home</button>
      </a>

    </div>
  );
}