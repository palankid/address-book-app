import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import StickyHeader from './components/StickyHeader';
import UsersGrid from './components/UsersGrid';
import DetailsModal from './components/DetailsModal'
import EndOfUsersMessage from './components/EndOfUsersMessage';
import { getUsers, setShouldLiftState } from './reducer';
import {
  filteredUsersSelector,
  isMaxUsersReachedSelector,
  isUsersPopulatedSelector
} from './selectors';
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage';

/**
 * Users view route component
 */
const UsersView = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const filteredUsers = useSelector(filteredUsersSelector);
  const isMaxUsersReached = useSelector(isMaxUsersReachedSelector);
  const isLoading = useSelector(state => state.usersView.isLoading);
  const isUsersPopulated = useSelector(isUsersPopulatedSelector);
  const users = useSelector(state => state.usersView.users);

  /**
   * Check if bottom of the view is reached
   * @returns {Boolean}
   */
  const getIsBottomReached = () => {
    const rect = containerRef.current.getBoundingClientRect();
    return rect.bottom <= window.innerHeight;
  };

  /**
   * Initiate fetching users and subscribe to document scroll events
   */
  useEffect(() => {
    /**
     * Intercept document scroll events and dispatch action to pre-fetch users
     * when the user scrolls to the bottom of the page
     */
    const onScroll = () => {
      const isBottomReached = getIsBottomReached();
      isBottomReached && dispatch(getUsers());
    };

    // Fetch first batch of users initially and show them immediately when available
    !isUsersPopulated && dispatch(getUsers());

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Recalculate isBottomReached flag and update it to store when users list is updated
   */
  useEffect(() => {
    const isBottomReached = getIsBottomReached();
    dispatch(setShouldLiftState(isBottomReached));
  }, [users]);

  return (
    <div ref={containerRef}>
      <LoadingMessage
        message="Loading users"
        visible={isLoading}
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
