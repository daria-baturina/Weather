import {useLocation} from "react-router-dom";

const AddComment = () => {

  const location = useLocation();

  if (location.search !== '?add') {
    return null;
  }

  return (
    <div>
      {location.search}
    </div>
  );
};

export default AddComment;