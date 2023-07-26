import '../../styles/side/side.css';

const Side = ({ children, borderLeft = true, borderRight = true }) => {
  const  sideClassName = `side ${borderLeft ? '' : 'remove-border-left'} ${borderRight ? '' : 'remove-border-right'}`;

  return (
    <aside className={sideClassName}>
      {children}
    </aside>
  );
};

export default Side;