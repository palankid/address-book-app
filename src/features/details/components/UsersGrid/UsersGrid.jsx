import React from 'react';
import { Container, Table } from "semantic-ui-react";

import User from './User'

const UsersGrid = (props) => {
  const usersRows = props.users.map(user => (
    <User
      key={user.id.value}
      user={user}
    />
  ));

  return (
    <Container className="users-grid">
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>User Name</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>Email Address</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {usersRows}
        </Table.Body>
      </Table>
    </Container>
  )
};

export default UsersGrid;
