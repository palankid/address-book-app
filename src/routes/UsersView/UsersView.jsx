import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import StickyHeader from './components/StickyHeader';
import UsersGrid from './components/UsersGrid';
import DetailsModal from './components/DetailsModal'
import EndOfUsersMessage from './components/EndOfUsersMessage';
import { fetchUsers } from './reducer';

/**
 * Users view route component
 */
const UsersView = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersView.users);

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
      const isAtBottomOfPage = rect.bottom === window.innerHeight;
      isAtBottomOfPage && dispatch(fetchUsers());
    };

    document.addEventListener('scroll', onScroll);
    !users.length && dispatch(fetchUsers());

    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <StickyHeader />
      <UsersGrid
        users={users}
      />
      <EndOfUsersMessage
        users={users}
      />
      <DetailsModal />
    </div>
  )
};

export default UsersView
