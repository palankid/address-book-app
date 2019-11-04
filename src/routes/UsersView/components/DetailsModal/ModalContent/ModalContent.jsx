import React from 'react';
import { Image } from 'semantic-ui-react';
import { object, shape, string } from 'prop-types';

const ModalContent = ({
  user: {
    cell,
    location: { city, state, street },
    name: { first, last },
    phone,
    picture
  }
}) => {
  return (
    <div className="modal-content">
      <Image
        className="modal-content__image"
        src={picture.large}
      />
      <table>
        <tbody>
          <tr>
            <td className="modal-content__row-title">Name</td>
            <td>{ `${first} ${last}` }</td>
          </tr>
          <tr>
            <td className="modal-content__row-title">Street</td>
            <td>{ `${street.name} str. ${street.number}` }</td>
          </tr>
          <tr>
            <td className="modal-content__row-title">City</td>
            <td>{ city }</td>
          </tr>
          <tr>
            <td className="modal-content__row-title">State</td>
            <td>{ state }</td>
          </tr>
          <tr>
            <td className="modal-content__row-title">Phone</td>
            <td>{ phone }</td>
          </tr>
          <tr>
            <td className="modal-content__row-title">Cell phone</td>
            <td>{ cell }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ModalContent.propTypes = {
  user: shape({
    cell: string,
    location: shape({
      city: string,
      state: string,
      street: object,
    }),
    phone: string,
    picture: shape({ large: string }),
  }),
};

export default ModalContent;
