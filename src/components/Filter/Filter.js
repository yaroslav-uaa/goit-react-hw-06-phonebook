import PropTypes from 'prop-types';
import f from './Filter.module.css';
import filter from '../../redux/contacts/actions/filterContacts';
import { connect } from 'react-redux';

const Filter = ({ filter, onChange }) => (
  <>
    <input
      className={f.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Enter name to find"
    />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
