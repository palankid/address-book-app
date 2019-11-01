import React from 'react';
import {
  Button,
  Container,
  Icon,
  Input
} from "semantic-ui-react";

const StickyHeader = () => {

  const onChange = (event, data) => {
    console.warn('changeeeeeeeeeeee', event, data.value);
  };

  return (
    <header className="sticky-header">
      <Container className="sticky-header__container">
        <Icon
          name="address book"
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
        />
      </Container>
    </header>
  )
};

export default StickyHeader;
