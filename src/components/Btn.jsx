import "../css/btn-style.css";

export default function Btn({ type, id, name, onClick }) {
  return (
    <div className="btn-area">
      <button className="btn" type={type} id={id} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
