import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const correctSound = new Audio(`${process.env.PUBLIC_URL}/sounds/correct.mp3`);
const wrongSound = new Audio(`${process.env.PUBLIC_URL}/sounds/wrong.mp3`);
const clickSound = new Audio(`${process.env.PUBLIC_URL}/sounds/click.mp3`);
const victorySound = new Audio(`${process.env.PUBLIC_URL}/sounds/victory.mp3`);

const categoryImages = {
  Science: "/images/Young-scientist.webp",
  Technology: "/images/Young-Coder.webp",
  Art: "/images/Young-Artist.webp",
  Engineering: "/images/young-Astronaut.jpeg",
  Mathematics: "/images/Young-mathematician.webp",
};
const categories = {
  Science: [
    {
      question: "Who was the first woman to blast off into space?",
      options: ["Sally Ride", "Mae Jemison", "Valentina Tereshkova", "Katherine Johnson"],
      answer: "Valentina Tereshkova",
      fact: "In 1963, Valentina Tereshkova became the first woman in space aboard Vostok 6. She orbited Earth 48 times—talk about a wild ride!"
    },
    {
      question: "Which scientist was the first to win TWO Nobel Prizes for her work with radioactivity?",
      options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Lise Meitner"],
      answer: "Marie Curie",
      fact: "Marie Curie won TWO Nobel Prizes—one in Physics and one in Chemistry. She’s the reason we understand radioactivity today!"
    },
    {
      question: "Who helped discover the structure of DNA?",
      options: ["Barbara McClintock", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Gertrude B. Elion"],
      answer: "Rosalind Franklin",
      fact: "Rosalind Franklin’s X-ray images helped crack the mystery of DNA’s double-helix shape. Science wouldn’t be the same without her!"
    },
    {
      question: "Who was the first African American woman in space?",
      options: ["Sally Ride", "Mae Jemison", "Valentina Tereshkova", "Katherine Johnson"],
      answer: "Mae Jemison",
      fact: "Mae Jemison made history in 1992 when she flew on the Space Shuttle Endeavour. She’s also a doctor, engineer, and all-around genius!"
    },
    {
      question: "Who was the first woman to get a medical degree in the U.S.?",
      options: ["Elizabeth Blackwell", "Marie Curie", "Florence Nightingale", "Clara Barton"],
      answer: "Elizabeth Blackwell",
      fact: "Elizabeth Blackwell broke barriers in 1849 by becoming the first woman in the U.S. to earn a medical degree. Talk about paving the way!"
    },
    {
      question: "Who co-discovered the first radio pulsars in 1967?",
      options: ["Jocelyn Bell Burnell", "Vera Rubin", "Lise Meitner", "Maria Goeppert Mayer"],
      answer: "Jocelyn Bell Burnell",
      fact: "Jocelyn Bell Burnell discovered pulsars—super-dense, spinning stars that flash like cosmic lighthouses!"
    }
  ],
  Technology: [
    {
      question: "Who is known as the first computer programmer?",
      options: ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Katherine Johnson"],
      answer: "Ada Lovelace",
      fact: "Back in the 1840s, Ada Lovelace wrote the world’s first computer program—before computers even existed!"
    },
    {
      question: "Who developed the first compiler and helped create COBOL?",
      options: ["Margaret Hamilton", "Grace Hopper", "Katherine Johnson", "Joan Clarke"],
      answer: "Grace Hopper",
      fact: "Grace Hopper invented the first compiler and helped create COBOL, a language still used in business computing today!"
    },
    {
      question: "Who led the development of the software for NASA’s Apollo missions?",
      options: ["Margaret Hamilton", "Katherine Johnson", "Dorothy Vaughan", "Annie Easley"],
      answer: "Margaret Hamilton",
      fact: "Margaret Hamilton’s coding skills literally helped land astronauts on the Moon in 1969!"
    },
    {
      question: "Who invented the World Wide Web?",
      options: ["Tim Berners-Lee", "Vinton Cerf", "Bill Gates", "Marc Andreessen"],
      answer: "Tim Berners-Lee",
      fact: "Tim Berners-Lee created the World Wide Web in 1989—without him, we wouldn’t be scrolling through the internet today!"
    }
  ],
  Engineering: [ 
    {
      question: "Who built the Brooklyn Bridge when the chief engineer got sick?",
      options: ["John Roebling", "Emily Warren Roebling", "Eiffel Gustave", "Frank Lloyd Wright"],
      answer: "Emily Warren Roebling",
      fact: "Emily Warren Roebling took over the Brooklyn Bridge project when her husband fell ill, proving that women could run major engineering projects!"
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      options: ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby"],
      answer: "Amelia Earhart",
      fact: "In 1932, Amelia Earhart became the first woman to fly solo across the Atlantic. She was a true aviation trailblazer!"
    },
    {
      question: "Which engineer helped design the first supersonic aircraft, the Concorde?",
      options: ["Hans von Ohain", "Geoffrey de Havilland", "Pierre Satre", "Robert H. Widmer"],
      answer: "Pierre Satre",
      fact: "Pierre Satre was the chief engineer behind the Concorde, a jet so fast it could fly from New York to London in under 3 hours!"
    },
    {
      question: "Who was NASA’s first Black female engineer?",
      options: ["Katherine Johnson", "Dorothy Vaughan", "Mary Jackson", "Annie Easley"],
      answer: "Mary Jackson",
      fact: "Mary Jackson became NASA’s first Black female engineer in the 1950s, helping break down barriers for women and people of color in STEM."
    }
  ],
  Art: [
    {
      question: "Which famous painter is known for her colorful self-portraits with a surreal twist?",
      options: ["Frida Kahlo", "Georgia O'Keeffe", "Yayoi Kusama", "Leonora Carrington"],
      answer: "Frida Kahlo",
      fact: "Frida Kahlo painted deeply personal self-portraits filled with bold colors, symbolism, and unfiltered emotion."
    },
    {
      question: "Who painted the Mona Lisa and was also an inventor?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Claude Monet"],
      answer: "Leonardo da Vinci",
      fact: "Leonardo da Vinci wasn’t just a painter—he also sketched designs for flying machines and robots!"
    },
    {
      question: "Which sculptor and painter was famous for her giant spider sculptures?",
      options: ["Auguste Rodin", "Georgia O'Keeffe", "Diego Rivera", "Louise Bourgeois"],
      answer: "Louise Bourgeois",
      fact: "Louise Bourgeois created massive metal spider sculptures, representing strength and protection."
    },
    {
      question: "Which Mexican muralist painted huge, powerful murals about history and politics?",
      options: ["Diego Rivera", "José Clemente Orozco", "Frida Kahlo", "David Alfaro Siqueiros"],
      answer: "Diego Rivera",
      fact: "Diego Rivera’s murals covered entire walls and told the stories of Mexican history, workers, and revolution."
    },
    {
      question: "Who is a Japanese artist known for polka dots and infinity mirror rooms?",
      options: ["Yoko Ono", "Takashi Murakami", "Yayoi Kusama", "Shigeru Ban"],
      answer: "Yayoi Kusama",
      fact: "Yayoi Kusama creates bright, playful polka-dot patterns and giant mirror rooms where you feel like you’re in another world."
    }
  ],
  Mathematics: [
    {
      question: "Which mathematician helped NASA send astronauts to the Moon?",
      options: ["Dorothy Vaughan", "Mary Jackson", "Katherine Johnson", "Annie Easley"],
      answer: "Katherine Johnson",
      fact: "Katherine Johnson’s calculations were so precise that NASA trusted her work over computers to send astronauts safely to space."
    },
    {
      question: "Who invented set theory and explored the concept of infinity?",
      options: ["Carl Friedrich Gauss", "Georg Cantor", "Leonhard Euler", "David Hilbert"],
      answer: "Georg Cantor",
      fact: "Georg Cantor showed that infinity isn’t just one size—there are different kinds of infinity!"
    },
    {
      question: "Which ancient Greek mathematician is called the 'Father of Geometry'?",
      options: ["Euclid", "Archimedes", "Pythagoras", "Plato"],
      answer: "Euclid",
      fact: "Euclid wrote 'Elements,' a book that shaped how we learn math, especially geometry."
    },
    {
      question: "Who came up with the famous theorem about right triangles?",
      options: ["Archimedes", "Pythagoras", "Eratosthenes", "Hypatia"],
      answer: "Pythagoras",
      fact: "Pythagoras is known for his theorem, which helps us find the longest side of a right triangle—super useful for builders and engineers!"
    }
  ]
};

