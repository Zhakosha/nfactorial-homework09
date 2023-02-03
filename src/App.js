import './App.css';
import Header from './Header';
import Hello from './components/Hello';
import Footer from './components/Footer';

function Articles(props) {
  return(
    <div className='article'>
      <div className='text'>
        <p>{props.name}</p>
        <p>{props.summary}</p>
      </div>
      <div className='image'>
      <img src={props.image}/>
      </div>
    </div>
  )
}

function App() {

  const texts = [
    {
        name: '7 Practical CSS Tips',
        summary: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
        image: './images/2.png',
    },
    {
        name: '3 Practical JS Tips',
        summary: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        image: './images/3.png',
    },
    {
        name: '5 Practical HTML Tips',
        summary: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        image: './images/4.png',
    }
]


  return (
    <div className="App">
      <Header/>
      <Hello/>
      
     {texts.map(function(text, index) {
        return <Articles key={index} name={text.name} summary={text.summary} image={text.image}/>
      })
      }
      
      <Footer/>
    </div>
  );
}

export default App;
