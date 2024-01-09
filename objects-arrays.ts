const person: {
  name: string;
  age: number;
  magazine: string;
  favoriteSaying: string;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Tom Tireman",
  age: 44,
  magazine: "Music Player",
  favoriteSaying: "Hot Rod Your Axe!",
  hobbies: ["Music", "Being Pompous"],
  role: [3215, "author"],
};

console.log("Hi, I'm Tom.", person.favoriteSaying, "My hobbies:");

let favoriteThings: string[];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase());
}