export default function GuessWhoGame() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState("");

  // Load sounds
  const correctSound = new Audio("/sounds/correct.mp3");
  const wrongSound = new Audio("/sounds/wrong.mp3");
  const clickSound = new Audio("/sounds/click.mp3");
  const victorySound = new Audio("/sounds/victory.mp3");

  // Load sounds when component mounts
  useEffect(() => {
    correctSound.load();
    wrongSound.load();
    clickSound.load();
    victorySound.load();
  }, []);

  // Function to play sounds
  const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play().catch((err) => console.error("Sound play error:", err));
  };

  // Handle category selection
  const handleCategorySelect = (event) => {
    playSound(clickSound); // ✅ User interaction allows sound playback
    const category = event.target.value;
    setSelectedCategory(category);
    setQuestions([...categories[category]]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setMessage("");
  };

  // Handle answer selection
  const handleAnswerClick = (option) => {
    if (!questions[currentQuestion]) return;

    if (option === questions[currentQuestion].answer) {
      playSound(correctSound);
      setScore(score + 1);
      setMessage(`🎉 Correct! ${questions[currentQuestion].fact}`);
      setTimeout(() => {
        setMessage("");
        setSelectedAnswer(null);
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResult(true);
          playSound(victorySound);
        }
      }, 7000);
    } else {
      playSound(wrongSound);
      setMessage("❌ Oops! Try again.");
    }
    setSelectedAnswer(option);
  };

  // Confetti effect for perfect score
  useEffect(() => {
    if (showResult && score === questions.length) {
      confetti({ particleCount: 200, spread: 90 });
      playSound(victorySound);
    }
  }, [showResult, score, questions.length]);
  const QuestionCard = ({ selectedCategory, questions, currentQuestion }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">{selectedCategory}</h2>
      {selectedCategory && (
        <img
          src={categoryImages[selectedCategory]}
          alt={`${selectedCategory} category illustration`}
          className="w-40 h-40 mx-auto my-4 rounded-lg shadow-md"
        />
      )}
      <p className="text-lg mb-6">{questions[currentQuestion]?.question || "Loading..."}</p>
    </motion.div>
  );
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {!selectedCategory ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose a Category</h2>
          <p className="text-sm text-gray-600 mb-4">Win a category and collect the ⭐ or 👑!</p>
          <select className="w-full p-3 border rounded-lg text-lg" onChange={handleCategorySelect} defaultValue="">
            <option value="" disabled>Select a category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </motion.div>
      ) : !showResult ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">{selectedCategory}</h2>
          <p className="text-lg mb-6">{questions[currentQuestion]?.question || "Loading..."}</p>
          <div className="flex flex-col gap-4">
            {questions[currentQuestion]?.options.map((option, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.9 }}
                className={`w-full px-6 py-3 text-white rounded-lg transition text-lg font-semibold 
                ${selectedAnswer === option ? (option === questions[currentQuestion].answer ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600') : 'bg-gray-500 hover:bg-gray-600'}`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
          {message && <p className="mt-4 text-center text-lg italic">{message}</p>}
          <button
            className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-lg font-semibold"
            onClick={() => setSelectedCategory(null)}
          >
            Back to Categories
          </button>
        </motion.div>
      ) : (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold">Game Over!</h2>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
          <p className="text-2xl mt-4">{score >= questions.length - 1 ? "🏆 You earned a 👑!" : "🎉 You earned a ⭐!"}</p>
          <button
            className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-lg font-semibold"
            onClick={() => setSelectedCategory(null)}
          >
            Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
}
