import '../styles/content.css';

const Content = ({ children, borderLeft = true, borderRight = true }) => {
  const contentClassName = `content ${borderLeft ? '' : 'remove-border-left'} ${borderRight ? '' : 'remove-border-right'}`;

  return (
    <section className={contentClassName}>
      {children}
    </section>
  );
};

export default Content;