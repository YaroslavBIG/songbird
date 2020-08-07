import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <React.Fragment>
        <h1>Home</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ipsa illo possimus fugit sunt iusto sapiente, quae voluptatibus praesentium id ducimus. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Possimus fuga, ducimus debitis fugiat sapiente accusantium consequuntur,
          modi commodi eius qui similique explicabo assumenda consectetur quo voluptatum ipsum voluptate voluptas!
          Repudiandae in, minima odio dolor harum explicabo soluta.
          Ab debitis, nostrum praesentium ut velit voluptatum dolorem doloremque, voluptatem earum, perspiciatis minima!
        </p>
       <div className="button--start"><Link to='/train'>Train</Link></div>
       <div className="button--start"><Link to='/passeridae'>Start Game</Link></div>
    </React.Fragment>
)};
