export default function Button({ text, className, onClick, url }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
