import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import StickyHeader from './components/StickyHeader';
import UsersGrid from './components/UsersGrid';
import DetailsModal from './components/DetailsModal'
import EndOfUsersMessage from './components/EndOfUsersMessage';
import { fetchUsers } from './reducer';
import { filteredUsersSelector, isMaxUsersReachedSelector } from './selectors';
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage';

/**
 * Users view route component
 */
const UsersView = () => {
  const [isBottomReached, setIsBottomReached] = useState(true);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const filteredUsers = useSelector(filteredUsersSelector);
  const isMaxUsersReached = useSelector(isMaxUsersReachedSelector);
  const isLoading = useSelector(state => state.usersView.isLoading);

  /**
   * Initiate fetching users and subscribe to document scroll events
   */
  useEffect(() => {
    /**
     * Intercept document scroll events and dispatch action to pre-fetch
     * new batch of users when the user reaches the bottom of the page
     */
    const onScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const isBottomReached = rect.bottom <= window.innerHeight;
      setIsBottomReached(isBottomReached);
      isBottomReached && dispatch(fetchUsers());
    };

    document.addEventListener('scroll', onScroll);
    !isMaxUsersReached && dispatch(fetchUsers());

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <LoadingMessage
        message="Loading users"
        visible={isBottomReached && isLoading}
      />
      <StickyHeader />
      <UsersGrid
        users={filteredUsers}
      />
      <EndOfUsersMessage
        visible={isMaxUsersReached}
      />
      <DetailsModal />
    </div>
  )
};

export default UsersView
