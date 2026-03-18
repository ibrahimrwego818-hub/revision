interface User {
  name: string;
    age: number;
    email: string;
    isActive: boolean;
}

const user1: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
    isActive: true
}

console.log(user1);