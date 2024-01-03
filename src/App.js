import React from 'react';
import './style.css';
import { useState } from 'react';
import mel from './mel.png'; // Import the image file
import mel2 from './mel2.png'; 
import mel3 from './mel3.png'; 
import mel4 from './mel4.png'; 
import mel5 from './mel5.png'; 
import mel6 from './mel6.png'; 


function App() {
  const [position, setPosition] = useState(1);

  const handleRadioChange = (event) => {
    const newPosition = parseInt(event.target.value);
    setPosition(newPosition === 7 ? 1 : newPosition); // Wrap around from last to first
  };

  return (
    <div> 
      
      <div className="app">
        <h1 className="title">Melinda French Gates</h1>
        <div className="subtitle">
          <h3 className="birth-year">1964</h3>
        
        </div>
      </div>
      <div className="image-row">
          <img src={mel3} alt="Melinda French Gates" className="mel-image" />
          <img src={mel4} alt="Melinda French Gates" className="mel-image" />
          <img src={mel} alt="Melinda French Gates" className="mel-image" />
      </div>
      

      <div>
  <h1 style={{ textAlign: 'center' , paddingTop:'30px'}}>Work and Contributions</h1>
     </div>



      <div className="void" id="void">
        <div className="crop">
          <ul id="card-list" style={{ '--count': 5 }}>
            <li>
              <div className="card">
                <a href="#">
                  <span className="model-name">Bill & Melinda Gates Foundation</span>
                  <span>
                    Co-founded with her then-husband Bill Gates in 2000, the foundation is one of the world's largest private charitable foundations. It focuses on global health, education, and poverty alleviation, among other issues.
                  </span>
                </a>
              </div>
            </li>
            <li>
              <div className="card">
                <a href="#">
                  <span className="model-name">Women's Empowerment</span>
                  <span>
                    Is a strong advocate for women's rights and empowerment. She has worked towards expanding access to education and healthcare for women and girls, as well as promoting gender equality in various spheres.
                  </span>
                </a>
              </div>
            </li>
            <li>
              <div className="card">
                <a href="#">
                  <span className="model-name">Global Health Initiatives</span>
                  <span>
                    Has been actively involved in initiatives to combat infectious diseases such as HIV/AIDS, malaria, and polio.
                  </span>
                </a>
              </div>
            </li>
            <li>
              <div className="card">
                <a href="#">
                  <span className="model-name">Education</span>
                  <span>
                    Has expressed a commitment to improving educational opportunities for children, particularly in underserved communities.
                  </span>
                </a>
              </div>
            </li>
            <li>
              <div className="card">
                <a href="#">
                  <span className="model-name">Pandemic Preparedness</span>
                  <span>
                    The Gates Foundation has been a key player in supporting efforts to prepare for and respond to global health emergencies.
                  </span>
                </a>
              </div>
            </li>
          </ul>
          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div className="mask"></div>
        <div className="center-circle"></div>
      </div>


      <div className="image-row">
          <img src={mel5} alt="Melinda French Gates" className="mel-big" />
          <img src={mel2} alt="Melinda French Gates" className="mel-image" />
          <img src={mel6} alt="Melinda French Gates" className="mel-big" />
      </div>
       
      <div className='body'>
  <input type="radio" name="position" value="1" checked={position === 1} onChange={handleRadioChange} />
  <input type="radio" name="position" value="2" checked={position === 2} onChange={handleRadioChange} />
  <input type="radio" name="position" value="3" checked={position === 3} onChange={handleRadioChange} />
  <input type="radio" name="position" value="4" checked={position === 4} onChange={handleRadioChange} />
  <input type="radio" name="position" value="5" checked={position === 5} onChange={handleRadioChange} />
  <input type="radio" name="position" value="6" checked={position === 6} onChange={handleRadioChange} />
  <main id="carousel" style={{ '--position': position }}>
    <div className="item">
      <div className="content">
        <h2>Early Life</h2>
        <p>Melinda Ann French was born on August 15, 1964, in Dallas, Texas. She is the second born to Raymond Joseph French Jr, an aerospace engineer, and Elaine Agnes Amerland, a homemaker.</p>
        <p>French, a Catholic, attended St. Monica Catholic School, where she was the valedictorian of her class. At age 14, French was introduced to the Apple II by her father.</p>
      </div>
    </div>

    <div className="item">
      <div className="content">
        
        <h2>Education</h2>
        <p>Mrs. Bauer, a school teacher who advocated teaching computer science at the all-girls school. It was from this experience she developed her interest in computer games and the BASIC programming language.</p>
        <p>French graduated as valedictorian from Ursuline Academy of Dallas in 1982. She earned a bachelor's degree in computer science and economics from Duke University in 1986 and an MBA from Duke's Fuqua School of Business in 1987. At Duke, French was a member of the Kappa Alpha Theta sorority, Beta Rho Chapter.</p>
      
      </div>
    </div>

    <div className="item">
    <div className="content">
        
        <h2>Career</h2>
        <p>French Gates's first job was tutoring children in mathematics and computer programming.After graduation, she became a marketing manager with Microsoft, being responsible for the development of multimedia products</p>
        <p>She worked on Expedia, which became one of the most popular travel booking websites. In the early 1990s, French Gates was appointed as General Manager of Information Products, a position which she held until 1996. </p>
        <p>She left Microsoft that year, reportedly, to focus on starting a family</p>
      
      </div>
    </div>

    <div className="item">
    <div className="content">
        
        <h2>Awards</h2>
        <p>Presidential Medal of Freedom (2016): Bill and Melinda Gates were awarded the Presidential Medal of Freedom by President Barack Obama in recognition of their significant contributions to philanthropy and global health.</p>
        <p>Lasker-DeBakey Clinical Medical Research Award (2013): The Gates Foundation received this award for its commitment to improving global health, particularly in the areas of vaccines, infectious diseases, and maternal and child health.</p>
      
      </div>
    </div>

    <div className="item">
    <div className="content">
        
        <h2>Awards</h2>
        <p>Prince of Asturias Award for International Cooperation (2006): Bill and Melinda Gates were honored for their efforts to improve global health and reduce poverty through the Bill & Melinda Gates Foundation.</p>
        <p>She has been repeated recognized by Forbes in its annual list of the 100 Most Powerful Women</p>
      
      </div>
    </div>

    <div className="item">
    <div className="content">
        
        <h2>Personal Life</h2>
        <p>Melinda began dating Microsoft CEO Bill Gates in 1987, after meeting him at a trade fair in New York.In 1994, she married Gates in a private ceremony held in Lanai, Hawaii. They have three children: daughters Jennifer and Phoebe Gates and son Rory Gates.</p>
        <p>In May 2021, French Gates and her then-husband announced in a joint statement on social media their decision to divorce, ending 27 years of marriage, and 34 years as a couple</p>
      
      </div>
    </div>

  </main>
</div>

      
    </div>
  );
}

export default App;

