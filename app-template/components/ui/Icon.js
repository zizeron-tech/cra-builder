const Icon = ({ name, size = '25px', color = 'inherit' }) => (
  <i className={`pi ${name}`} style={{ color, fontSize: size }} />
);

export default Icon;
