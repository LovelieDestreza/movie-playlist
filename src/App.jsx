import './style.css';



function App(){
return (
  <section>

      <h1> Movie Playlist</h1>
      <p className="subtitle">A collection of unforgettable stories</p>
      
      <div className="movie">
          <img src="src/assets/venom.jpg" alt="Venom" />
          <h2>Venom</h2>
          <p>Action • 2018</p>
        </div>

        <div className="movie">
          <img src="src/assets/dory.jpg" alt= "Finding Dory"/>
          <h2>Finding Dory</h2>
          <p>Animation • 2016</p>
        </div>

        <div className="movie">
          <img src="src/assets/weakhero.jpg" alt="Weak Hero" />
          <h2>Weak Hero</h2>
          <p>action • 2023</p>
        </div>

        <div className="movie">
          <img src="src/assets/nowhere.jpg" alt="Nowhere" />
          <h2>Nowhere</h2>
          <p>action • 2023</p>
        </div>





  </section>
  )
}

export default App;