import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Input
} from 'semantic-ui-react';

import {routeNames} from '../../../../config/routes.config';

/**
 * Sticky header component with a link to settings page and a search input
 * @returns {Object<Node>} React node
 */
const StickyHeader = () => {
  const history = useHistory();

  /**
   * Handle keyboard input events
   * @param {Object<SyntheticEvent>} event - React synthetic event
   * @param {Object} payload - Input payload
   * @param {Object} payload.value - Input value
   */
  const onChange = (event, { value }) => {
    console.warn('changeeeeeeeeeeee', event, value);
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
          onChange={onChange}
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          size="large"
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
