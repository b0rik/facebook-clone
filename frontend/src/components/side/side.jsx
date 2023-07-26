import '../../styles/side/side.css';

const Side = ({ children, borderLeft = true, borderRight = true }) => {
  const  sideClassName = `side ${borderLeft ? '' : 'side--remove-border-left'} ${borderRight ? '' : 'side--remove-border-right'}`;

  return (
    <aside className={sideClassName}>
      {children}
    </aside>
  );
};

export default Side;