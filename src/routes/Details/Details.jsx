import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import StickyHeader from './components/StickyHeader';
import UsersGrid from './components/UsersGrid';
import DetailsModal from './components/DetailsModal'

import { fetchUsers } from './reducer';
import './Details.scss';

const Details = () => {
  const dispatch = useDispatch();
  const users = useSelector(
    state => state.details.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <React.Fragment>
      <StickyHeader />
      <UsersGrid
        users={users}
      />
      <DetailsModal />
    </React.Fragment>
  )
};

export default Details
