// import './Portcolio.css';

function Portfolio() {
    // if we need logic to determine what to render, we put it here

  return (
    <div className="portfolio">
        <h1>Portfolio Component</h1>

        <article>
        <div>
          <a href="https://github.com/nlewis742/eat-speak-love" target="_blank" rel="noreferrer">

      
            <h2>Project 1</h2>
            <p>Project 1 description</p>
            </a>
        </div>

        <div>
          <a href="https://github.com/nlewis742/birders-anonymous" target="_blank" rel="noreferrer">

      
            <h2>Project 2</h2>
            <p>Project 1 description</p>
            </a>
        </div>

        <div>
          <a href="https://github.com/nlewis742/text_editor_pwa" target="_blank" rel="noreferrer">

      
            <h2>Project 3</h2>
            <p>Project 1 description</p>
            </a>
        </div>

        <div >
          <a href="https://github.com/nlewis742/employee_tracker" target="_blank" rel="noreferrer">

      
            <h2>Project 4</h2>
            <p>Project 1 description</p>
            </a>
        </div>

        <div>
          <a href="https://github.com/nlewis742/weather-dash" target="_blank" rel="noreferrer">

      
            <h2>Project 5</h2>
            <p>Project 1 description</p>
            </a>
        </div>
</article>
    </div>
  );
}

export default Portfolio;