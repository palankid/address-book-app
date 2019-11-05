import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  Icon,
  Input
} from 'semantic-ui-react';

import { routeNames } from '../../../../config/routes.config';
import { changeFilter } from '../../reducer';

/**
 * Sticky header component with a link to settings page and a search input
 * @returns {Object<Node>} React node
 */
const StickyHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.usersView.filter);

  /**
   * Handle keyboard input events
   * @param {Object<SyntheticEvent>} event - React synthetic event
   * @param {Object} payload - Input payload
   * @param {Object} payload.value - Input value
   */
  const onChange = (event, { value }) => {
    dispatch(changeFilter(value));
  };

  /**
   * Handle settings button click events
   */
  const onSettingsClick = () => {
    history.push(routeNames.settings);
  };

  return (
    <header className="sticky-header">
      <Container className="sticky-header__container">
        <Icon
          name="address book outline"
          size="huge"
        />
        <Input
          className="sticky-header__input"
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          size="large"
          onChange={onChange}
          value={filter}
        />
        <Button
          circular
          secondary
          icon="setting"
          size="big"
          onClick={onSettingsClick}
        />
      </Container>
    </header>
  )
};

export default StickyHeader;
