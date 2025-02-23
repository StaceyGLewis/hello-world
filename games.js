import { useState } from "react";

const categories = {
   Science: [
    {
      question: "I was the first woman to travel to space. Who am I?",
      options: ["Sally Ride", "Mae Jemison", "Valentina Tereshkova", "Katherine Johnson"],
      answer: "Valentina Tereshkova",
      fact: "Valentina Tereshkova became the first woman in space in 1963, flying aboard Vostok 6."
    },
    {
      question: "I am a Nobel Prize-winning scientist known for my work on radioactivity. Who am I?",
      options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Lise Meitner"],
      answer: "Marie Curie",
      fact: "Marie Curie was the first woman to win a Nobel Prize and the only person to win in two scientific fields: Physics and Chemistry."
    },
    {
      question: "I discovered the structure of DNA alongside Watson and Crick. Who am I?",
      options: ["Barbara McClintock", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Gertrude B. Elion"],
      answer: "Rosalind Franklin",
      fact: "Rosalind Franklin's work with X-ray diffraction was crucial in identifying the double-helix structure of DNA."
    },
    {
      question: "I was the first African American woman in space. Who am I?",
      options: ["Sally Ride", "Mae Jemison", "Valentina Tereshkova", "Katherine Johnson"],
      answer: "Mae Jemison",
      fact: "Mae Jemison became the first African American woman in space aboard the Space Shuttle Endeavour in 1992."
    },
    {
      question: "I was the first woman to receive a medical degree in the United States. Who am I?",
      options: ["Elizabeth Blackwell", "Marie Curie", "Florence Nightingale", "Clara Barton"],
      answer: "Elizabeth Blackwell",
      fact: "Elizabeth Blackwell became the first woman to receive a medical degree in the U.S. in 1849 and paved the way for women in medicine."
    },
    {
      question: "I co-discovered the first radio pulsars in 1967. Who am I?",
      options: ["Jocelyn Bell Burnell", "Vera Rubin", "Lise Meitner", "Maria Goeppert Mayer"],
      answer: "Jocelyn Bell Burnell",
      fact: "Jocelyn Bell Burnell was a key figure in discovering pulsars, a breakthrough in astrophysics."
    }
  ],
  Technology: [
    {
      question: "I use mathematics and logic to develop the first computer program. Who am I?",
      options: ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Katherine Johnson"],
      answer: "Ada Lovelace",
      fact: "Ada Lovelace was the first computer programmer, writing an algorithm for Charles Babbage’s Analytical Engine in the 1840s."
    },
    {
      question: "I developed the first compiler and contributed to COBOL programming language. Who am I?",
      options: ["Margaret Hamilton", "Grace Hopper", "Katherine Johnson", "Joan Clarke"],
      answer: "Grace Hopper",
      fact: "Grace Hopper was a pioneering computer scientist who created the first compiler and helped develop COBOL."
    },
    {
      question: "I played a major role in developing the onboard flight software for NASA's Apollo missions. Who am I?",
      options: ["Margaret Hamilton", "Katherine Johnson", "Dorothy Vaughan", "Annie Easley"],
      answer: "Margaret Hamilton",
      fact: "Margaret Hamilton developed the flight software for NASA's Apollo missions, pioneering modern software engineering."
    },
    {
      question: "I founded the World Wide Web. Who am I?",
      options: ["Tim Berners-Lee", "Vinton Cerf", "Bill Gates", "Marc Andreessen"],
      answer: "Tim Berners-Lee",
      fact: "Tim Berners-Lee created the World Wide Web in 1989, revolutionizing the internet."
    }
  ],
  Engineering: [ 
    {
      question: "I use mathematics and logic to develop the first computer program. Who am I?",
      options: ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Katherine Johnson"],
      answer: "Ada Lovelace",
      fact: "Ada Lovelace was the first computer programmer, writing an algorithm for Charles Babbage’s Analytical Engine in the 1840s."
    },
    {
      question: "I developed the first compiler and contributed to COBOL programming language. Who am I?",
      options: ["Margaret Hamilton", "Grace Hopper", "Katherine Johnson", "Joan Clarke"],
      answer: "Grace Hopper",
      fact: "Grace Hopper was a pioneering computer scientist who created the first compiler and helped develop COBOL."
    },
    {
      question: "I played a major role in developing the onboard flight software for NASA's Apollo missions. Who am I?",
      options: ["Margaret Hamilton", "Katherine Johnson", "Dorothy Vaughan", "Annie Easley"],
      answer: "Margaret Hamilton",
      fact: "Margaret Hamilton developed the flight software for NASA's Apollo missions, pioneering modern software engineering."
    },
    {
      question: "I founded the World Wide Web. Who am I?",
      options: ["Tim Berners-Lee", "Vinton Cerf", "Bill Gates", "Marc Andreessen"],
      answer: "Tim Berners-Lee",
      fact: "Tim Berners-Lee created the World Wide Web in 1989, revolutionizing the internet."
    },
    {
      question: "I designed the Brooklyn Bridge, a major engineering feat of the 19th century. Who am I?",
      options: ["John Roebling", "Emily Warren Roebling", "Eiffel Gustave", "Frank Lloyd Wright"],
      answer: "Emily Warren Roebling",
      fact: "Emily Warren Roebling took over the Brooklyn Bridge project after her husband fell ill, overseeing its completion."
    },
    {
      question: "I was the first woman to fly solo across the Atlantic Ocean. Who am I?",
      options: ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby"],
      answer: "Amelia Earhart",
      fact: "Amelia Earhart became the first woman to fly solo across the Atlantic in 1932."
    },
    {
      question: "I designed the first supersonic aircraft, the Concorde. Who am I?",
      options: ["Hans von Ohain", "Geoffrey de Havilland", "Pierre Satre", "Robert H. Widmer"],
      answer: "Pierre Satre",
      fact: "Pierre Satre was the chief engineer responsible for the development of the Concorde."
    },
    {
      question: "I was the first African American woman to work as an engineer at NASA. Who am I?",
      options: ["Katherine Johnson", "Dorothy Vaughan", "Mary Jackson", "Annie Easley"],
      answer: "Mary Jackson",
      fact: "Mary Jackson became NASA’s first Black female engineer and contributed to spaceflight research."
    }
  ],
  Art: [
    {
      question: "I am a famous painter known for my surrealist self-portraits. Who am I?",
      options: ["Frida Kahlo", "Georgia O'Keeffe", "Yayoi Kusama", "Leonora Carrington"],
      answer: "Frida Kahlo",
      fact: "Frida Kahlo was a Mexican artist known for her deeply personal and surrealist self-portraits."
    },
    {
      question: "I was an artist and inventor known for painting the Mona Lisa. Who am I?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Claude Monet"],
      answer: "Leonardo da Vinci",
      fact: "Leonardo da Vinci was a painter, scientist, and inventor whose works include the Mona Lisa and The Last Supper."
    },
    {
      question: "I was a sculptor and painter known for my larger-than-life portraits of women. Who am I?",
      options: ["Auguste Rodin", "Georgia O'Keeffe", "Diego Rivera", "Louise Bourgeois"],
      answer: "Louise Bourgeois",
      fact: "Louise Bourgeois was a French-American artist known for her large-scale sculpture and installations."
    },
    {
      question: "I was a Mexican muralist famous for depicting indigenous culture and politics. Who am I?",
      options: ["Diego Rivera", "José Clemente Orozco", "Frida Kahlo", "David Alfaro Siqueiros"],
      answer: "Diego Rivera",
      fact: "Diego Rivera was a leading Mexican muralist whose works highlighted social and political themes."
    },
    {
      question: "I was a Japanese contemporary artist known for my infinity mirror rooms. Who am I?",
      options: ["Yoko Ono", "Takashi Murakami", "Yayoi Kusama", "Shigeru Ban"],
      answer: "Yayoi Kusama",
      fact: "Yayoi Kusama is a world-renowned artist known for her polka dots and infinity mirror installations."
    }
  ],
  Mathematics: [
    {
      question: "I was a mathematician whose calculations helped NASA send astronauts to the Moon. Who am I?",
      options: ["Dorothy Vaughan", "Mary Jackson", "Katherine Johnson", "Annie Easley"],
      answer: "Katherine Johnson",
      fact: "Katherine Johnson was a NASA mathematician whose work was crucial to the success of U.S. space missions, including Apollo 11."
    },
    {
      question: "I developed set theory and introduced the concept of infinite numbers. Who am I?",
      options: ["Carl Friedrich Gauss", "Georg Cantor", "Leonhard Euler", "David Hilbert"],
      answer: "Georg Cantor",
      fact: "Georg Cantor was a German mathematician who created modern set theory and introduced different sizes of infinity."
    },
    {
      question: "I was an ancient Greek mathematician known as the 'father of geometry.' Who am I?",
      options: ["Euclid", "Archimedes", "Pythagoras", "Plato"],
      answer: "Euclid",
      fact: "Euclid wrote 'Elements,' one of the most influential works in mathematics, establishing the foundations of geometry."
    },
    {
      question: "I created a famous theorem about right triangles. Who am I?",
      options: ["Archimedes", "Pythagoras", "Eratosthenes", "Hypatia"],
      answer: "Pythagoras",
      fact: "Pythagoras is best known for the Pythagorean theorem, which relates the sides of a right triangle."
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setQuestions([...categories[category]]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setMessage("");
  };

  const handleAnswerClick = (option) => {
    if (!questions[currentQuestion]) return;
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setMessage(`Correct! ${questions[currentQuestion].fact}`);
      setTimeout(() => {
        setMessage("");
        setSelectedAnswer(null);
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResult(true);
        }
      }, 8000);
    } else {
      setMessage("Incorrect. Try again!");
    }
    setSelectedAnswer(option);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {!selectedCategory ? (
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose a Category</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      ) : !showResult ? (
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">{selectedCategory}</h2>
          <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full px-6 py-3 text-white rounded-lg transition text-lg font-semibold ${selectedAnswer === option ? (option === questions[currentQuestion].answer ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600') : 'bg-gray-500 hover:bg-gray-600'}`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {message && <p className="mt-4 text-center text-lg italic">{message}</p>}
        </div>
      ) : (
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold">Game Over!</h2>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
          <button className="px-6 py-3 mt-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-lg font-semibold" onClick={() => setSelectedCategory(null)}>Play Again</button>
        </div>
      )}
    </div>
  );
}
