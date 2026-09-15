import "./Aikietzu.css";

export default function Aikietzu() {
  const animations = {
    run: {
      start: 0,
      frames: 5,
    },

    jump: {
      start: 5,
      frames: 4,
    },

    glide: {
      start: 9,
      frames: 7,
    },
  };

  return (
    <div className="aikietzu">
      <div className="aikietzu-sprite" />
    </div>
  );
}
