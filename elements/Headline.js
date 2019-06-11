import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../lib/ThemeContext'

export default function Headline({ children, centered }) {
  const theme = React.useContext(ThemeContext)
  return (
    <h2>
      {children}
      <style jsx>{`
        font-size: 2rem;
        margin: 0;

        @media (min-width: ${theme.breakpoints.lg}) {
          font-size: 3rem;
        }

        ${centered &&
          `
          text-align: center;
        `}
      `}</style>
    </h2>
  )
}

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
