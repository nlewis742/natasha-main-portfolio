// import './Portcolio.css';

function Portfolio() {
    // if we need logic to determine what to render, we put it here

  return (
    <div className="portfolio">
        <h1>My Latest Projects:</h1>

        <article>
        <div>
          <a href="https://github.com/nlewis742/eat-speak-love" target="_blank" rel="noreferrer">

      
            <h2>Eat Pray Love</h2>
            <p>A website for people with dysphagia to connect</p>
            </a>
        </div>

        <div>
          <a href="https://github.com/nlewis742/birders-anonymous" target="_blank" rel="noreferrer">

      
            <h2>Birders Anonymous</h2>
            <p>A website to search and familiarize yourself with bird calls from around the world</p>
            </a>
        </div>

        <div>
          <a href="https://github.com/nlewis742/text_editor_pwa" target="_blank" rel="noreferrer">

      
            <h2>Text Editor</h2>
            <p>A basic text editor aplication that words on and offline</p>
            </a>
        </div>

        <div >
          <a href="https://github.com/nlewis742/employee_tracker" target="_blank" rel="noreferrer">

      
            <h2>Employee Tracker</h2>
            <p>A backend application to track and manage employees and their roles</p>
            </a>
        </div>

        <div>
          <a href="https://github.com/nlewis742/weather-dash" target="_blank" rel="noreferrer">

      
            <h2>Weather Dash</h2>
            <p>An application to see the forecast and current weather</p>
            </a>
        </div>
</article>
    </div>
  );
}

export default Portfolio;