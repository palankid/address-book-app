import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Container, Dropdown, Icon} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { routeNames } from '../../config/routes.config';
import nationalities from './nationalities.config';
import { selectNationality } from './reducer';
import { resetUsersView } from '../UsersView/reducer';

/**
 * Settings route component
 * @returns {Object<Node>} React node
 */
const Settings = () => {
  const routerHistory = useHistory();
  const dispatch = useDispatch();
  const nationality = useSelector(state => state.settings.nationality);

  /**
   * Handle dropdown change events
   * @param {Object<SyntheticEvent>} event - React synthetic event
   * @param {Object} payload - Input payload
   * @param {Object} payload.value - Input value
   */
  const onChangeNationality = (event, { value }) => {
    dispatch(selectNationality(value));
    dispatch(resetUsersView());
  };

  /**
   * Handle back button click events
   */
  const onBackClick = () => {
    routerHistory.push(routeNames.root);
  };

  return (
    <Container className="settings">
      <div className="settings__row">
        <div className="settings__back-link">
          <Icon
            link
            name="arrow left"
            size="big"
            onClick={onBackClick}
          />
        </div>
        <Icon
          name="setting"
          size="big"
        />
        <span className="settings__title">
          Settings
        </span>
      </div>
      <div className="settings__row">
        <span className="settings__row-title">
          Nationality
        </span>
        <Dropdown
          className="settings__dropdown"
          fluid
          selection
          placeholder="Select Nationality"
          value={nationality}
          options={nationalities}
          onChange={onChangeNationality}
        />
      </div>
    </Container>
  );
};

Settings.propTypes = {};

export default Settings;
