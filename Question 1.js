// class Movie 
// {
//     constructor(Title, Studio, Rating = "PG") {
//         this.title = Title;
//         this.studio = Studio;
//         this.rating = Rating;
//     }
//     static getPG(movies) 
//     {
//         return movies.filter(movie => movie.rating === "PG");
//     }
// }

// let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
// console.log(casinoRoyale);
// const moviesArray = [
//     new Movie("Movie1", "Studio1", "PG"),
//     new Movie("Movie2", "Studio2", "R"),
//     new Movie("Movie3", "Studio3", "PG-13"),
//     new Movie("Movie4", "Studio4")
// ];

// const pgMoviesArray = Movie.getPG(moviesArray);
// console.log("Original Movies Array:", moviesArray);
// console.log("Filtered PG Movies Array:", pgMoviesArray);

class circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    get Radius() {
      return this.radius;
    }
  
    set Radius(value) {
      this.radius = value;
    }
  
    get Color() {
      return this.color;
    }
  
    set Color(colors) {
      this.color = colors;
    }
  
    get toString() {
      return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
  
    get Area() {
      return Math.pow(this.radius, 2) * 3.14;
    }
  
    get Circumference() {
      return (2 * this.radius * 3.14).toFixed(2);
    }
  }
  
  const mycircle = new circle (1.0,"Blue")
  
  console.log(mycircle)
  
  // using get and set method below =>
  mycircle.Radius = 5
  mycircle.Color="black"
  console.log(mycircle.toString)
  console.log(mycircle.Area)
  console.log(mycircle.Circumference)
  console.log(mycircle)