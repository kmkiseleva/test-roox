import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UsersList.scss";
import Card from "../../components/Card/Card";
import { RootState } from "../../store";
import { fetchUsers } from "../../store/fetchUsers";
import { TUser } from "../../types/types";

const UsersList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(
    (state: RootState) => state.usersSlice
  );
  const [filter, setFilter] = useState<TUser[]>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const sortCityHandler = () => {
    const sortedArray = [...items];
    sortedArray.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
    setFilter(sortedArray);
  };

  const sortCompanyHandler = () => {
    const sortedArray = [...items];
    sortedArray.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    setFilter(sortedArray);
  };

  return (
    <>
      <div className="side-container">
        <h3>Сортировка</h3>
        <button onClick={sortCityHandler}>по городу</button>
        <button onClick={sortCompanyHandler}>по компании</button>
      </div>
      <div className="main-container">
        <h2>Список пользователей</h2>
        {loading && <h4>Loading...</h4>}
        {!loading &&
          !filter &&
          items.map((item) => <Card key={item.id} item={item} />)}
        {filter && filter.map((item) => <Card key={item.id} item={item} />)}

        {!loading && (
          <div className="main-counter">
            Найдено {items.length} пользователей
          </div>
        )}
      </div>
    </>
  );
};

export default UsersList;
