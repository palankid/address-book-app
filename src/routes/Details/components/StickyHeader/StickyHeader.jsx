import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Input
} from 'semantic-ui-react';

import {routeNames} from '../../../../config/routes.config';

const StickyHeader = () => {
  const history = useHistory();
  const onChange = (event, data) => {
    console.warn('changeeeeeeeeeeee', event, data.value);
  };

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
