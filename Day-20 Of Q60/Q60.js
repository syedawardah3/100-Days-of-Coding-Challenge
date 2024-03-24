// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = {
    name: "Mehtab Kanwal",
    age: 30,
    getProfile: function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    }
};
console.log(userProfile.getProfile());
