import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import nationalities from './nationalities.config';
import { selectNationality } from './reducer';

const Settings = () => {
  const dispatch = useDispatch();
  const nationality = useSelector(
    state => state.settings.nationality
  );

  const onChangeNationality = (event, { value }) => {
    dispatch(selectNationality(value));
  };

  console.log(nationality);

  return (
    <div className="app-settings">
      <Dropdown
        fluid
        selection
        placeholder="Select Nationality"
        value={nationality}
        options={nationalities}
        onChange={onChangeNationality}
      />
    </div>
  );
};

Settings.propTypes = {};

export default Settings;
