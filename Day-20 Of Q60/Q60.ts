// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = {
    name: "Wardah Shah",
    age: 19,
    getProfile: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(userProfile.getProfile());