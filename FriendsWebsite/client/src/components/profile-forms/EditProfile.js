import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
    company: '',
    website: '',
    location: '',
    occupation: '',
    hobbies: '',
    bio: '',
    gender: '',
    age: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
};

const EditProfile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
	history
}) => {
    
    const [formData, setFormData] = useState(initialState);
	const [displaySocialInputs, toggleSocialInputs] = useState(false);
	const {
		company,
        website,
        location,
        gender,
        age,
		occupation,
		hobbies,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history, true);
	};
    useEffect(() => {
        if (!profile) getCurrentProfile();
        if (!loading) {
          const profileData = { ...initialState };
          for (const key in profile) {
            if (key in profileData) profileData[key] = profile[key];
          }
          for (const key in profile.social) {
            if (key in profileData) profileData[key] = profile.social[key];
          }
          setFormData(profileData);
        }
      }, [loading, getCurrentProfile, profile]);
    
	return loading && profile === null ? (
		<Redirect to='/dashboard' />
	) : (
		<Fragment>
			<h1 className='large text-primary'>Edit Your Profile</h1>
			<p className='lead'>
				<i className='fas fa-user' /> Add some changes to your profile
			</p>
			<small>* = required field</small>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<select name='occupation' value={occupation} onChange={e => onChange(e)}>
						<option value='0'>* Select your occupation</option>
						<option value='Teacher'>Teacher</option>
						<option value='Mechanic'>Mechanic</option>
						<option value='Artist'>Artist</option>
						<option value='administrator'>Administrator</option>
						<option value='Doctor'>Doctor</option>
						<option value='Legal Services'>Legal Services</option>
                        <option value='Militory'>Militory</option>
                        <option value='Shipping'>Shipping</option>
                        <option value='Pilot'>Pilot</option>
                        <option value='Food Service'>Food Service</option>
                        <option value='Retail Service'>Retail Service</option>
                        <option value='Postal Service'>Postal Service</option>
                        <option value='Secretary'>Secretary</option>
                        <option value='Tourism'>Tourism</option>
                        <option value='Author'>Author</option>
                        <option value='Polician'>Polician</option>
                        <option value='Electrician'>Electrician</option>
                        <option value='Farmer'>Farmer</option>
						<option value='Information Services'>Information Services</option>

						<option value='Other'>Other</option>
					</select>
					<small className='form-text'>
						Give us an defination of your career
					</small>
				</div>
                <div className='form-group'>
                    <select name='gender' value={gender} onChange={e => onChange(e)}>
						<option value='0'>Gender</option>
						<option value='Man'>Man</option>
                        <option value='Woman'>Woman</option>
                        <option value='Genderqueer'>Genderqueer/Non-Binary</option>
                        <option value='Unknown'>Prefer not to disclose</option>               
                    </select>	
				</div>
                <div className='form-group'>
					<input
						type='text'
						placeholder='Age'
						name='age'
						value={age}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Company'
						name='company'
						value={company}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Could be your own company or one you work for
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Website'
						name='website'
						value={website}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Could be your own or a company website
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* Hobbies'
						name='hobbies'
						value={hobbies}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Please use comma separated values (eg. Swimming,Basketball,Pingpong,Hiking)
					</small>
				</div>
				<div className='form-group'>
					<textarea
						placeholder='A short bio of yourself'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>Tell us a little about yourself</small>
				</div>

				<div className='my-2'>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-light'
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>
				{displaySocialInputs && (
					<Fragment>
						<div className='form-group social-input'>
							<i className='fab fa-twitter fa-2x' />
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={twitter}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x' />
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={facebook}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x' />
							<input
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={youtube}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-linkedin fa-2x' />
							<input
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={linkedin}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x' />
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</Fragment>
	);
};


EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
  );
  
