


import "./About.css";
import LazyImage from "../components/LazyImage";

function Homepage() {
  return (
    <div className="about-section">
      <div className="about-left">
        <h2 className="freya-intro">Hi! I’m Freya,</h2>

        <p className="about-text">
          A photographer and visual storyteller drawn to capturing the fleeting, the emotive, and the quietly vivid.
          My journey started with 35mm film. The tactility, the anticipation, the depth of colour — it all taught me how to see. Film shaped my style in a way that still guides everything I shoot today. While I now shoot mainly on Fujifilm digital, film still remains at the core of my approach: soft light, imperfect edges and moments that feel honest rather than forced.
          <br /><br />
          Photography, for me, is about preserving feelings — not just faces or places. I’m interested in the in-between moments, the shift in light, the unspoken things that pass between people. Every photo is an attempt to translate emotion into a visual form, to tell stories through palette, timing, and texture.
          <br /><br />
          This website was built and coded by me — a space that reflects the same care and intention I bring to my photography. Everything here is a piece of how I see and feel the world.
        </p>

        <p className="print-info">
          If you’re interested in prints, collaborations or photoshoots, feel free to get in touch at <a href="mailto:freyako96@gmail.com">freyako96@gmail.com</a> — all prints are produced on high-gloss paper to bring out the richness and depth of each image. Thanks for visiting — I hope you find something here that stays with you.
        </p>
      </div>

      <div className="about-right">
        <LazyImage
 loading="lazy" src="/img/about6.jpg" alt="Freya" />
      </div>
    </div>
  );
}

export default Homepage;
