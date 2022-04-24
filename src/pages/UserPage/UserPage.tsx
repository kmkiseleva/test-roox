import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import "./UserPage.scss";

const UserPage = () => {
  const { id } = useParams();
  const { items } = useSelector((state: RootState) => state.usersSlice);
  const [readonly, setReadonly] = useState(true);

  const currentUser = items.find((item) => item.id === Number(id));

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: currentUser.name,
      username: currentUser.username,
      email: currentUser.email,
      street: currentUser.address.street,
      city: currentUser.address.city,
      zipcode: currentUser.address.zipcode,
      phone: currentUser.phone,
      website: currentUser.website,
      comment: "",
    },
  });

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <>
      <div className="side-container">
        <h3>Сортировка</h3>
        <button>по городу</button>
        <button>по компании</button>
      </div>
      <div className="main-user-container">
        <div className="user-header">
          <h2>Профиль пользователя</h2>
          <button
            className="edit-button"
            onClick={() => setReadonly(!readonly)}
          >
            Редактировать
          </button>
        </div>
        <div>
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-fields">
                <label>Name</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.name ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("name", { required: true })}
                />

                <label>User name</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.username ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("username", { required: true })}
                />

                <label>E-mail</label>
                <input
                  disabled={readonly}
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                  style={{
                    border: errors?.email ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                />

                <label>Street</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.street ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("street", { required: true })}
                />
                <label>City</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.city ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("city", { required: true })}
                />
                <label>Zip code</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.zipcode ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("zipcode", { required: true })}
                />
                <label>Phone</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.phone ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("phone", {
                    required: true,
                  })}
                />
                <label>Website</label>
                <input
                  disabled={readonly}
                  style={{
                    border: errors.website ? "1px solid red" : "",
                    color: readonly ? "rgba(0, 0, 0, 0.3)" : "#000000",
                  }}
                  {...register("website", {
                    required: true,
                  })}
                />
                <label>Comment</label>
                <textarea
                  disabled={readonly}
                  {...register("comment")}
                ></textarea>
              </div>
              <button
                type="submit"
                className={readonly ? "form-button" : "form-button active"}
                disabled={readonly || !isValid}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
