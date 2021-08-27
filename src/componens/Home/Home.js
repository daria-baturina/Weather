import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const redirectToCurrentLocation = async () => {
    const response = await fetch(process.env.REACT_APP_IP_DETECT_API_URL);

    const { city } = await response.json();

    setIsLoading(false);

    history.push(`/${city}`);
  };

  useEffect(() => {
    redirectToCurrentLocation();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      Home
    </div>
  );
};

export default Home;