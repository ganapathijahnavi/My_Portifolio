import sentimentImg from '../assets/sentiment.png';
import groceryShopImg from '../assets/grocery_shop.png';
import crewBotImg from '../assets/crew_bot.png';
import daftImg from '../assets/DAFT.png';
import carbonCreditImg from '../assets/carbon_credit.png';
import kolleruImg from '../assets/kolleru.png';
import faceRecognitionImg from '../assets/FaceRecognition.png';

const projects = [
  {
    title: 'Kolleru Bird Sanctuary Website',
    category: 'Web Design',
    description:
      'Informational site highlighting sanctuary details and visuals.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'Netlify'],
    link: 'https://birdsheaven.netlify.app',
    image: kolleruImg,
  },
  {
    title: 'Sentiment Analysis on Movie Reviews',
    category: 'Machine Learning',
    description:
      'Designed and evaluated sentiment models on IMDb data.Built a Gradio web interface for real-time predictions and visual insights. ',
    stack: ['Python', 'scikit-learn', 'NLTK', 'Gradio', 'Pandas'],
    link: 'https://github.com/ganapathijahnavi/Sentiment-Analysis-on-Movie-Reviews',
    image: sentimentImg,
  },
  {
    title: 'Face Recognition with Yolo-DeepFace',
    category: 'Computer Vision',
    description:
      'This project combines the power of "YOLOv8" for human detection and "DeepFace" for facial recognition to identify individuals in an image. It detects people using YOLO and then recognizes faces by comparing them with a database of known individuals using DeepFace.',
    stack: ['Python', 'YOLO', 'DeepFace', 'OpenCV'],
    link: 'https://github.com/ganapathijahnavi/Face-Recognition-with-Yolo-DeepFace',
    image: faceRecognitionImg,
  },
  {
    title: 'Academic AI with RAG',
    category: 'LLM',
    description:
      'Retrieval-augmented assistant that answers academic queries with context. Integrated OpenAI LLM with ChromaDB to enable context-aware retrieval from structured academic content. Developed a FastAPI backend and React-based frontend, delivering an end-to-end deployed application.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'ChromaDB'],
    link: 'https://crew-bot.netlify.app',
    image: crewBotImg,
  },
  {
    title: 'ShopSmart Grocery Web App',
    category: 'Full-Stack',
    description:
      'Online grocery platform with user, product, and order management workflows. Implemented JWT authentication and built user, product, and order management features. Deployed on Render and Netlify for seamless access.',
    stack: ['React', 'Node.js', 'MongoDB', 'Render', 'Netlify'],
    link: 'https://nextstopgroceries.netlify.app/',
    image: groceryShopImg,
  },
  
  {
    title: 'DAFT Blood Test Interpretation',
    category: 'Healthcare AI',
    description:
      'Built a domain-specific LLM fine-tuning pipeline for personalized blood test report interpretation. Focused on domain-adaptive fine-tuning to enhance medical-context understanding and personalization. Applied NLP techniques using Hugging Face Transformers for healthcare-focused AI solutions.',
    stack: ['Python', 'Hugging Face', 'NLP', 'Transformers'],
    link: 'https://healthexplain.netlify.app/',
    image: daftImg,
  },
  {
    title: 'Online Marketplace Web App',
    category: 'Full-Stack',
    description:
      'Built a responsive online marketplace web application using React, enabling users to browse and manage products. Built reusable React components and integrated RESTful APIs for dynamic data rendering and seamless navigation.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    link: 'https://ecovault.netlify.app',
    image: carbonCreditImg,
  },
  
]

export default projects