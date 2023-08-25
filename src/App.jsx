import React from 'react';
import Header from './header';
import Footer from './footer';
import Info from './info';
import Card from './cards';
import Img from './Our_team';

const App = () => {
  return (
    <div>
      <Header />
      <Img />
      <div className="card-container">
        {Info.map((info) => (
          <Card
            key={info.id}
            Facilitator={info.Facilitator}
            imgURL={info.imgURL}
            Session={info.Session}
            Date={info.Date}
            Time={info.Time}
            Info={info.Info}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
