import './App.css';
import About from './components/About';
import Header from './components/Header';
import Section from './components/Section';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Services from './pages/Services';
import twitter from './components/assets/twitter.svg';
import linked from './components/assets/linked.svg';
import message from './components/assets/message.svg';
import phone from './components/assets/phone.svg';
import { Compo } from './components/Compo';




function App() {

  const link = 'https://www.linkedin.com/in/maxwell-anthony-38335222b/';
  const twit = 'https://twitter.com/Tonysignificant';
  return (
    <>
      <div className='hero-img'>
      </div>
      <Header />

      <Section text1={'HI THERE'} bigText={'I AM MAXWELL ANTHONY'} text2={'A Top-notch Developer'} />
      <About calj={'about'} classhu={'wrap'} bigT={'About Me'} smallT={'Maxwell is a Passionate and goal driven Tech-Master whose interest cut across various technology, to build solutions that solves real Life Problems'} ppd={linked} ppn={twitter} linl={link} twitt={twit} />
      <Skill yrt={'projects'} />
      <div className='win'>
        <h2>Services I Render</h2>
        <p className='p'>Listed Below are what i render with ease</p>
        <Services yeo={'services'} />
      </div>

      <div className='yello'>
        <div className='found'>
          <About calj={'contact'} classhu={'bgf'} className='bgf' bigT={'Get In Touch'} smallT={'You can reach me on My Handles and Contact No.'} ppd={linked} ppn={twitter} linl={link} twitt={twit} reach={'- TPrime'} />
          <div className='firedo'>
            <Compo pic={message} text={'tonymax1049@gmail.com'} stext={'Send a message Anytime'} />
            <Compo pic={phone} text={'+234 8116 2011 52'} stext={'Send a call across anytime!'} />
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
}
 function Form() {
  return(
    <div className='yellob'>
     <form action='' method=''>
      <h4>Need a Service?</h4>
      <h2>Send A Message</h2>
      <input  type='text' placeholder='Enter Fullname' />
      <input required type='email' placeholder='Enter Email Address' />
      <input  type='text' placeholder='Write a Message' />
      <button type='submit'>Send Message</button>
     </form>
    </div>
  )
}


export default App;

