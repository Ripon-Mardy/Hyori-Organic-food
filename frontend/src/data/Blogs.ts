import blogs1 from "@/public/blogs/blog-01.jpg";
import blogs2 from "@/public/blogs/blog-02.jpg";
import blogs3 from "@/public/blogs/blog-03.jpg";

export const blogsData = [
  {
    id: 1,
    slug: "you-must-eat-greens-everyday",

    title: "You Must Eat Greens Everyday",

    shortDescription:
      "Healthy green vegetables provide essential vitamins, minerals, and fiber for a balanced lifestyle.",

    description: `
Eating green vegetables every day is one of the best habits for maintaining a healthy lifestyle.
Greens are packed with vitamins, minerals, antioxidants, and fiber that help improve digestion, strengthen immunity, and boost energy naturally.

Vegetables like spinach, broccoli, lettuce, kale, and cucumber support heart health and improve skin quality.
Adding fresh greens to your daily meals can also reduce the risk of many diseases.

A balanced diet combined with healthy habits can significantly improve both physical and mental wellbeing.
    `,

    image: blogs1,

    category: "Health",

    author: "Ripon Mardy",

    comments: 4,

    createdAt: "April 18, 2021",

    tags: ["Healthy Food", "Vegetables", "Organic"],

    readTime: "5 min read",
  },

  {
    id: 2,

    slug: "smile-and-say-cheese",

    title: "Smile and Say Cheese",

    shortDescription:
      "Discover how healthy dairy products can improve your daily nutrition and lifestyle.",

    description: `
Cheese and dairy products are rich sources of calcium, protein, and essential nutrients.
When consumed in moderation, they help strengthen bones, improve muscle growth, and support overall health.

Organic dairy products are becoming increasingly popular because they contain fewer chemicals and preservatives.
Including cheese in salads, sandwiches, and snacks can make meals both delicious and nutritious.

Always choose fresh and high-quality dairy products for maximum health benefits.
    `,

    image: blogs2,

    category: "Food",

    author: "Ripon Mardy",

    comments: 2,

    createdAt: "April 18, 2021",

    tags: ["Cheese", "Organic Food", "Healthy"],

    readTime: "4 min read",
  },

  {
    id: 3,

    slug: "muffin-recipes-you-cant-resist",

    title: "Muffin Recipes You Can't Resist",

    shortDescription:
      "Easy homemade muffin recipes with fresh ingredients and delicious flavors.",

    description: `
Homemade muffins are one of the easiest and most enjoyable snacks to prepare.
Using fresh fruits, nuts, and healthy ingredients can make muffins both tasty and nutritious.

Popular muffin flavors include blueberry, chocolate chip, banana, and strawberry.
You can also experiment with oats, honey, and organic flour for healthier alternatives.

Freshly baked muffins are perfect for breakfast, evening snacks, or family gatherings.
    `,

    image: blogs3,

    category: "Recipes",

    author: "Ripon Mardy",

    comments: 3,

    createdAt: "April 8, 2021",

    tags: ["Recipes", "Muffins", "Bakery"],

    readTime: "6 min read",
  },
];
