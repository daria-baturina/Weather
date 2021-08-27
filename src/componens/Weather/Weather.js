import SearchInput from "../SearchInput/SearchInput";
import {useEffect, useState} from "react";
import WeatherApi from "../../services/WeatherApi";
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Weather = () => {
  const { city } = useParams();

  const [data, setData] = useState(null);

  const loadData = async () => {

    const api = new WeatherApi();

    const result = await api.find(city);

    setData(result);
  };

  useEffect(() => {
      loadData();
    },
    []);

  return (
    <div>
      <SearchInput/>
      {!data && <Spinner/>}
      {data && (
        <div>
          {data.temperature}
          <div>
            <p>{data.forecast[0].temperature}</p>
            <p>{data.forecast[2].temperature}</p>
            <p>{data.forecast[1].temperature}</p>
          </div>
        </div>
      )}
    </div>
      );
      };

export default Weather;