async function logMovies() {
    const response = await fetch("https://www.fsairlines.net/crewcenter/index.php?status=book_flight&status2=logged&status2=logged&va=51500&p=181376");
    const movies = await response.json();
    console.log(movies);
  }
