function Button({ count, onClick }) {
  return (
    <div>
      <button
        onClick={() => {
          onClick(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Button;
