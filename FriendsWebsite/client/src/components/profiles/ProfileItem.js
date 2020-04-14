import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';


const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    occupation,
    company,
    bio,
    location,
    hobbies
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {occupation} {company && <span> at {company}</span>}
        </p>
        <p>
          {bio}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {hobbies.slice(0, 5).map((hobby, index) => (
          <li key={index} className='text-primary'>
             <i><FiHeart /></i>{hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;