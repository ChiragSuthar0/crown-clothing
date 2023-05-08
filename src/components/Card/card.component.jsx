import './card.styles.scss';

const Card = ({ categoryName, categoryImg }) => {
  return (
    <div className="category-card">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${categoryImg})`,
          backgroundSize: 'cover',
        }}
      />
      <div className="category-info">
        <h2>{categoryName}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Card;
