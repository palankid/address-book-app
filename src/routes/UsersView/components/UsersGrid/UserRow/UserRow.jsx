import React from 'react';
import { shape, string } from 'prop-types';
import { Button, Table } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { selectUser } from '../../../reducer';

/**
 * Component representing a single user row
 * @param {Object} props - React PropTypes
 * @returns {Object<Node>} React node
 */
const UserRow = ({
  user: {
    email,
    login: { uuid, username },
    name: { first, last },
    picture: { thumbnail }
  }
}) => {
  const dispatch = useDispatch();

  const onDetailsClick = () => {
    dispatch(selectUser(uuid));
  };

  return (
    <Table.Row>
      <Table.Cell>
        <img
          className="user__image"
          src={ thumbnail }
        />
      </Table.Cell>
      <Table.Cell>{ first }</Table.Cell>
      <Table.Cell>{ last }</Table.Cell>
      <Table.Cell>{ username }</Table.Cell>
      <Table.Cell>{ email }</Table.Cell>
      <Table.Cell>
        <Button
          secondary
          onClick={onDetailsClick}>
          Details
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

UserRow.propTypes = {
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

export default UserRow;
