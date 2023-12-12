import "../styles/label.css"

const Label: React.FC<{ title: string }> = ({title}) => {
  return (
      <div className="label">
        <p className="title">{title}</p>
      </div>
  );
};

export default Label;