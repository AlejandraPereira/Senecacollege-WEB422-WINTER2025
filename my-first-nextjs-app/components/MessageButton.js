export default function MessageButton() {
    const handleClick = () => {
      alert("Button clicked!");
    };
  
    return (
      <button onClick={handleClick}>
        Click Me
      </button>
    );
  }