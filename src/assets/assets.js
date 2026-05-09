import heroImg from './hero.avif';
import aboutImg from './about.avif';

import user1Img from './user1Img.jpg';
import user2Img from './user2Img.jpg';
import user3Img from './user3Img.jpg';

const assets = {
  heroImg,
  aboutImg,
};



// TIME OPTIONS

export const timeOptions = [
  { value: "", label: "Select Time" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "19:30", label: "7:30 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "20:30", label: "8:30 PM" },
  { value: "21:00", label: "9:00 PM" },
];



// PARTY SIZE

export const partySizeOptions = [
  { value: "", label: "Select Party Size" },

  ...Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `${i + 1} person${i + 1 > 1 ? "s" : ""}`,
  })),
];



// TABLE AREA

export const tableRefOptions = [
  { value: "", label: "Select Table Area" },
  { value: "window", label: "Window" },
  { value: "center", label: "Center" },
  { value: "outdoor", label: "Outdoor" },
];



// TESTIMONIALS

export const testimonials = [

  {
    id: 1,
    name: "Amit Sharma",
    message: "Amazing food and ambience. Highly recommended!",
    image: user1Img,
  },

  {
    id: 2,
    name: "Priya Singh",
    message: "Service was excellent. Will visit again!",
    image: user2Img,
  },

  {
    id: 3,
    name: "Rahul Verma",
    message: "Loved the desserts and mocktails!",
    image: user3Img,
  },

];



export default assets;