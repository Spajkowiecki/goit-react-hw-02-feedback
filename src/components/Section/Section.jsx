import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <p className={style.title}>{title}</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
