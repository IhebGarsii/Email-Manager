import { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RawDetails from "../components/RowDetails";
import axios from "axios";
const Home = () => {
  const [users, setUseres] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("api/users").then((res) => {
        const data = res.data.data;
        setUseres(data);
      });
    };
   fetchData();
  }, []);
  console.log("1");
  const OnDelete = (id_) => {
    axios.delete(`/api/users/${id_}`);
  };
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("api/users", form)
      .then((res) => {
        alert(res.data.message);
        console.log("res suc");
      })
      .catch((err) => {
        setErrors(err.response.data);
        console.log("errors");
      });
  };

  return (
    <div className="row p-4">
      {/* <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Success:"
        >
          <use xlink:href="#check-circle-fill" />
        </svg>
        <div>An example success alert with an icon</div>
      </div> */}
      <div className="mt-4">
        <h2>Crud Users</h2>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            onChangeHandler={onChangeHandler}
            errors={errors.Email}
          />
          <InputGroup
            label="LastName"
            type="text"
            name="LastName"
            onChangeHandler={onChangeHandler}
            errors={errors.LastName}
          />
          <InputGroup
            label="FirstName"
            type="text"
            name="FirstName"
            onChangeHandler={onChangeHandler}
            errors={errors.FirstName}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            onChangeHandler={onChangeHandler}
            errors={errors.Age}
          />
          <button className="btn btn-primary" type="submit">
            Add user
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Email, LastName, FirstName, Age, _id }) => (
              <RawDetails
                Email={Email}
                LastName={LastName}
                FirstName={FirstName}
                Age={Age}
                Id={_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
