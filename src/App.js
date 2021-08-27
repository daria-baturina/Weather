import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./componens/Home/Home";
import Weather from "./componens/Weather/Weather";
import Comments from "./componens/Comments/Comments";
import AddComment from "./componens/AddComment/AddComment";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:city">
        <Weather />
      </Route>
      <Route exact path="/:city/comments">
        <Comments />
        <AddComment />
      </Route>
    </BrowserRouter>
  );
};

export default App;
