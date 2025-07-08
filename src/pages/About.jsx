import "./About.css";

function Homepage() {
  return (
    <div className="about-section">
      <div className="about-left">
        <p>
          From call-sheets and campaign imagery to spa menus and short films, we are obsessed with all aspects of creative.
          A thread running through our work is that <em>everything</em> matters. This attention to detail means that when
          we’re building a photography brief, we’re drafting it with a story front of mind and a photographer carefully
          chosen not just for their visuals but also for their values.
        </p>
        <p>
          Storytelling is central to our work and this naturally leads us to soulful clients and meaningful causes. We’re...
        </p>
      </div>
      <div className="about-right">
      <img loading="lazy" src="/img/about3.jpg" alt="Freya" />
      </div>
    </div>
  );
}

export default Homepage;
