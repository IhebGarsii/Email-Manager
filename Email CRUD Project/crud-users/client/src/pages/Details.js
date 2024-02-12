import { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
  const [form, setForm] = useState({});
  const [put, setPut] = useState({});
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`/api/users/${id}`).then((res) => {
       
        
      });
    };
    console.log(put);
    fetchData();
  }, []);

  ////change
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  //submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`/api/users/${id}`, form)
      .then((res) => {
        navigate("/");
        console.log("put suc");
      })
      .catch((err) => {
        setErrors(err.response.data);
        console.log("not put");
      });
  };

  return (
    <div className="container mt-4 col-12 col-lg-4">
      <form onSubmit={onSubmitHandler}>
        <InputGroup
          label="Email"
          type="text"
          name="Email"
          onChangeHandler={onChangeHandler}
          errors={errors.Email}
          /*           value={put.Email}
           */
        />
        <InputGroup
          label="LastName"
          type="text"
          name="LastName"
          onChangeHandler={onChangeHandler}
          errors={errors.LastName}
          /*           value={put.LastName}
           */
        />
        <InputGroup
          label="FirstName"
          type="text"
          name="FirstName"
          onChangeHandler={onChangeHandler}
          errors={errors.FirstName}
          /*           value={put.FirstName}
           */
        />
        <InputGroup
          label="Age"
          type="text"
          name="Age"
          onChangeHandler={onChangeHandler}
          errors={errors.Age}
          /*           value={put.Age}
           */
        />
        <button className="btn btn-primary" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Details;
