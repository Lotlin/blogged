import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fweight,
  } = prop;

  const classes = classNames(
    className,
    {[style[`fs${size}`]]: size},
    style[color],
    {[style[`fst${tsize}`]]: tsize},
    {[style[`dst${dsize}`]]: dsize},
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    style[fweight],
  );

  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};
