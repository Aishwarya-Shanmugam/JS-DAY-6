class Person {
    constructor(firstName, lastName, age, nationality, place, state) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.nationality = nationality
      this.place = place
      this.state = state
    }
  }
  
  var person1 = new Person("Aishwarya", "Shanmugam", "24", "India", "Chittoor","Andhra Pradesh");
  var person2 = new Person("Vignesha", "Shanmugam", "22", "Indian", "Kovilpatti","Tamilnadu")
  
  console.log(person1)
  console.log(person2)