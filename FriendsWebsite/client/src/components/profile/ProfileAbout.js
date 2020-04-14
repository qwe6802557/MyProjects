import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';

const ProfileAbout = ({
  profile: {
    bio,
    hobbies,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
    <h2 className='text-primary'>hobbies</h2>
    <div className='hobbies'>
      {hobbies.map((hobby, index) => (
        <div key={index} className='p-1'>
          <i><FiHeart /></i> {hobby}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
