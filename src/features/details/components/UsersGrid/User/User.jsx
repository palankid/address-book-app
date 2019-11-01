import React from 'react';
import { shape, string } from 'prop-types';
import { Button, Table } from "semantic-ui-react";

const User = ({
  user: {
    email,
    login: { username },
    name: { first, last },
    picture: { thumbnail }
  }
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <img
          className="user__image"
          alt="helooooo"
          src={ thumbnail }
        />
      </Table.Cell>
      <Table.Cell>{ first }</Table.Cell>
      <Table.Cell>{ last }</Table.Cell>
      <Table.Cell>{ username }</Table.Cell>
      <Table.Cell>{ email }</Table.Cell>
      <Table.Cell>
        <Button secondary>
          Details
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

User.propTypes = {
  user: shape({
    email: string,
    login: shape({
      username: string
    }),
    name: shape({
      first: string,
      last: string
    }),
    picture: shape({
      thumbnail: string
    })
  })
};

export default User;
