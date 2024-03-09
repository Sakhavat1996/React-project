import classes from './card.module.css'
export default function Card({ product }) {
  return (
    <div key={product.id} className={classes['product-item']}>
      <div className={classes['product-img']}>
        <img
          src={product.thumbnail}
          alt={product.thumbnail}
        />
      </div>
        <div className={classes['product-data']}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
        <button className={classes['delete-btn']}>X</button>
    </div>
  );
}
