import React from 'react';
import { array } from 'prop-types';
import { Container, Table } from 'semantic-ui-react';

import UserRow from './UserRow'

/**
 * Component for showing all the users in a grid
 * @param {Object} props - React PropTypes
 * @param {Array} props.users - List of users to render
 * @returns {Object<Node>} React node
 */
const UsersGrid = ({ users }) => {
  const usersRows = users.map(user => (
    <UserRow
      key={user.login.uuid}
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

UsersGrid.propTypes = {
  users: array
};

export default UsersGrid;
