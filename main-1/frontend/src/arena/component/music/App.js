import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function Musicc() {
  const [songs] = useState([
    {
      title: "Theme 1",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/theme1.mp3"
    },
    {
      title: "Theme 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/theme2.mp3"
    },
    {
      title: "Theme 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/theme3.mp3"
    },
    {
      title: "Theme 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/theme4.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default Musicc;
