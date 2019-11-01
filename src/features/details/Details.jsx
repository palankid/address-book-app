import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import StickyHeader from './components/StickyHeader';
import UsersGrid from './components/UsersGrid';

import { fetchUsers } from "./reducer";
import './Details.scss';

const Details = () => {
  const dispatch = useDispatch();
  const users = useSelector(
    state => state.details.users
  );

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  return (
    <React.Fragment>
      <StickyHeader />
      <UsersGrid
        users={users}
      />
    </React.Fragment>
  )
};

export default Details
