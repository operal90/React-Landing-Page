function Footer_card(props) {
  return (
    <div>
      <a href="#">
        <img
          src={require("/src/img/" + props.item.image)}
          className="h-8"
          alt=""
        />
      </a>
    </div>
  );
}
export default Footer_card;
