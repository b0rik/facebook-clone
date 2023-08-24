import './content.css';

const Content = ({ children, borderLeft = true, borderRight = true }) => {
  const contentClassName = `content ${borderLeft ? '' : 'content--remove-border-left'} ${borderRight ? '' : 'content--remove-border-right'}`;

  return (
    <section className={contentClassName}>
      {children}
    </section>
  );
};

export default Content;