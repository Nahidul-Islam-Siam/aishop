import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subtitle, highlight = false, customStyles = {} }) => {
  return (
    <div className={`text-center p-6 ${highlight ? "bg-yellow-100" : "bg-gray-50"}`} style={customStyles}>
      <h1 className={`text-3xl font-bold ${highlight ? "text-yellow-600" : "text-gray-800"}`}>
        {title.split(' ').join(' 
 ')}
      </h1>
      {subtitle && (
        <p className="text-lg mt-2 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  highlight: PropTypes.bool,
  customStyles: PropTypes.object,
};

export default Header;
